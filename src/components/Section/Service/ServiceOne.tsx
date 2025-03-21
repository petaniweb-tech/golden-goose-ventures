'use client'

import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";
import ServiceItem from '../../Service/ServiceItem'
import { ServiceType } from '@/type/ServiceType'
import { useTranslation } from "@/i18n/TranslationContext";

interface Props {
  data: Array<ServiceType>;
}

const ServiceOne: React.FC<Props> = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { t, locale } = useTranslation();

  return (
    <>
      <section className="service-block lg:mt-[100px] sm:mt-16 mt-10" ref={ref}>
        <div className="container">
          <h3 className="heading3 text-center">
            {t("SERVICES.TITLE") || "Our Services"}
          </h3>
          <div className="text-center body1 text-secondary mt-5 mx-auto md:max-w-[70%]">
            {t("SERVICES.SUBTITLE") ||
              "Fueling the Next Generation of Crypto Innovation"}
          </div>
          <div
            className="list-service grid lg:grid-cols-3 sm:grid-cols-2 gap-8 md:mt-10 mt-6 gap-y-10"
            style={{
              transform: isInView ? "none" : "translateY(60px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
          >
            {data.slice(0, 6).map((item, index) => (
              <ServiceItem
                data={item}
                style="style-one"
                number={index}
                key={index}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={`/${locale}/service/venture-capital`}
              className="button-main bg-brown text-white"
            >
              {t("COMMON.BUTTONS.DISCOVER_SERVICES") || "Discover Our Services"}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceOne