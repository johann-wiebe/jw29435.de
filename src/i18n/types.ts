import type de from "./locales/de";

/** Aufbau aller Texte; die deutsche Quelle gibt ihn vor, jede Übersetzung muss ihn genau erfüllen. */
export type Messages = typeof de;

export type PageKey = "home" | "impressum" | "datenschutz";
