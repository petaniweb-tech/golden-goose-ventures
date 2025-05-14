"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "@/i18n/TranslationContext";

interface TopNavOneProps {
  className?: string;
}

const TopNavOne: React.FC<TopNavOneProps> = ({ className = "" }) => {
  const { t } = useTranslation();

  return (
    <div className={`${className} bg-blue py-2.5 text-center md:text-left`}>
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <div className="text-white flex items-center gap-5 max-sm:gap-4 caption1 mb-2 md:mb-0">
          <div className="flex items-center gap-2">
            <Icon.EnvelopeSimple className="text-lg" />
            <a
              href="mailto:info@ggventures.com"
              className="hover:text-tan-light"
            >
              info@ggv.ltd
            </a>
          </div>
          <div className="flex items-center gap-2">
            {/* <Icon.Phone className="text-lg" />
            <a href="tel:+85281990999" className="hover:text-tan-light">
              +852 8199 0999
            </a> */}
          </div>
        </div>
        <div className="flex items-center">
          <LanguageSwitcher className="text-white max-xl:hidden" />
        </div>
      </div>
    </div>
  );
};

export default TopNavOne;
