// Sammelt alle Übersetzungsdateien. Eine Datei src/i18n/locales/<code>.ts genügt, damit die
// Sprache gebaut, im Umschalter gelistet und in hreflang und Sitemap aufgenommen wird.
import { allLanguages, defaultCode, type Language } from "./languages";
import type { Messages } from "./types";

const modules = import.meta.glob<Messages>("./locales/*.ts", { eager: true, import: "default" });

export const catalogs: Record<string, Messages> = {};
for (const [file, messages] of Object.entries(modules)) {
  const code = file.replace(/^.*\/(.+)\.ts$/, "$1");
  if (!allLanguages.some((language) => language.code === code)) {
    throw new Error(`${file}: Sprache „${code}“ fehlt in src/i18n/languages.json`);
  }
  catalogs[code] = messages;
}

/** Sprachen mit Übersetzungsdatei, in Umschalter-Reihenfolge */
export const languages: Language[] = allLanguages.filter((language) => language.code in catalogs);

export const defaultLanguage: Language = (() => {
  const language = languages.find((entry) => entry.code === defaultCode);
  if (!language) throw new Error("Die deutsche Quelle src/i18n/locales/de.ts fehlt.");
  return language;
})();

export function messagesFor(language: Language): Messages {
  return catalogs[language.code];
}
