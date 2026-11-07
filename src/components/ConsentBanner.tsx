import { useEffect, useRef, useSyncExternalStore } from "react";
import { Link } from "react-router";
import { getBannerState, readConsent, saveConsent, subscribeBanner } from "../analytics";

export function ConsentBanner() {
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
          Darf ich messen, wie die Seite genutzt wird?
        </h2>
        <p className="consent__text">
          Mit deiner Einwilligung nutze ich Google Analytics, um zu sehen, welche Seiten aufgerufen
          werden. Dabei setzt Google Cookies und überträgt Daten auch in die USA. Du kannst die
          Wahl jederzeit über „Cookie-Einstellungen“ im Footer ändern. Mehr dazu in der{" "}
          <Link to="/datenschutz">Datenschutzerklärung</Link>.
        </p>
        {current && (
          <p className="consent__current">
            Aktuell: {current === "granted" ? "zugelassen" : "abgelehnt"}
          </p>
        )}
        <div className="consent__actions">
          <button
            ref={firstButtonRef}
            type="button"
            className="button button--outline"
            onClick={() => saveConsent("denied")}
          >
            Ablehnen
          </button>
          <button
            type="button"
            className="button button--outline"
            onClick={() => saveConsent("granted")}
          >
            Zulassen
          </button>
        </div>
      </div>
    </section>
  );
}
