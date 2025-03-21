"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { Dictionary, getNestedValue } from "./config";

interface TranslationContextType {
  t: (key: string) => string;
  locale: string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

interface TranslationProviderProps {
  dictionary: Dictionary;
  locale: string;
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({
  dictionary,
  locale,
  children,
}) => {
  // Translate function to access nested keys
  // Example: t('COMMON.NAVIGATION.HOME') will return the corresponding translation
  const t = (key: string): string => {
    return getNestedValue(dictionary, key);
  };

  return (
    <TranslationContext.Provider value={{ t, locale }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
