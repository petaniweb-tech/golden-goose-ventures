"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/i18n/TranslationContext";

const CtaOne = () => {
  const { t, locale } = useTranslation();
  return (
    <div className="cta-block style-two bg-tan-dark relative lg:h-[120px] h-[180px]">
      {/* <div className="bg-cta w-full h-full absolute top-0 left-0 z-[-1]">
        <Image
          width={5000}
          height={5000}
          className="w-full h-full object-cover"
          src="/images/cta/bg-cta1.png"
          alt=""
        />
      </div> */}
      <div className="container flex items-center justify-between max-lg:flex-col max-lg:justify-center gap-4 h-full">
        <div className="heading6 text-center text-white">
          {t("CONTACT.FORM_SUBTITLE")}
        </div>
        <Link
          className="button-main rounded-full hover:bg-blue hover:text-white bg-white text-button px-9 py-3"
          href={`/${locale}/contact`}
        >
          {t("COMMON.BUTTONS.CONTACT_US")}
        </Link>
      </div>
    </div>
  );
};
export default CtaOne;
