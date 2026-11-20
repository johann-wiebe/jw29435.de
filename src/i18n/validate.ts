// Vergleicht jede Übersetzung mit der deutschen Quelle. Der Typ prüft schon fehlende und
// überzählige Schlüssel; hier geht es um das, was tsc nicht sieht: Platzhalter, interne Links,
// Auszeichnung und leere Texte. scripts/prerender.mjs bricht den Build bei Fehlern ab.
import { catalogs } from "./catalogs";
import { defaultCode } from "./languages";
import { isPageKey } from "./paths";
import { linkTarget, parseRich } from "./rich";

type Tree = { [key: string]: Tree | string };

function signature(text: string) {
  const parts = parseRich(text);
  const vars = parts.flatMap((part) => (part.kind === "var" ? [part.name] : [])).sort();
  const pages = parts
    .flatMap((part) => (part.kind === "link" && part.href.startsWith("page:") ? [part.href] : []))
    .sort();
  const links = parts.filter((part) => part.kind === "link").length;
  const strong = parts.filter((part) => part.kind === "strong").length;
  return JSON.stringify({ vars, pages, links, strong });
}

function compare(source: Tree, target: unknown, path: string, errors: string[]) {
  if (typeof target !== "object" || target === null) {
    errors.push(`${path}: Abschnitt fehlt`);
    return;
  }
  const other = target as Tree;
  for (const key of Object.keys(other)) {
    if (!(key in source)) errors.push(`${path}.${key}: gibt es in der deutschen Quelle nicht`);
  }
  for (const [key, value] of Object.entries(source)) {
    const here = `${path}.${key}`;
    const translated = other[key];
    if (typeof value !== "string") {
      compare(value, translated, here, errors);
      continue;
    }
    if (typeof translated !== "string") {
      errors.push(`${here}: Text fehlt`);
      continue;
    }
    if (translated.trim() === "") errors.push(`${here}: Text ist leer`);
    for (const part of parseRich(translated)) {
      if (part.kind !== "link") continue;
      const linked = linkTarget(part.href);
      if (!linked || ("page" in linked && !isPageKey(linked.page))) {
        errors.push(`${here}: Linkziel „${part.href}“ ist nicht erlaubt`);
      }
    }
    if (/[<>]/.test(translated)) errors.push(`${here}: enthält < oder > (kein HTML in Texten)`);
    if (signature(value) !== signature(translated)) {
      errors.push(
        `${here}: Platzhalter, Links oder **fett** weichen von der deutschen Quelle ab\n    de: ${value}\n    →   ${translated}`,
      );
    }
  }
}

export function validateCatalogs(): string[] {
  const errors: string[] = [];
  const source = catalogs[defaultCode] as unknown as Tree;
  for (const [code, messages] of Object.entries(catalogs)) {
    if (code !== defaultCode) compare(source, messages, code, errors);
  }
  return errors;
}
