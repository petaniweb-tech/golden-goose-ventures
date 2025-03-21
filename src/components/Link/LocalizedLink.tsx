"use client";

import Link from "next/link";
import { useTranslation } from "@/i18n/TranslationContext";

interface LocalizedLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  prefetch?: boolean;
}

/**
 * LocalizedLink Component
 *
 * A wrapper around Next.js Link component that automatically adds the current locale prefix to links.
 * This simplifies creating localized links throughout the application.
 *
 * @example
 * <LocalizedLink href="/about">About Us</LocalizedLink>
 * // Will render as <Link href="/en/about">About Us</Link> if the current locale is "en"
 */
export default function LocalizedLink({
  href,
  className,
  children,
  onClick,
  prefetch,
}: LocalizedLinkProps) {
  const { locale } = useTranslation();

  // Don't modify external links or anchor links
  if (href.startsWith("http") || href.startsWith("#") || href === "#!") {
    return (
      <Link
        href={href}
        className={className}
        onClick={onClick}
        prefetch={prefetch}
      >
        {children}
      </Link>
    );
  }

  // Add locale prefix to internal links if not already present
  const localizedHref =
    href === "/"
      ? `/${locale}`
      : href.startsWith("/")
      ? `/${locale}${href}`
      : `/${locale}/${href}`;

  return (
    <Link
      href={localizedHref}
      className={className}
      onClick={onClick}
      prefetch={prefetch}
    >
      {children}
    </Link>
  );
}
