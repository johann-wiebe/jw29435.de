import { useSyncExternalStore } from "react";
import { languages, messagesFor } from "../i18n/catalogs";
import { defaultCode, type Language } from "../i18n/languages";
import { pathFor } from "../i18n/paths";
import type { PageKey } from "../i18n/types";

// Dezenter Hinweis auf den deutschen Seiten: Bevorzugt der Browser eine andere vorhandene Sprache,
// steht hier in dieser Sprache, dass es die Seite auch so gibt. Keine automatische Weiterleitung.
// Das Schließen merkt sich der localStorage; ohne Speicher gilt es bis zum nächsten Seitenaufruf.

const storageKey = "language-hint-dismissed";
let dismissedInMemory = false;
const listeners = new Set<() => void>();

function isDismissed() {
  if (dismissedInMemory) return true;
  try {
    return localStorage.getItem(storageKey) === "1";
  } catch {
    return false;
  }
}

function dismiss() {
  dismissedInMemory = true;
  try {
    localStorage.setItem(storageKey, "1");
  } catch {
    // Kein Speicher: Der Hinweis bleibt nur für diesen Seitenaufruf weg.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Erste Browsersprache, für die es eine Fassung gibt; null, wenn das Deutsch ist oder keine passt. */
function suggestedCode(): string | null {
  if (isDismissed()) return null;
  const wanted = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of wanted) {
    const primary = tag?.toLowerCase().split("-")[0];
    if (!primary) continue;
    const match = languages.find(
      (language) => language.code === primary || language.aliases?.includes(primary),
    );
    if (match) return match.code === defaultCode ? null : match.code;
  }
  return null;
}

export function LanguageHint({ page }: { page: PageKey }) {
  // Beim Vorrendern ist die Browsersprache unbekannt; der Hinweis erscheint erst im Browser.
  const code = useSyncExternalStore(subscribe, suggestedCode, () => null);
  const target: Language | undefined = languages.find((language) => language.code === code);
  if (!target) return null;

  const text = messagesFor(target).languageHint;

  return (
    <aside className="lang-hint" lang={target.lang}>
      <div className="container lang-hint__inner">
        <p className="lang-hint__text">
          {text.text}{" "}
          <a href={pathFor(target, page)} hrefLang={target.hreflang}>
            {text.action}
          </a>
        </p>
        <button type="button" className="lang-hint__close" aria-label={text.dismiss} onClick={dismiss}>
          <span aria-hidden="true">×</span>
        </button>
      </div>
    </aside>
  );
}
