import { Link } from "react-router";
import { openConsentSettings } from "../analytics";
import { pathFor } from "../i18n/paths";
import { Rich } from "../i18n/Rich";
import { useI18n } from "../i18n/useI18n";
import { BrandImage } from "./BrandImage";

export function Footer() {
  const { t, language } = useI18n();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__by">
          <BrandImage name="jw-mark" alt="" width={30} height={22} />
          <span>
            <Rich text={t.layout.footerBy} />
          </span>
        </p>
        <ul className="site-footer__links">
          <li>
            <Link to={pathFor(language, "impressum")}>{t.layout.footerImpressum}</Link>
          </li>
          <li>
            <Link to={pathFor(language, "datenschutz")}>{t.layout.footerDatenschutz}</Link>
          </li>
          <li>
            <button type="button" onClick={openConsentSettings}>
              {t.layout.cookieSettings}
            </button>
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
