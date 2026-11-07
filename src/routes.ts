// Seiten und Weiterleitungen. scripts/prerender.mjs erzeugt daraus die statischen HTML-Dateien.

export type PageMeta = {
  path: string;
  /** Datei im Build, die GitHub Pages für diesen Pfad ausliefert */
  file: string;
  title: string;
  description: string;
  /** Kanonische Adresse; bei Unterseiten mit Schrägstrich, weil GitHub Pages /impressum auf /impressum/ umleitet */
  canonical?: string;
};

const description =
  "Kleine Werkzeuge für echte Abläufe: Serva, Nuvo Explorer und CLR by NMBRS von Johann Wiebe. Ohne Tracker.";

export const pages = {
  home: { path: "/", file: "index.html", title: "jw29435", description, canonical: "/" },
  impressum: {
    path: "/impressum",
    file: "impressum/index.html",
    title: "Impressum – jw29435",
    description: "Impressum von jw29435.de, dem Dach für Serva, Nuvo Explorer und CLR by NMBRS.",
    canonical: "/impressum/",
  },
  datenschutz: {
    path: "/datenschutz",
    file: "datenschutz/index.html",
    title: "Datenschutz – jw29435",
    description:
      "Datenschutzerklärung für jw29435.de und johannwiebe.de: keine Cookies, keine Tracker, nur Server-Logs.",
    canonical: "/datenschutz/",
  },
  notFound: {
    path: "*",
    file: "404.html",
    title: "Seite nicht gefunden – jw29435",
    description,
  },
} satisfies Record<string, PageMeta>;

/** Pfade der alten PHP-Seite von 2021 */
export const redirects = [
  { from: "/dsgvo", to: "/datenschutz/" },
  { from: "/apps", to: "/" },
  { from: "/services", to: "/" },
  { from: "/team", to: "/" },
];
