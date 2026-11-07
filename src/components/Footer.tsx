import { Link } from "react-router";
import { BrandImage } from "./BrandImage";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__by">
          <BrandImage name="jw-mark" alt="" width={30} height={22} />
          <span>
            Ein Produkt von <strong>jw29435</strong>
          </span>
        </p>
        <ul className="site-footer__links">
          <li>
            <Link to="/impressum">Impressum</Link>
          </li>
          <li>
            <Link to="/datenschutz">Datenschutz</Link>
          </li>
          <li>
            {/* Beim Vorrendern steht das Baujahr drin; im Browser zählt das aktuelle Jahr. */}
            <span suppressHydrationWarning>© {new Date().getFullYear()}</span>
          </li>
        </ul>
      </div>
    </footer>
  );
}
