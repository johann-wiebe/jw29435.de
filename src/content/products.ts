// Inhalte der Produktkarten auf der Startseite. Reihenfolge hier = Reihenfolge auf der Seite.

export type ProductAction =
  | { kind: "primary" | "outline"; label: string; href: string }
  | { kind: "disabled"; label: string };

export type ProductStatus = {
  label: string;
  tone: "success" | "amber" | "warning" | "danger";
};

export type Product = {
  name: string;
  icon: string;
  platform: string;
  description: string;
  action: ProductAction;
  status: ProductStatus;
};

export const products: Product[] = [
  {
    name: "Serva",
    icon: "/brand/icon-serva.svg",
    platform: "Web · für Gemeinden",
    description:
      "Plant Gottesdienste, Predigtdienste und Chorlieder und erinnert Prediger per E-Mail, WhatsApp oder Push an ihren Termin.",
    action: {
      kind: "primary",
      label: "Serva öffnen",
      href: "https://serva.jw29435.de",
    },
    status: { label: "Im Einsatz", tone: "success" },
  },
  {
    name: "Nuvo Explorer",
    icon: "/brand/icon-nuvo.svg",
    platform: "Android · iOS geplant",
    description:
      "Dateien auf der eigenen Synology durchsuchen und Musikordner direkt abspielen, im LAN, per VPN oder über HTTPS.",
    action: {
      kind: "outline",
      label: "Zum Play-Test",
      href: "https://play.google.com/apps/testing/de.jw29435.nuvo_explorer",
    },
    status: { label: "Alpha", tone: "amber" },
  },
  {
    name: "CLR by NMBRS",
    icon: "/brand/icon-clr.png",
    platform: "Android",
    description:
      "Macht aus einem Foto eine Malen-nach-Zahlen-Vorlage, auf Wunsch nur mit den Farben, die in deinem Tuschkasten stecken.",
    action: {
      kind: "primary",
      label: "Im Play Store",
      href: "https://play.google.com/store/apps/details?id=de.jw29435.clr_by_nmbrs.clr_by_nmbrs",
    },
    status: { label: "Verfügbar", tone: "success" },
  },
];
