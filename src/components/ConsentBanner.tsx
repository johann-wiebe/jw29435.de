import { useEffect, useRef, useSyncExternalStore } from "react";
import { getBannerState, readConsent, saveConsent, subscribeBanner } from "../analytics";
import { Rich } from "../i18n/Rich";
import { useI18n } from "../i18n/useI18n";

export function ConsentBanner() {
  const { t } = useI18n();
  // Beim Vorrendern ist die Wahl unbekannt; der Banner erscheint erst im Browser.
  const state = useSyncExternalStore(subscribeBanner, getBannerState, () => "hidden" as const);
  const firstButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (state === "edit") firstButtonRef.current?.focus();
  }, [state]);

  if (state === "hidden") return null;

  const current = state === "edit" ? readConsent() : null;

  return (
    <section className="consent" aria-labelledby="consent-title">
      <div className="consent__inner">
        <h2 id="consent-title" className="consent__title">
          {t.consent.title}
        </h2>
        <p className="consent__text">
          <Rich text={t.consent.text} />
        </p>
        {current && (
          <p className="consent__current">
            {current === "granted" ? t.consent.currentGranted : t.consent.currentDenied}
          </p>
        )}
        <div className="consent__actions">
          <button
            ref={firstButtonRef}
            type="button"
            className="button button--outline"
            onClick={() => saveConsent("denied")}
          >
            {t.consent.deny}
          </button>
          <button
            type="button"
            className="button button--outline"
            onClick={() => saveConsent("granted")}
          >
            {t.consent.allow}
          </button>
        </div>
      </div>
    </section>
  );
}
