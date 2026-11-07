import { Link, useLocation } from "react-router";
import { BrandImage } from "./BrandImage";

const nav = [
  { label: "Produkte", to: "/#produkte" },
  { label: "Kontakt", to: "/#kontakt" },
  { label: "Impressum", to: "/impressum" },
];

export function Header() {
  // GitHub Pages leitet /impressum auf /impressum/ um
  const pathname = useLocation().pathname.replace(/(.)\/$/, "$1");

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="brand" aria-label="jw29435 – Startseite">
          <BrandImage name="jw-mark" alt="" width={41} height={30} eager />
          <span className="brand__word">jw29435</span>
        </Link>
        <nav aria-label="Hauptnavigation">
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
      </div>
    </header>
  );
}
