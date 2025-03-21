import "server-only";
import { Dictionary } from "./config";

// We use a dynamic import to load dictionaries only when needed
const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  zh: () => import("./dictionaries/zh.json").then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  // Default to English if the locale is not supported
  if (locale !== "en" && locale !== "zh") {
    console.warn(`Locale ${locale} is not supported, falling back to English`);
    locale = "en";
  }

  return dictionaries[locale as keyof typeof dictionaries]();
};
