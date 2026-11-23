// Produktkarten auf der Startseite. Reihenfolge hier = Reihenfolge auf der Seite.
// Die Texte (Plattform, Beschreibung, Knopf, Status) stehen je Sprache unter `products.<id>`
// in src/i18n/locales/<code>.ts.

export type ProductId = "serva" | "nuvo" | "clr";

export type Product = {
  id: ProductId;
  /** Markenname, wird nicht übersetzt */
  name: string;
  icon: string;
  action: { kind: "primary" | "outline"; href: string } | { kind: "disabled" };
  /** Link führt in den Play Store; auf nicht-deutschen Seiten kommt &hl=<Sprache> dazu */
  playStore?: boolean;
  tone: "success" | "accent" | "warning" | "danger";
};

export const products: Product[] = [
  {
    id: "serva",
    name: "Serva",
    icon: "/brand/icon-serva.svg",
    action: { kind: "primary", href: "https://serva.jw29435.de" },
    tone: "success",
  },
  {
    id: "nuvo",
    name: "Nuvo Explorer",
    icon: "/brand/icon-nuvo.png",
    action: {
      kind: "outline",
      href: "https://play.google.com/apps/testing/de.jw29435.nuvo_explorer",
    },
    tone: "accent",
  },
  {
    id: "clr",
    name: "CLR by NMBRS",
    icon: "/brand/icon-clr.png",
    action: {
      kind: "primary",
      href: "https://play.google.com/store/apps/details?id=de.jw29435.clr_by_nmbrs.clr_by_nmbrs",
    },
    playStore: true,
    tone: "success",
  },
];
