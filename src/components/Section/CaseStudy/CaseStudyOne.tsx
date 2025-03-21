"use client";

import Link from "next/link";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useTranslation } from "@/i18n/TranslationContext";
import portfolioData from "@/data/portfolio.json";

interface PortfolioItem {
  id: number;
  category: string;
  subTitle: string;
  title: string;
  desc: string;
  shortDesc: string;
  img: string;
}

const CaseStudyOne = () => {
  const { t, locale } = useTranslation();

  // Get first item from each category
  const featuredItems: PortfolioItem[] = [];
  const categories = ["blockchain", "cryptocurrency", "defi", "web3"];

  for (const category of categories) {
    const item = (portfolioData as PortfolioItem[]).find(
      (item: PortfolioItem) => item.category === category
    );
    if (item) {
      featuredItems.push(item);
    }
  }

  return (
    <>
      <section className="case-study-block style-one lg:pt-[100px] sm:pt-16 pt-10">
        <div className="container">
          <div className="heading text-center">
            <h3 className="heading3">{t("PORTFOLIO.TITLE") || "Portfolio"}</h3>
            <div className="right flex flex-col items-center gap-2 mt-3">
              <div className="body3">
                {t("PORTFOLIO.SUBTITLE") ||
                  "Innovative Blockchain and Cryptocurrency Projects In Our Portfolio"}
              </div>
              <Link
                className="flex items-center gap-2 hover:text-brown duration-300"
                href="/portfolio"
              >
                <div className="text-button">
                  {t("PORTFOLIO.VIEW_ALL") || "View Our Portfolio"}
                </div>
                <Icon.CaretDoubleRight weight="bold" className="text-xs mt-1" />
              </Link>
            </div>
          </div>
        </div>
        <div className="list-case-study md:mt-10 mt-6">
          <div className="list grid lg:grid-cols-4 sm:grid-cols-2">
            {featuredItems.map((item, index) => (
              <div className="w-full" key={index}>
                <div className="case-study-item h-[500px]">
                  <div className="bg-img h-full">
                    <Image
                      width={5000}
                      height={5000}
                      className="w-full h-full object-cover"
                      src={item.img}
                      alt={item.title}
                    />
                  </div>
                  <div className="text flex flex-col justify-between gap-3">
                    <div className="heading5">
                      <Link
                        className="text-white"
                        href={`/${locale}/portfolio/${item.category}`}
                      >
                        {item.title}
                      </Link>
                    </div>
                    <div className="body2 text-white">{item.desc}</div>
                    <Link
                      className="flex items-center gap-1"
                      href={`/${locale}/portfolio/${item.category}`}
                    >
                      <div className="text-button text-white">
                        {t("COMMON.BUTTONS.READ_MORE") || "Read More"}
                      </div>
                      <Icon.CaretDoubleRight
                        weight="bold"
                        className="text-xs text-white mt-1"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default CaseStudyOne;
