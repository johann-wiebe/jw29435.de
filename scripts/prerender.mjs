// Rendert jede Seite jeder Sprache als eigene HTML-Datei, damit GitHub Pages /impressum/,
// /en/datenschutz/ usw. direkt ausliefert, setzt <html lang>, Titel, Beschreibung, Canonical und
// hreflang, schreibt die Sitemap und legt für alte Pfade statische Weiterleitungen an.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

const { render, pageEntries, redirects, languages, validateCatalogs, siteUrl } = await import(
  pathToFileURL(join(ssrDir, "entry-server.js")).href
);

const problems = validateCatalogs();
if (problems.length > 0) {
  console.error(`Übersetzungen passen nicht zur deutschen Quelle:\n  ${problems.join("\n  ")}`);
  process.exit(1);
}

const template = await readFile(join(dist, "index.html"), "utf8");

const escape = (s) =>
  s.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

function replaceOnce(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`Platzhalter fehlt im Template: ${pattern}`);
  return html.replace(pattern, replacement);
}

async function write(file, html) {
  const target = join(dist, file);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html);
  console.log(`  ${file}`);
}

const meta = (attr, name, content) => `<meta ${attr}="${name}" content="${escape(content)}" />`;
const alternateLink = (tag, { hreflang, path }) =>
  `<${tag} rel="alternate" hreflang="${escape(hreflang)}" href="${siteUrl}${escape(path)}" />`;

console.log(`Vorgerendert (${languages.map((language) => language.code).join(", ")}):`);
const entries = pageEntries();
for (const page of entries) {
  let html = replaceOnce(template, /<!--app-html-->/, () => render(page.url));
  html = replaceOnce(html, /<html lang=".*?">/, `<html lang="${escape(page.lang)}">`);
  html = replaceOnce(html, /<title>.*?<\/title>/, `<title>${escape(page.title)}</title>`);
  html = replaceOnce(html, /<meta property="og:title" content=".*?" \/>/, meta("property", "og:title", page.title));
  html = replaceOnce(html, /<meta name="description" content=".*?" \/>/, meta("name", "description", page.description));
  html = replaceOnce(html, /<meta property="og:description" content=".*?" \/>/, meta("property", "og:description", page.description));
  html = replaceOnce(html, /<meta property="og:image:alt" content=".*?" \/>/, meta("property", "og:image:alt", page.ogImageAlt));
  html = replaceOnce(
    html,
    /<meta property="og:locale" content=".*?" \/>/,
    [
      meta("property", "og:locale", page.ogLocale),
      ...page.ogLocaleAlternates.map((locale) => meta("property", "og:locale:alternate", locale)),
    ].join("\n    "),
  );
  if (page.canonical) {
    const href = siteUrl + page.canonical;
    html = replaceOnce(
      html,
      /<link rel="canonical" href=".*?" \/>/,
      [`<link rel="canonical" href="${href}" />`, ...page.alternates.map((alt) => alternateLink("link", alt))].join("\n    "),
    );
    html = replaceOnce(html, /<meta property="og:url" content=".*?" \/>/, meta("property", "og:url", href));
  } else {
    html = replaceOnce(html, /\s*<link rel="canonical" href=".*?" \/>/, "");
    html = replaceOnce(html, /\s*<meta property="og:url" content=".*?" \/>/, "");
    html = replaceOnce(html, /<meta name="description"/, '<meta name="robots" content="noindex" />\n    <meta name="description"');
  }
  await write(page.file, html);
}

// Sitemap mit allen Sprachfassungen; jede URL nennt alle Alternativen samt x-default.
const urls = entries
  .filter((page) => page.canonical)
  .map((page) =>
    [
      "  <url>",
      `    <loc>${siteUrl}${escape(page.canonical)}</loc>`,
      ...page.alternates.map((alt) => `    ${alternateLink("xhtml:link", alt)}`),
      "  </url>",
    ].join("\n"),
  );
await write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`,
);

for (const { from, to } of redirects) {
  const target = escape(to);
  await write(
    join(from.slice(1), "index.html"),
    `<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <title>Weiterleitung – jw29435</title>
    <meta name="robots" content="noindex" />
    <link rel="canonical" href="${siteUrl}${target}" />
    <meta http-equiv="refresh" content="0; url=${target}" />
  </head>
  <body>
    <p>Diese Seite ist umgezogen: <a href="${target}">${siteUrl}${target}</a></p>
  </body>
</html>
`,
  );
}

await rm(ssrDir, { recursive: true, force: true });
