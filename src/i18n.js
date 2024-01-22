// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/dashboard.json';
import cnTranslation from './locales/cn/dashboard.json';

const resources = {
    en: {
        translation: enTranslation,
    },
    cn: {
        translation: cnTranslation,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // язык по умолчанию
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
