'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import { useTranslation } from "@/i18n/TranslationContext";

interface Props {
  classname: string;
}

const PartnerOne: React.FC<Props> = ({ classname }) => {
  const { t } = useTranslation();

  const partners = [
    {
      name: "Binance",
      image: "/images/partner/203x44.png",
    },
    {
      name: "Coinbase",
      image: "/images/partner/203x44.png",
    },
    {
      name: "FTX Ventures",
      image: "/images/partner/203x44.png",
    },
    {
      name: "Kraken",
      image: "/images/partner/203x44.png",
    },
    {
      name: "Polygon",
      image: "/images/partner/203x44.png",
    },
    {
      name: "Chainlink",
      image: "/images/partner/203x44.png",
    },
  ];

  return (
    <>
      <div className={`brand-block py-9 ${classname}`}>
        <div className="container">
          <div className="flex flex-col items-center justify-center mb-8">
            <h4 className="heading4 text-white text-center">
              {t("HOME.PARTNERS.TITLE") || "Our Strategic Partners"}
            </h4>
            <div className="body2 text-tan-light text-center mt-2">
              {t("HOME.PARTNERS.SUBTITLE") ||
                "Building the future of blockchain and cryptocurrency together"}
            </div>
          </div>
          <div className="list-brand">
            <Swiper
              spaceBetween={12}
              slidesPerView={2}
              loop={true}
              modules={[Autoplay]}
              autoplay={{
                delay: 4000,
              }}
              breakpoints={{
                500: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
                680: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 16,
                },
                1200: {
                  slidesPerView: 5,
                  spaceBetween: 16,
                },
              }}
            >
              {partners.map((partner, index) => (
                <SwiperSlide key={index}>
                  <div className="brand-item relative flex items-center justify-center h-[40px]">
                    <Image
                      src={partner.image}
                      width={300}
                      height={300}
                      alt={partner.name}
                      className="h-full w-auto duration-500 relative object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/partner-program"
              className="button button-outline text-white border-white hover:border-tan-light hover:text-tan-light"
            >
              {t("COMMON.BUTTONS.JOIN_PARTNER") || "Join Our Partner Program"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerOne