import { Link } from "react-router";

// Bewusst nur deutsch: GitHub Pages liefert für jeden unbekannten Pfad (auch /en/…) dieselbe
// 404.html. Der Sprachumschalter im Kopf führt zu den Startseiten aller Sprachen.
export function NotFound() {
  return (
    <article className="prose container">
      <p className="eyebrow">Fehler 404</p>
      <h1>Diese Seite gibt es nicht.</h1>
      <p>Vielleicht hat sich die Adresse geändert oder ein Tippfehler hat sich eingeschlichen.</p>
      <p>
        <Link to="/" className="button button--outline">
          Zur Startseite
        </Link>
      </p>
    </article>
  );
}
