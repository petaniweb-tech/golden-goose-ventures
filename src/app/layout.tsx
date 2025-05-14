import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/style.scss";
import localFont from "next/font/local";
import { i18nConfig } from "@/i18n/config";

const inter = Inter({ subsets: ["latin"] });
const proxima = localFont({
  src: [
    {
      path: "./proximanova-regular.otf",
      weight: "400",
      style: "medium",
    },
    {
      path: "./proximanova-bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./proximanova-semibold.otf",
      weight: "600",
      style: "semibold",
    },
  ],
});

export const metadata: Metadata = {
  title: "Golden Goose Ventures",
  description:
    "Golden Goose Ventures - Blockchain and Cryptocurrency Investments",
};

export default function RootLayout({
  children,
  params = { locale: i18nConfig.defaultLocale },
}: Readonly<{
  children: React.ReactNode;
  params?: { locale?: string };
}>) {
  const locale = params.locale || i18nConfig.defaultLocale;

  return (
    <html lang={locale}>
      <body className={proxima.className}>{children}</body>
    </html>
  );
}
