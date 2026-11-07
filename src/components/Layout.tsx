import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#inhalt">
        Zum Inhalt springen
      </a>
      <Header />
      <main id="inhalt" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}
