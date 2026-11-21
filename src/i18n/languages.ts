// Alle vorgesehenen Sprachen. Gebaut und verlinkt wird eine Sprache erst, wenn es
// src/i18n/locales/<code>.ts gibt (siehe catalogs.ts). Reihenfolge = Reihenfolge im Umschalter.
import registry from "./languages.json";

export type Language = {
  /** Kürzel im Pfad (/en/) und Dateiname der Übersetzung */
  code: string;
  /** Name der Sprache in ihr selbst, für den Umschalter */
  endonym: string;
  /** Wert für <html lang> und lang-Attribute */
  lang: string;
  /** Wert für hreflang */
  hreflang: string;
  /** Wert für og:locale */
  ogLocale: string;
  /** hl-Parameter für Play-Store-Links */
  playHl: string;
  /** weitere Browser-Sprachkürzel, die auf diese Sprache passen (z. B. no, nn → nb) */
  aliases?: string[];
};

export const allLanguages: Language[] = registry;

/** Deutsch liegt ohne Präfix unter /, /impressum/, /datenschutz/ und ist x-default. */
export const defaultCode = "de";
