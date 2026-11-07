// Google Analytics lädt erst, wenn im Banner zugestimmt wurde (§ 25 TDDDG, Art. 6 Abs. 1 lit. a DSGVO).
// Die Wahl liegt im localStorage; ohne Speicher (z. B. privates Fenster) gilt sie nur für diesen Besuch.

export const measurementId = "G-1F5GCWHXKX";
const storageKey = "analytics-consent";

export type Consent = "granted" | "denied";
/** hidden: Wahl getroffen; ask: noch keine Wahl; edit: über „Cookie-Einstellungen“ geöffnet */
export type BannerState = "hidden" | "ask" | "edit";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean;
  }
}

let memoryConsent: Consent | null = null;
let editing = false;
let loaded = false;
const listeners = new Set<() => void>();

export function readConsent(): Consent | null {
  try {
    const value = localStorage.getItem(storageKey);
    return value === "granted" || value === "denied" ? value : memoryConsent;
  } catch {
    return memoryConsent;
  }
}

export function saveConsent(consent: Consent) {
  memoryConsent = consent;
  try {
    localStorage.setItem(storageKey, consent);
  } catch {
    // Kein Speicher: Die Wahl gilt bis zum nächsten Seitenaufruf.
  }
  editing = false;
  if (consent === "granted") loadAnalytics();
  else disableAnalytics();
  listeners.forEach((listener) => listener());
}

export function openConsentSettings() {
  editing = true;
  listeners.forEach((listener) => listener());
}

export function subscribeBanner(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getBannerState(): BannerState {
  if (editing) return "edit";
  return readConsent() === null ? "ask" : "hidden";
}

export function loadAnalytics() {
  window[`ga-disable-${measurementId}`] = false;
  if (loaded) return;
  loaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js erwartet das arguments-Objekt, kein Array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  // Seitenwechsel im Router erfasst GA4 über die erweiterte Messung (Browserverlauf).
  window.gtag("config", measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.append(script);
}

function disableAnalytics() {
  window[`ga-disable-${measurementId}`] = true;

  // GA setzt _ga und _ga_<ID> auf der obersten möglichen Domain; alle Ebenen abräumen.
  const names = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0].trim())
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));
  const parts = location.hostname.split(".");
  const domains = parts.map((_, i) => parts.slice(i).join("."));
  for (const name of names) {
    document.cookie = `${name}=; Max-Age=0; path=/`;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}`;
    }
  }
}
