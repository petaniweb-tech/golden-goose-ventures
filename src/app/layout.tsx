import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/style.scss";
import localFont from "next/font/local";

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
  description: "Golden Goose Ventures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={proxima.className}>{children}</body>
    </html>
  );
}
