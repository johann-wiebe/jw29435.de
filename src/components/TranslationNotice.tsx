import { defaultLanguage } from "../i18n/catalogs";
import { defaultCode } from "../i18n/languages";
import { pathFor } from "../i18n/paths";
import type { PageKey } from "../i18n/types";
import { useI18n } from "../i18n/useI18n";

/** Über übersetzten Rechtstexten: Rechtsverbindlich ist die deutsche Fassung. */
export function TranslationNotice({ page }: { page: PageKey }) {
  const { t, language } = useI18n();
  if (language.code === defaultCode) return null;

  return (
    <p className="translation-notice" role="note">
      {t.legalNotice.text}{" "}
      <a href={pathFor(defaultLanguage, page)} hrefLang={defaultLanguage.hreflang} lang={defaultLanguage.lang}>
        {t.legalNotice.link}
      </a>
    </p>
  );
}
