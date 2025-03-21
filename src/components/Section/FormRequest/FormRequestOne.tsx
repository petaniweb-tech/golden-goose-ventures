"use client";

import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useTranslation } from "@/i18n/TranslationContext";

const FormRequestOne = () => {
  const { t } = useTranslation();

  return (
    <div className="form-request-block lg:mt-[100px] sm:mt-16 mt-10">
      <div className="container">
        <div className="heading flex max-xl:flex-col xl:items-center gap-4 justify-between">
          <div className="heading3">
            {t("CONTACT.FORM_TITLE") || "Request a consultation"}
          </div>
          <div className="body3 text-secondary">
            {t("CONTACT.FORM_SUBTITLE") ||
              "Connect with our investment team to discuss potential opportunities and partnerships. "}
            <br className="max-md:hidden" />
            {t("CONTACT.FORM_SUBTITLE2") ||
              "We're always looking for innovative blockchain and cryptocurrency projects."}
          </div>
        </div>
        <form className="form md:mt-10 mt-6 flex max-lg:flex-col lg:items-center justify-between gap-8 pb-14 border-b border-line">
          <div className="grid lg:grid-cols-3 gap-6 w-full">
            <div className="w-full">
              <input
                className="body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full"
                type="text"
                placeholder={t("CONTACT.NAME") || "Full name*"}
                required
              />
            </div>
            <div className="w-full">
              <input
                className="body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full"
                type="email"
                placeholder={t("CONTACT.EMAIL") || "Email*"}
                required
              />
            </div>
            <div className="w-full select-arrow-none relative">
              <select
                className="body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full"
                name="category"
              >
                <option value="Venture Capital">
                  {t("SERVICES.VENTURE_CAPITAL.TITLE") ||
                    "Venture Capital & Token Investments"}
                </option>
                <option value="OTC Trading">
                  {t("SERVICES.OTC_TRADING.TITLE") ||
                    "OTC Trading & Liquidity Solutions"}
                </option>
                <option value="Market Making">
                  {t("SERVICES.MARKET_MAKING.TITLE") ||
                    "Market Making & Exchange Partnerships"}
                </option>
                <option value="Incubation">
                  {t("SERVICES.INCUBATION.TITLE") || "Incubation & Advisory"}
                </option>
              </select>
              <Icon.CaretDown className="absolute top-1/2 -translate-y-1/2 right-5" />
            </div>
          </div>
          <button className="button-main flex-shrink-0 bg-brown hover:bg-blue text-white rounded-full">
            {t("CONTACT.SUBMIT") || "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default FormRequestOne;
