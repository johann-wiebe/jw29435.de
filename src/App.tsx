import { useEffect, useMemo, type ComponentType } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { Layout } from "./components/Layout";
import { defaultLanguage, languages, messagesFor } from "./i18n/catalogs";
import type { Language } from "./i18n/languages";
import { pageKeys, pathFor } from "./i18n/paths";
import type { PageKey } from "./i18n/types";
import { I18nContext } from "./i18n/useI18n";
import { Datenschutz } from "./pages/Datenschutz";
import { Home } from "./pages/Home";
import { Impressum } from "./pages/Impressum";
import { NotFound } from "./pages/NotFound";
import { notFoundMeta, redirects } from "./routes";

const content: Record<PageKey, ComponentType> = {
  home: Home,
  impressum: Impressum,
  datenschutz: Datenschutz,
};

function LocalizedPage({ language, page }: { language: Language; page: PageKey | null }) {
  const i18n = useMemo(() => ({ language, t: messagesFor(language), page }), [language, page]);
  const title = page ? i18n.t.meta[page].title : notFoundMeta.title;

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = language.lang;
  }, [title, language.lang]);

  const Content = page ? content[page] : NotFound;
  return (
    <I18nContext.Provider value={i18n}>
      <Layout>
        <Content />
      </Layout>
    </I18nContext.Provider>
  );
}

function ScrollOnNavigate() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

/** Router-Pfad ohne abschließenden Schrägstrich; /en/ und /en passen beide. */
const routePath = (language: Language, page: PageKey) => pathFor(language, page).replace(/(.)\/$/, "$1");

export function App() {
  return (
    <>
      <ScrollOnNavigate />
      <Routes>
        {languages.flatMap((language) =>
          pageKeys.map((page) => (
            <Route
              key={`${language.code}:${page}`}
              path={routePath(language, page)}
              element={<LocalizedPage language={language} page={page} />}
            />
          )),
        )}
        {redirects.map(({ from, to }) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
        <Route path="*" element={<LocalizedPage language={defaultLanguage} page={null} />} />
      </Routes>
    </>
  );
}
