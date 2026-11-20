// URL-Schema: Deutsch ohne Präfix, alle anderen Sprachen unter /<code>/. Slugs werden nicht übersetzt.
import { defaultCode, type Language } from "./languages";
import type { PageKey } from "./types";

export const pageKeys: PageKey[] = ["home", "impressum", "datenschutz"];

const slugs: Record<PageKey, string> = { home: "", impressum: "impressum/", datenschutz: "datenschutz/" };

/** Kanonischer Pfad mit Schrägstrich am Ende, z. B. /en/impressum/ */
export function pathFor(language: Language, page: PageKey): string {
  const prefix = language.code === defaultCode ? "/" : `/${language.code}/`;
  return prefix + slugs[page];
}

/** Datei im Build, die GitHub Pages für diesen Pfad ausliefert */
export function fileFor(language: Language, page: PageKey): string {
  return `${pathFor(language, page).slice(1)}index.html`;
}

export function isPageKey(value: string): value is PageKey {
  return (pageKeys as string[]).includes(value);
}
