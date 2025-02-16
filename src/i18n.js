// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import turkish from "./assets/lang/tr.json";
import english from "./assets/lang/en.json";
import arabic from "./assets/lang/ar.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            tr: {
                translations: turkish
            },
            en: {
                translations: english
            },
            ar: {
                translations: arabic
            }
        },
        lng: "tr",
        ns: ['translations'],
        defaultNS: 'translations',
        interpolation: {
            escapeValue: false
        }
    });
i18n.languages = ['en', 'tr', 'ar'];

export default i18n;
