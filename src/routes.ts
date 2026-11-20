// Seiten je Sprache, die 404-Seite und Weiterleitungen. scripts/prerender.mjs erzeugt daraus die
// statischen HTML-Dateien, hreflang-Links und die Sitemap.
import { defaultLanguage, languages, messagesFor } from "./i18n/catalogs";
import { fileFor, pageKeys, pathFor } from "./i18n/paths";
import type { PageKey } from "./i18n/types";

export type Alternate = { hreflang: string; path: string };

export type PageEntry = {
  /** Pfad, unter dem die Seite gerendert wird */
  url: string;
  /** Datei im Build, die GitHub Pages für diesen Pfad ausliefert */
  file: string;
  page: PageKey | null;
  lang: string;
  ogLocale: string;
  ogLocaleAlternates: string[];
  title: string;
  description: string;
  ogImageAlt: string;
  /** Kanonischer Pfad mit Schrägstrich, weil GitHub Pages /impressum auf /impressum/ umleitet; fehlt bei 404 */
  canonical?: string;
  /** hreflang-Links aller Sprachfassungen dieser Seite plus x-default */
  alternates: Alternate[];
};

/** Die 404-Seite bleibt deutsch (GitHub Pages liefert für jeden unbekannten Pfad dieselbe 404.html). */
export const notFoundMeta = {
  title: "Seite nicht gefunden – jw29435",
  description: messagesFor(defaultLanguage).meta.home.description,
};

export function pageEntries(): PageEntry[] {
  const entries: PageEntry[] = [];
  for (const page of pageKeys) {
    const alternates: Alternate[] = [
      ...languages.map((language) => ({ hreflang: language.hreflang, path: pathFor(language, page) })),
      { hreflang: "x-default", path: pathFor(defaultLanguage, page) },
    ];
    for (const language of languages) {
      const t = messagesFor(language);
      entries.push({
        url: pathFor(language, page),
        file: fileFor(language, page),
        page,
        lang: language.lang,
        ogLocale: language.ogLocale,
        ogLocaleAlternates: languages
          .filter((other) => other !== language)
          .map((other) => other.ogLocale),
        title: t.meta[page].title,
        description: t.meta[page].description,
        ogImageAlt: t.meta.ogImageAlt,
        canonical: pathFor(language, page),
        alternates,
      });
    }
  }
  entries.push({
    url: "/404",
    file: "404.html",
    page: null,
    lang: defaultLanguage.lang,
    ogLocale: defaultLanguage.ogLocale,
    ogLocaleAlternates: [],
    title: notFoundMeta.title,
    description: notFoundMeta.description,
    ogImageAlt: messagesFor(defaultLanguage).meta.ogImageAlt,
    alternates: [],
  });
  return entries;
}

/** Pfade der alten PHP-Seite von 2021 */
export const redirects = [
  { from: "/dsgvo", to: "/datenschutz/" },
  { from: "/apps", to: "/" },
  { from: "/services", to: "/" },
  { from: "/team", to: "/" },
];
