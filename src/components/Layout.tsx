import type { ReactNode } from "react";
import { defaultCode } from "../i18n/languages";
import { useI18n } from "../i18n/useI18n";
import { ConsentBanner } from "./ConsentBanner";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { LanguageHint } from "./LanguageHint";

export function Layout({ children }: { children: ReactNode }) {
  const { t, language, page } = useI18n();

  return (
    <>
      <a className="skip-link" href="#inhalt">
        {t.layout.skipLink}
      </a>
      {language.code === defaultCode && page && <LanguageHint page={page} />}
      <Header />
      <main id="inhalt" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <ConsentBanner />
    </>
  );
}
