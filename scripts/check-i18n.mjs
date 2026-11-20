// Prüft den fertigen Build in dist/ auf vollständige Sprachfassungen. Aufruf nach `npm run build`:
//   npm run check:i18n
// Geprüft wird unabhängig vom App-Code (nur src/i18n/languages.json und die Dateinamen in
// src/i18n/locales/ werden gelesen):
//   - jede Seite gibt es in jeder registrierten Sprache
//   - <html lang> passt zur Sprache des Pfads, Canonical und og:url zeigen auf die Seite selbst
//   - hreflang vollständig (alle Sprachen + x-default) und wechselseitig
//   - der Sprachumschalter verlinkt jede Sprache
//   - keine toten internen Links (href, src, srcset) in irgendeiner HTML-Datei
//   - die Sitemap listet jede Seite mit allen Alternativen
// Exit-Code 1 bei jedem Fehler.
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const siteUrl = "https://jw29435.de";
const defaultCode = "de";
/** URL-Schema, bewusst hier noch einmal statt aus dem App-Code */
const slugs = ["", "impressum/", "datenschutz/"];

const errors = [];
const fail = (message) => errors.push(message);

if (!existsSync(join(dist, "index.html"))) {
  console.error("dist/ fehlt – zuerst `npm run build` ausführen.");
  process.exit(1);
}

// Registrierte Sprachen: Eintrag in languages.json und Datei in locales/
const registry = JSON.parse(readFileSync(join(root, "src/i18n/languages.json"), "utf8"));
const localeFiles = readdirSync(join(root, "src/i18n/locales"))
  .filter((file) => file.endsWith(".ts"))
  .map((file) => file.slice(0, -3));
for (const code of localeFiles) {
  if (!registry.some((language) => language.code === code)) {
    fail(`src/i18n/locales/${code}.ts: Sprache fehlt in src/i18n/languages.json`);
  }
}
for (const code of localeFiles) {
  if (code === defaultCode) continue;
  const source = readFileSync(join(root, `src/i18n/locales/${code}.ts`), "utf8");
  if (!/const \w+: Messages = \{/.test(source)) {
    fail(`src/i18n/locales/${code}.ts: Typangabe fehlt (const ${code}: Messages = { … })`);
  }
}
const codes = new Set(registry.map((language) => language.code));
if (codes.size !== registry.length) fail("src/i18n/languages.json: doppelter Sprachcode");
const languages = registry.filter((language) => localeFiles.includes(language.code));
if (!languages.some((language) => language.code === defaultCode)) fail("Deutsch (de.ts) fehlt");

const prefix = (language) => (language.code === defaultCode ? "/" : `/${language.code}/`);
const pathOf = (language, slug) => prefix(language) + slug;
const fileOf = (path) => join(dist, path, "index.html");
const url = (path) => siteUrl + path;

// Hilfen zum Lesen der vorgerenderten Seiten (eigene, gleichförmige Ausgabe; Regex genügt)
const attr = (tag, name) => {
  const match = new RegExp(`\\s${name}="([^"]*)"`, "i").exec(tag);
  return match ? decode(match[1]) : null;
};
const decode = (value) =>
  value.replaceAll("&quot;", '"').replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&#x27;", "'").replaceAll("&amp;", "&");
const tags = (html, name) => html.match(new RegExp(`<${name}\\b[^>]*>`, "gi")) ?? [];
const head = (html) => html.slice(0, html.indexOf("</head>"));

function readHtml(file) {
  try {
    return readFileSync(file, "utf8");
  } catch {
    return null;
  }
}

function hreflangMap(html) {
  const map = new Map();
  for (const tag of tags(head(html), "link")) {
    if (attr(tag, "rel") !== "alternate") continue;
    const hreflang = attr(tag, "hreflang");
    if (!hreflang) continue;
    if (map.has(hreflang)) fail(`hreflang="${hreflang}" doppelt`);
    map.set(hreflang, attr(tag, "href"));
  }
  return map;
}

// 1. Jede Seite in jeder Sprache, mit lang, Canonical, hreflang und Umschalter
const pages = new Map(); // url → hreflang-Map
for (const slug of slugs) {
  const expected = new Map(languages.map((language) => [language.hreflang, url(pathOf(language, slug))]));
  expected.set("x-default", url(pathOf({ code: defaultCode }, slug)));

  for (const language of languages) {
    const path = pathOf(language, slug);
    const where = `${path} (${relative(root, fileOf(path))})`;
    const html = readHtml(fileOf(path));
    if (html === null) {
      fail(`${where}: Seite fehlt`);
      continue;
    }

    const lang = /<html\b[^>]*\slang="([^"]*)"/i.exec(html)?.[1];
    if (lang !== language.lang) fail(`${where}: <html lang="${lang}">, erwartet "${language.lang}"`);

    const canonical = tags(head(html), "link").find((tag) => attr(tag, "rel") === "canonical");
    if (!canonical || attr(canonical, "href") !== url(path)) {
      fail(`${where}: canonical ist ${canonical ? attr(canonical, "href") : "nicht gesetzt"}, erwartet ${url(path)}`);
    }
    const ogUrl = tags(head(html), "meta").find((tag) => attr(tag, "property") === "og:url");
    if (!ogUrl || attr(ogUrl, "content") !== url(path)) fail(`${where}: og:url zeigt nicht auf die Seite selbst`);
    if (!/<title>[^<]+<\/title>/.test(html)) fail(`${where}: <title> fehlt oder ist leer`);

    const alternates = hreflangMap(html);
    for (const [hreflang, href] of expected) {
      if (alternates.get(hreflang) !== href) {
        fail(`${where}: hreflang="${hreflang}" ist ${alternates.get(hreflang) ?? "nicht gesetzt"}, erwartet ${href}`);
      }
    }
    for (const hreflang of alternates.keys()) {
      if (!expected.has(hreflang)) fail(`${where}: unerwartetes hreflang="${hreflang}"`);
    }
    pages.set(url(path), alternates);

    if (languages.length > 1) {
      const switcher = /<details class="lang-switch"[\s\S]*?<\/details>/.exec(html)?.[0] ?? "";
      for (const other of languages) {
        const link = tags(switcher, "a").find((tag) => attr(tag, "hreflang") === other.hreflang);
        if (!link) fail(`${where}: Sprachumschalter verlinkt ${other.code} nicht`);
        else if (attr(link, "href") !== pathOf(other, slug)) {
          fail(`${where}: Sprachumschalter führt für ${other.code} zu ${attr(link, "href")}, erwartet ${pathOf(other, slug)}`);
        }
      }
    }
  }
}

// Wechselseitig: Jede Seite, auf die ein hreflang zeigt, zeigt mit demselben Satz zurück.
for (const [pageUrl, alternates] of pages) {
  for (const [hreflang, href] of alternates) {
    if (hreflang === "x-default") continue;
    const back = pages.get(href);
    if (!back) {
      fail(`${pageUrl}: hreflang="${hreflang}" zeigt auf ${href}, das keine gebaute Sprachseite ist`);
    } else if (![...back.values()].includes(pageUrl)) {
      fail(`${href}: verweist nicht zurück auf ${pageUrl}`);
    }
  }
}

// 2. <html lang> aller übrigen HTML-Dateien (404, Weiterleitungen) und tote Links überall
function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}
const htmlFiles = walk(dist).filter((file) => file.endsWith(".html"));
const byCode = new Map(languages.map((language) => [language.code, language]));

function resolveLocal(target) {
  let path = target.startsWith(siteUrl) ? target.slice(siteUrl.length) || "/" : target;
  if (!path.startsWith("/") || path.startsWith("//")) return true; // extern, mailto, Anker
  path = decodeURIComponent(path.replace(/[?#].*$/, ""));
  const full = join(dist, path);
  if (path.endsWith("/")) return existsSync(join(full, "index.html"));
  if (existsSync(full) && statSync(full).isFile()) return true;
  // GitHub Pages leitet /impressum auf /impressum/ um
  return existsSync(join(full, "index.html"));
}

for (const file of htmlFiles) {
  const rel = "/" + relative(dist, file).replaceAll("\\", "/");
  const html = readFileSync(file, "utf8");

  const first = rel.split("/")[1];
  const expectedLang = (byCode.get(first) ?? byCode.get(defaultCode))?.lang;
  const lang = /<html\b[^>]*\slang="([^"]*)"/i.exec(html)?.[1];
  if (lang !== expectedLang) fail(`${rel}: <html lang="${lang}">, erwartet "${expectedLang}"`);

  const targets = [];
  for (const tag of html.match(/<(a|link|script|img|source|iframe)\b[^>]*>/gi) ?? []) {
    for (const name of ["href", "src"]) {
      const value = attr(tag, name);
      if (value) targets.push(value);
    }
    const srcset = attr(tag, "srcset");
    if (srcset) targets.push(...srcset.split(",").map((part) => part.trim().split(/\s+/)[0]));
  }
  const refresh = /http-equiv="refresh" content="\d+;\s*url=([^"]+)"/i.exec(html);
  if (refresh) targets.push(decode(refresh[1]));

  for (const target of targets) {
    if (!resolveLocal(target)) fail(`${rel}: toter Link ${target}`);
  }
}

// 3. Sitemap
const sitemap = readHtml(join(dist, "sitemap.xml"));
if (sitemap === null) {
  fail("dist/sitemap.xml fehlt");
} else {
  const entries = new Map();
  for (const block of sitemap.match(/<url>[\s\S]*?<\/url>/g) ?? []) {
    const loc = /<loc>([^<]+)<\/loc>/.exec(block)?.[1];
    const alternates = new Map(
      tags(block, "xhtml:link").map((tag) => [attr(tag, "hreflang"), attr(tag, "href")]),
    );
    if (loc) entries.set(decode(loc), alternates);
  }
  for (const [pageUrl, alternates] of pages) {
    const listed = entries.get(pageUrl);
    if (!listed) {
      fail(`sitemap.xml: ${pageUrl} fehlt`);
      continue;
    }
    for (const [hreflang, href] of alternates) {
      if (listed.get(hreflang) !== href) fail(`sitemap.xml: ${pageUrl} ohne Alternative hreflang="${hreflang}" → ${href}`);
    }
    if (listed.size !== alternates.size) fail(`sitemap.xml: ${pageUrl} hat andere Alternativen als die Seite`);
  }
  for (const loc of entries.keys()) {
    if (!pages.has(loc)) fail(`sitemap.xml: ${loc} ist keine gebaute Sprachseite`);
  }
  const robots = readHtml(join(dist, "robots.txt")) ?? "";
  if (!robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) fail("robots.txt verweist nicht auf die Sitemap");
}

if (errors.length > 0) {
  console.error(`check:i18n: ${errors.length} Fehler\n  ${errors.join("\n  ")}`);
  process.exit(1);
}
console.log(
  `check:i18n: ${languages.length} Sprachen (${languages.map((language) => language.code).join(", ")}), ` +
    `${pages.size} Seiten, ${htmlFiles.length} HTML-Dateien – alles in Ordnung.`,
);
