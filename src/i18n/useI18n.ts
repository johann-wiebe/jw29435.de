import { createContext, useContext } from "react";
import { defaultLanguage, messagesFor } from "./catalogs";
import type { Language } from "./languages";
import type { Messages, PageKey } from "./types";

export type I18n = {
  language: Language;
  t: Messages;
  /** Aktuelle Seite; null auf der 404-Seite */
  page: PageKey | null;
};

export const I18nContext = createContext<I18n>({
  language: defaultLanguage,
  t: messagesFor(defaultLanguage),
  page: null,
});

export function useI18n() {
  return useContext(I18nContext);
}
