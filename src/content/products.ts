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
      label: "APK auf GitHub",
      href: "https://github.com/johann-wiebe/synology-explorer/releases",
    },
    status: { label: "Alpha", tone: "amber" },
  },
  {
    name: "CLR by NMBRS",
    icon: "/brand/icon-clr.svg",
    platform: "Android",
    description:
      "Macht aus einem Foto eine Malen-nach-Zahlen-Vorlage, auf Wunsch nur mit den Farben, die in deinem Tuschkasten stecken.",
    action: { kind: "disabled", label: "Play Store folgt" },
    status: { label: "Alpha", tone: "amber" },
  },
];
