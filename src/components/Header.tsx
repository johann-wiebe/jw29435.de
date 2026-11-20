import { Link, useLocation } from "react-router";
import { pathFor } from "../i18n/paths";
import { useI18n } from "../i18n/useI18n";
import { BrandImage } from "./BrandImage";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const { t, language } = useI18n();
  // GitHub Pages leitet /impressum auf /impressum/ um; verglichen wird immer mit Schrägstrich.
  const pathname = useLocation().pathname.replace(/\/?$/, "/");
  const home = pathFor(language, "home");
  const nav = [
    { label: t.layout.navProducts, to: `${home}#produkte` },
    { label: t.layout.navContact, to: `${home}#kontakt` },
    { label: t.layout.navImpressum, to: pathFor(language, "impressum") },
  ];

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to={home} className="brand" aria-label={t.layout.homeLink}>
          <BrandImage name="jw-mark" alt="" width={41} height={30} eager />
          <span className="brand__word">jw29435</span>
        </Link>
        <nav aria-label={t.layout.mainNav}>
          <ul className="site-nav">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="site-nav__link"
                  aria-current={item.to === pathname ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
