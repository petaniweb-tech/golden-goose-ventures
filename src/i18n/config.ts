// i18n configuration
type Locale = "en" | "zh";

interface I18nConfig {
  defaultLocale: Locale;
  locales: Locale[];
}

export const i18nConfig: I18nConfig = {
  defaultLocale: "en",
  locales: ["en", "zh"],
};

export const getLocaleDirection = (locale: Locale): "ltr" | "rtl" => {
  // Both English and Chinese are left-to-right languages
  return "ltr";
};

// Helper function to determine if a locale is valid
export const isValidLocale = (locale: string): locale is Locale => {
  return i18nConfig.locales.includes(locale as Locale);
};

// Dictionary type for translations
export type Dictionary = {
  [key: string]: string | Dictionary;
};

// Function to get nested values from dictionary using dot notation
export const getNestedValue = (dictionary: Dictionary, key: string): string => {
  const keys = key.split(".");
  let value: any = dictionary;

  for (const k of keys) {
    if (value[k] === undefined) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    value = value[k];
  }

  if (typeof value !== "string") {
    console.warn(`Translation value for key ${key} is not a string`);
    return key;
  }

  return value;
};
