"use client";

import React from "react";
import { useTranslation } from "@/i18n/TranslationContext";

interface ExampleComponentProps {
  className?: string;
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={`example-component ${className || ""}`}>
      <h1>{t("ABOUT.COMPANY_OVERVIEW.TITLE")}</h1>
      <p>{t("ABOUT.COMPANY_OVERVIEW.DESCRIPTION")}</p>

      <div className="mt-8">
        <h2>{t("SERVICES.TITLE")}</h2>
        <ul className="mt-4">
          <li>
            <h3>{t("SERVICES.VENTURE_CAPITAL.TITLE")}</h3>
            <p>{t("SERVICES.VENTURE_CAPITAL.DESCRIPTION")}</p>
          </li>
          <li className="mt-4">
            <h3>{t("SERVICES.OTC_TRADING.TITLE")}</h3>
            <p>{t("SERVICES.OTC_TRADING.DESCRIPTION")}</p>
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <button className="btn btn-primary">
          {t("COMMON.BUTTONS.LEARN_MORE")}
        </button>
        <button className="btn btn-secondary ml-4">
          {t("COMMON.BUTTONS.CONTACT_US")}
        </button>
      </div>
    </div>
  );
};

export default ExampleComponent;
