import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./i18n/en.json";
import hu from "./i18n/hu.json";

export const resources = {
  en: {
    translation: en,
  },
  hu: {
    translation: hu,
  },
} as const;

export type SupportedLanguages = keyof typeof resources; // Export for use in LanguageContext

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;