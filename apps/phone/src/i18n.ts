import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locale/en.json';
import fi from './locale/fi.json';

// Should we just programatically call for static files
// on the scripts side to avoid having to parse all these
// JSONs for no reason? yes, probably
export const resources = {
  en,
  fi,
} as const;

const missingKeyHandler = (
  lng: Readonly<string[]>,
  s: string,
  key: string,
  fallbackValue: string,
) => {
  if (!import.meta.env.DEV) return;
  console.error(
    `!! TRANSLATION KEY NOT FOUND FOR LANGAUGE "${lng}", KEY "${key}". RENDERED ${fallbackValue} INSTEAD"" !!`,
  );
};

i18n.use(initReactI18next).init({
  lng: 'en',
  // initImmediate: true,
  saveMissing: true,
  missingKeyHandler,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});

export default i18n;
