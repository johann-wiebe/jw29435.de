# jw29435.de

Dachseite der jw29435-Produkte Serva, Nuvo Explorer und CLR by NMBRS, mit Impressum und
Datenschutzerklärung (auch für johannwiebe.de). Vite + React + TypeScript, statisch gebaut und
auf GitHub Pages ausgeliefert. Google Analytics lädt nur nach Einwilligung im Banner; sonst
keine Cookies und keine externen Requests.

## Entwickeln

```sh
npm ci
npm run dev      # Dev-Server
npm run lint
npm run build    # dist/ mit vorgerenderten Seiten
npm run preview
```

## Aufbau

- `src/content/products.ts` – Texte, Links und Status der Produktkarten. Änderungen hier brauchen kein Layout-Update.
- `src/content/site.ts` – Kontaktadresse und Domain.
- `src/analytics.ts` – Einwilligung (localStorage) und Laden von Google Analytics; der Banner steht in
  `src/components/ConsentBanner.tsx`, „Cookie-Einstellungen“ im Footer öffnet ihn wieder.
- `src/routes.ts` – Seiten (Titel, Beschreibung, Ausgabedatei) und Weiterleitungen der alten PHP-Pfade.
- `src/styles/tokens.css` – Farben, Radien, Abstände; hell und dunkel über `prefers-color-scheme`.
- `public/brand/` – Logo, Marke und App-Icons als SVG und PNG.
- `scripts/prerender.mjs` – rendert nach dem Build jede Route als eigene HTML-Datei
  (`impressum/index.html`, `datenschutz/index.html`, `404.html`) und legt für `/dsgvo`, `/apps`,
  `/services` und `/team` statische Weiterleitungen an.

## Deploy

`.github/workflows/pages.yml` baut bei jedem Push auf `master` und veröffentlicht `dist/` auf
GitHub Pages. Die Custom Domain steht in `public/CNAME`.
