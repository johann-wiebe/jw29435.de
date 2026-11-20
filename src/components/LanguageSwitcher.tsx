import { useEffect, useRef } from "react";
import { languages } from "../i18n/catalogs";
import { pathFor } from "../i18n/paths";
import { useI18n } from "../i18n/useI18n";

/**
 * Sprachwahl als <details> mit normalen Links: funktioniert ohne JavaScript, jeder Link lädt die
 * vorgerenderte Seite neu (damit <html lang>, Titel und hreflang stimmen). Auf der 404-Seite führen
 * die Links zur jeweiligen Startseite.
 */
export function LanguageSwitcher() {
  const { t, language, page } = useI18n();
  const ref = useRef<HTMLDetailsElement>(null);

  // Mit JavaScript schließt die Liste bei Klick daneben und mit Escape.
  useEffect(() => {
    const details = ref.current;
    if (!details) return;
    const close = (event: Event) => {
      if (!details.open) return;
      if (event instanceof KeyboardEvent) {
        if (event.key !== "Escape") return;
        details.open = false;
        details.querySelector("summary")?.focus();
      } else if (!details.contains(event.target as Node)) {
        details.open = false;
      }
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", close);
    };
  }, []);

  if (languages.length < 2) return null;

  return (
    <details ref={ref} className="lang-switch">
      <summary className="lang-switch__summary">
        <svg className="lang-switch__icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
        </svg>
        <span className="visually-hidden">{t.layout.language}: </span>
        <span>{language.endonym}</span>
      </summary>
      <ul className="lang-switch__list">
        {languages.map((other) => (
          <li key={other.code}>
            <a
              href={pathFor(other, page ?? "home")}
              hrefLang={other.hreflang}
              lang={other.lang}
              aria-current={other === language ? "true" : undefined}
            >
              {other.endonym}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
