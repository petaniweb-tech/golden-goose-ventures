'use client'

import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import { useTranslation } from "@/i18n/TranslationContext";

const SliderOne = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="slider-block style-one">
        <div className="prev-arrow flex items-center justify-center">
          <Icon.CaretLeft className="text-white heading6" weight="bold" />
        </div>
        <div className="slider-main">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              prevEl: ".prev-arrow",
              nextEl: ".next-arrow",
            }}
            loop={true}
            pagination={{ clickable: true }}
            speed={400}
            modules={[Pagination, Autoplay, Navigation]}
            className="h-full relative"
            autoplay={{
              delay: 4000,
            }}
          >
            <SwiperSlide>
              <div className="slider-item slider-first">
                <div className="bg-img">
                  <Image
                    src={"/images/slider/blockchain.jpg"}
                    width={4000}
                    height={3000}
                    alt="bgslider"
                    priority={true}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="container">
                  <div className="text-content flex-columns-between">
                    <div className="heading2">
                      <div className="relative overflow-hidden">
                        <span className="block relative overflow-hidden">
                          {t("HOME.HERO.TITLE_LINE1") ||
                            "Empowering the Future"}
                        </span>
                        <span className="block absolute top-0 left-0 w-full h-full">
                          {t("HOME.HERO.TITLE_LINE1") ||
                            "Empowering the Future"}
                        </span>
                      </div>
                      <div className="relative overflow-hidden">
                        <span className="block relative overflow-hidden">
                          {t("HOME.HERO.TITLE_LINE2") || "of Blockchain &"}
                        </span>
                        <span className="block absolute top-0 left-0 w-full h-full">
                          {t("HOME.HERO.TITLE_LINE2") || "of Blockchain &"}
                        </span>
                      </div>
                      <div className="relative overflow-hidden">
                        <span className="text-brown block relative overflow-hidden">
                          {t("HOME.HERO.TITLE_LINE3") || "Crypto Innovation"}
                        </span>
                        <span className="text-brown block absolute top-0 left-0 w-full h-full">
                          {t("HOME.HERO.TITLE_LINE3") || "Crypto Innovation"}
                        </span>
                      </div>
                    </div>
                    <div className="body2 mt-3 text-secondary">
                      {t("HOME.HERO.SUBTITLE") ||
                        "Investing in visionary entrepreneurs, groundbreaking protocols,"}
                      <br />
                      {t("HOME.HERO.SUBTITLE2") ||
                        "and disruptive technologies across Asia."}
                    </div>
                    <div className="button-block md:mt-10 mt-6">
                      <Link
                        className="button-main bg-brown text-white"
                        href="/ggv-group/venture-capital"
                      >
                        {t("COMMON.BUTTONS.LEARN_MORE") || "Learn More"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item slider-second">
                <div className="bg-img">
                  <Image
                    src={"/images/slider/premier.jpg"}
                    width={4000}
                    height={3000}
                    alt="bgslider"
                    priority={true}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="container">
                  <div className="text-content flex-columns-between">
                    <div className="heading2">
                      <div className="relative overflow-hidden">
                        <span className="block relative overflow-hidden">
                          {t("HOME.HERO.SECOND_TITLE_LINE1") ||
                            "Premier Blockchain"}
                        </span>
                        <span className="block absolute top-0 left-0 w-full h-full">
                          {t("HOME.HERO.SECOND_TITLE_LINE1") ||
                            "Premier Blockchain"}
                        </span>
                      </div>
                      <div className="relative overflow-hidden">
                        <span className="block relative overflow-hidden">
                          {t("HOME.HERO.SECOND_TITLE_LINE2") ||
                            "Investment Firm"}
                        </span>
                        <span className="block absolute top-0 left-0 w-full h-full">
                          {t("HOME.HERO.SECOND_TITLE_LINE2") ||
                            "Investment Firm"}
                        </span>
                      </div>
                      <div className="relative overflow-hidden">
                        <span className="text-brown block relative overflow-hidden">
                          {t("HOME.HERO.SECOND_TITLE_LINE3") ||
                            "In Asia-Pacific"}
                        </span>
                        <span className="text-brown block absolute top-0 left-0 w-full h-full">
                          {t("HOME.HERO.SECOND_TITLE_LINE3") ||
                            "In Asia-Pacific"}
                        </span>
                      </div>
                    </div>
                    <div className="body2 mt-3 text-secondary">
                      {t("HOME.HERO.SECOND_SUBTITLE") ||
                        "Specialized in venture capital, OTC trading,"}
                      <br />
                      {t("HOME.HERO.SECOND_SUBTITLE2") ||
                        "market making, and startup incubation."}
                    </div>
                    <div className="button-block md:mt-10 mt-6">
                      <Link
                        className="button-main bg-brown text-white"
                        href="/service/venture-capital"
                      >
                        {t("COMMON.BUTTONS.DISCOVER_SERVICES") ||
                          "Discover Our Services"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item slider-third">
                <div className="bg-img">
                  <Image
                    src={"/images/slider/building.jpg"}
                    width={4000}
                    height={3000}
                    alt="bgslider"
                    priority={true}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="container">
                  <div className="text-content flex-columns-between">
                    <div className="heading2">
                      <div className="relative overflow-hidden">
                        <span className="block relative overflow-hidden">
                          {t("HOME.HERO.THIRD_TITLE_LINE1") ||
                            "Building The Future"}
                        </span>
                        <span className="block absolute top-0 left-0 w-full h-full">
                          {t("HOME.HERO.THIRD_TITLE_LINE1") ||
                            "Building The Future"}
                        </span>
                      </div>
                      <div className="relative overflow-hidden">
                        <span className="block relative overflow-hidden">
                          {t("HOME.HERO.THIRD_TITLE_LINE2") ||
                            "Through Strategic"}
                        </span>
                        <span className="block absolute top-0 left-0 w-full h-full">
                          {t("HOME.HERO.THIRD_TITLE_LINE2") ||
                            "Through Strategic"}
                        </span>
                      </div>
                      <div className="relative overflow-hidden">
                        <span className="text-brown block relative overflow-hidden">
                          {t("HOME.HERO.THIRD_TITLE_LINE3") || "Partnerships"}
                        </span>
                        <span className="text-brown block absolute top-0 left-0 w-full h-full">
                          {t("HOME.HERO.THIRD_TITLE_LINE3") || "Partnerships"}
                        </span>
                      </div>
                    </div>
                    <div className="body2 mt-3 text-secondary">
                      {t("HOME.HERO.THIRD_SUBTITLE") ||
                        "Partner with us to access exclusive resources,"}
                      <br />
                      {t("HOME.HERO.THIRD_SUBTITLE2") ||
                        "technologies, and market opportunities."}
                    </div>
                    <div className="button-block md:mt-10 mt-6">
                      <Link
                        className="button-main bg-brown text-white"
                        href="/partner-program"
                      >
                        {t("COMMON.BUTTONS.JOIN_PARTNER") ||
                          "Join Our Partner Program"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="next-arrow flex items-center justify-center">
          <Icon.CaretRight className="text-white heading6" weight="bold" />
        </div>
      </div>
    </>
  );
};

export default SliderOne