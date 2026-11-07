import { useEffect, type ReactNode } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { Layout } from "./components/Layout";
import { Datenschutz } from "./pages/Datenschutz";
import { Home } from "./pages/Home";
import { Impressum } from "./pages/Impressum";
import { NotFound } from "./pages/NotFound";
import { pages, redirects, type PageMeta } from "./routes";

function Page({ meta, children }: { meta: PageMeta; children: ReactNode }) {
  useEffect(() => {
    document.title = meta.title;
  }, [meta.title]);
  return children;
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

export function App() {
  return (
    <Layout>
      <ScrollOnNavigate />
      <Routes>
        <Route path={pages.home.path} element={<Page meta={pages.home}><Home /></Page>} />
        <Route
          path={pages.impressum.path}
          element={<Page meta={pages.impressum}><Impressum /></Page>}
        />
        <Route
          path={pages.datenschutz.path}
          element={<Page meta={pages.datenschutz}><Datenschutz /></Page>}
        />
        {redirects.map(({ from, to }) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
        <Route path="*" element={<Page meta={pages.notFound}><NotFound /></Page>} />
      </Routes>
    </Layout>
  );
}
