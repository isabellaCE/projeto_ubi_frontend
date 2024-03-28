import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import translationsPT from './locales/pt/translation.json';
import translationsEN from './locales/en-US/translation.json';

const resources = {
  en: {
    translation: translationsEN
  },
  pt: {
    translation: translationsPT
  }
};

export const
  i18nextPromise = i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    resources,
    debug: true,
    fallbackLng: 'pt'
  });

export default function (app) {
  app.use(I18NextVue, { i18next })
  return app
}