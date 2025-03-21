"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { TranslationProvider } from "@/i18n/TranslationContext";
import { Dictionary } from "@/i18n/config";

interface TranslationProviderClientProps {
  dictionary: Dictionary;
  locale: string;
  children: ReactNode;
}

export default function TranslationProviderClient({
  dictionary,
  locale,
  children,
}: TranslationProviderClientProps) {
  return (
    <TranslationProvider dictionary={dictionary} locale={locale}>
      {children}
    </TranslationProvider>
  );
}
