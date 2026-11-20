# jw29435.de

Dachseite der jw29435-Produkte Serva, Nuvo Explorer und CLR by NMBRS, mit Impressum und
Datenschutzerklärung (auch für johannwiebe.de). Vite + React + TypeScript, statisch gebaut und
auf GitHub Pages ausgeliefert. Google Analytics lädt nur nach Einwilligung im Banner; sonst
keine Cookies und keine externen Requests. Mehrsprachig: Deutsch ist die Quelle, jede weitere
Sprache ist eine Datei (siehe [Sprachen](#sprachen)).

## Entwickeln

```sh
npm ci
npm run dev         # Dev-Server
npm run lint
npm run build       # dist/ mit vorgerenderten Seiten aller Sprachen und sitemap.xml
npm run check:i18n  # prüft dist/ auf vollständige Sprachfassungen (nach dem Build)
npm run preview
```

## Aufbau

- `src/i18n/locales/de.ts` – alle sichtbaren Texte auf Deutsch; die Quelle und der Typ (`Messages`)
  für jede Übersetzung. `src/i18n/locales/<code>.ts` – eine Datei je weitere Sprache.
- `src/i18n/languages.json` – Register aller 33 vorgesehenen Sprachen (Kürzel, Eigenname, `lang`,
  `hreflang`, `og:locale`, `hl` für den Play Store); Reihenfolge = Reihenfolge im Umschalter.
- `src/i18n/catalogs.ts` – sammelt die vorhandenen Übersetzungsdateien (`import.meta.glob`); nur
  Sprachen mit Datei werden gebaut und verlinkt. `paths.ts` – URL-Schema. `Rich.tsx`/`rich.ts` –
  Inline-Auszeichnung in Texten (`[Link](…)`, `**fett**`, `{platzhalter}`). `validate.ts` – vergleicht
  jede Übersetzung beim Build mit der deutschen Quelle.
- `src/content/products.ts` – Namen, Icons, Links und Status-Farbe der Produktkarten; die Texte dazu
  stehen je Sprache unter `products` in den Sprachdateien.
- `src/content/site.ts` – Kontaktadresse und Domain.
- `src/analytics.ts` – Einwilligung (localStorage) und Laden von Google Analytics; der Banner steht in
  `src/components/ConsentBanner.tsx`, „Cookie-Einstellungen“ im Footer öffnet ihn wieder.
- `src/routes.ts` – Seiten je Sprache (Titel, Beschreibung, Ausgabedatei, hreflang), die 404-Seite und
  Weiterleitungen der alten PHP-Pfade.
- `src/components/LanguageSwitcher.tsx` – Sprachwahl im Kopf (`<details>` mit normalen Links, geht ohne
  JavaScript); `LanguageHint.tsx` – Hinweis auf den deutschen Seiten; `TranslationNotice.tsx` – Hinweis
  über übersetzten Rechtstexten.
- `src/styles/tokens.css` – Farben, Radien, Abstände; hell und dunkel über `prefers-color-scheme`.
- `public/brand/` – Logo, Marke und App-Icons als SVG und PNG.
- `scripts/prerender.mjs` – rendert nach dem Build jede Seite jeder Sprache als eigene HTML-Datei
  (`index.html`, `impressum/index.html`, `en/index.html`, `en/impressum/index.html`, …, `404.html`),
  setzt `<html lang>`, Titel, Beschreibung, Canonical, `og:locale` und hreflang, schreibt
  `sitemap.xml` und legt für `/dsgvo`, `/apps`, `/services` und `/team` statische Weiterleitungen an.
  Passt eine Übersetzung nicht zur Quelle, bricht der Build ab.
- `scripts/check-i18n.mjs` – Prüfung des fertigen Builds (siehe unten).

## Sprachen

- **URLs:** Deutsch bleibt unter `/`, `/impressum/`, `/datenschutz/` und ist `x-default`. Jede andere
  Sprache liegt unter `/<code>/`, `/<code>/impressum/`, `/<code>/datenschutz/`; die Slugs werden nicht
  übersetzt.
- **Keine Weiterleitung nach Browsersprache.** Auf den drei deutschen Seiten erscheint stattdessen ein
  schließbarer Hinweis in der Browsersprache („This page is also available in English.“), wenn es
  diese Fassung gibt; das Schließen merkt sich der localStorage (`language-hint-dismissed`).
- **Rechtstexte:** Rechtsverbindlich ist der deutsche Text. Jede übersetzte Impressum- und
  Datenschutzseite zeigt oben einen Hinweis mit Link zur deutschen Fassung. Änderungen an den
  Rechtstexten zuerst in `de.ts`, dann in allen Übersetzungen nachziehen.
- **404:** bleibt deutsch und `noindex`. GitHub Pages liefert für jeden unbekannten Pfad, auch unter
  `/en/…`, dieselbe `404.html`; der Sprachumschalter führt dort zu den Startseiten aller Sprachen.
- **Play-Store-Link** von CLR by NMBRS bekommt auf nicht-deutschen Seiten `&hl=<playHl>` aus dem
  Register (`pt` → `pt-PT`).
- **Schriften:** DM Sans und JetBrains Mono mit `latin` und `latin-ext`; DM Sans hat kein Kyrillisch und
  kein Griechisch, dort greift `system-ui`.
- **Neue Sprache:** Datei `src/i18n/locales/<code>.ts` anlegen – mehr nicht, das Register kennt alle 33
  Sprachen schon. Anleitung für Übersetzer: [docs/TRANSLATING.md](docs/TRANSLATING.md).

### Prüfen: `npm run check:i18n`

Läuft nach `npm run build` auf `dist/` und endet mit Exit-Code 1 bei jedem Fehler. Geprüft wird:
jede Seite gibt es in jeder registrierten Sprache (Eintrag in `languages.json` und Datei in
`locales/`); `<html lang>` passt zur Sprache des Pfads (auch 404 und Weiterleitungen); Canonical und
`og:url` zeigen auf die Seite selbst; hreflang ist vollständig (alle Sprachen plus `x-default`) und
wechselseitig; der Sprachumschalter verlinkt jede Sprache; keine toten internen Links (`href`, `src`,
`srcset`, Weiterleitungen) in irgendeiner HTML-Datei; `sitemap.xml` listet jede Seite mit allen
Alternativen und `robots.txt` verweist darauf. Das Skript läuft nicht im Deploy-Workflow, damit sich
das Deploy-Verhalten nicht ändert – vor einem Merge lokal ausführen.

## Deploy

`.github/workflows/pages.yml` baut bei jedem Push auf `master` und veröffentlicht `dist/` auf
GitHub Pages. Die Custom Domain steht in `public/CNAME`.
