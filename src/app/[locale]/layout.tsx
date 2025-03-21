import React from "react";
import { getDictionary } from "@/i18n/getDictionary";
import { i18nConfig, isValidLocale } from "@/i18n/config";
import TranslationProviderClient from "@/components/Providers/TranslationProviderClient";
import { redirect } from "next/navigation";

interface LanguageLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function LanguageLayout({
  children,
  params,
}: LanguageLayoutProps) {
  // Validate locale
  if (!isValidLocale(params.locale)) {
    redirect(`/${i18nConfig.defaultLocale}`);
  }

  const dictionary = await getDictionary(params.locale);

  return (
    <TranslationProviderClient dictionary={dictionary} locale={params.locale}>
      {children}
    </TranslationProviderClient>
  );
}
