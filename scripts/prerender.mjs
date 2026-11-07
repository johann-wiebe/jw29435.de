// Rendert jede Route als eigene HTML-Datei, damit GitHub Pages /impressum und /datenschutz
// direkt ausliefert. Alte Pfade bekommen eine statische Weiterleitung.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");
const siteUrl = "https://jw29435.de";

const { render, pages, redirects } = await import(
  pathToFileURL(join(ssrDir, "entry-server.js")).href
);
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

console.log("Vorgerendert:");
for (const page of Object.values(pages)) {
  const url = page.path === "*" ? "/404" : page.path;
  let html = replaceOnce(template, /<!--app-html-->/, () => render(url));
  html = replaceOnce(html, /<title>.*?<\/title>/, `<title>${escape(page.title)}</title>`);
  html = replaceOnce(html, /<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${escape(page.title)}" />`);
  html = replaceOnce(html, /<meta name="description" content=".*?" \/>/, `<meta name="description" content="${escape(page.description)}" />`);
  html = replaceOnce(html, /<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${escape(page.description)}" />`);
  if (page.canonical) {
    const href = siteUrl + page.canonical;
    html = replaceOnce(html, /<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${href}" />`);
    html = replaceOnce(html, /<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${href}" />`);
  } else {
    html = replaceOnce(html, /\s*<link rel="canonical" href=".*?" \/>/, "");
    html = replaceOnce(html, /\s*<meta property="og:url" content=".*?" \/>/, "");
    html = replaceOnce(html, /<meta name="description"/, '<meta name="robots" content="noindex" />\n    <meta name="description"');
  }
  await write(page.file, html);
}

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
