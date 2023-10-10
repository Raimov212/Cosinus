import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uzJSON from "./translation/uz.json";
import enJSON from "./translation/en.json";
import ruJSON from "./translation/ru.json";

const getUserFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem("language") || "");
  } catch (error) {
    return "ru";
  }
};

i18n.use(initReactI18next).init({
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: "ru",
  resources: {
    uz: { ...uzJSON },
    en: { ...enJSON },
    ru: { ...ruJSON },
  },
  lng: getUserFromLocalStorage(),
});
