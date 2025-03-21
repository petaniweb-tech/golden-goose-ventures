"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { i18nConfig } from "@/i18n/config";

/**
 * Language Switcher Component
 * Renders a dropdown to switch between available languages with flag icons
 */
export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const router = useRouter();
  const locale = (params.locale as string) || i18nConfig.defaultLocale;
  const pathName = usePathname();

  // Get flag image path based on locale
  const getFlagImage = (localeCode: string) => {
    return localeCode === "en"
      ? "/images/flags/us.svg"
      : "/images/flags/cn.svg";
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle dropdown visibility
  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Handle language change
  const handleLanguageChange = (selectedLocale: string) => {
    // Get the path segments excluding the current locale
    const pathSegments = pathName.split("/");

    // Skip the first empty segment and the locale segment
    const pathWithoutLocale = pathSegments.slice(2).join("/");

    // Construct the new path with the selected locale
    const newPath = `/${selectedLocale}${
      pathWithoutLocale ? `/${pathWithoutLocale}` : ""
    }`;

    // Close dropdown
    setIsOpen(false);

    // Navigate to the new path
    router.push(newPath);
  };

  return (
    <div className={`lang-dropdown relative ${className}`} ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 text-white hover:text-tan-light py-1.5 px-3 hover:bg-opacity-20 hover:bg-white rounded-md"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <div className="w-6 h-4 relative overflow-hidden rounded-sm border border-white/20">
          <Image
            src={getFlagImage(locale)}
            alt={locale}
            width={60}
            height={30}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <span className="caption1 font-medium">{locale.toUpperCase()}</span>
        <i
          className={`icon-arrow-down text-xs transition duration-300 transform ${
            isOpen ? "rotate-180" : ""
          }`}
        ></i>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-md overflow-hidden z-[9999] min-w-[120px]">
          {(i18nConfig.locales as string[]).map((localeOption) => (
            <button
              key={localeOption}
              className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-gray-100 flex items-center gap-2.5 ${
                locale === localeOption
                  ? "bg-tan-lightest text-brown font-medium"
                  : "text-gray-800"
              }`}
              onClick={() => handleLanguageChange(localeOption)}
            >
              <div className="w-6 h-4 relative overflow-hidden rounded-sm border border-gray-200">
                <Image
                  src={getFlagImage(localeOption)}
                  alt={localeOption}
                  width={60}
                  height={30}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <span className="font-medium">{localeOption.toUpperCase()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
