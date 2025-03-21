"use client";

import React from "react";
import BlogItem from "@/components/Blog/BlogItem";
import Link from "next/link";
import { BlogType } from "@/type/BlogType";
import { useTranslation } from "@/i18n/TranslationContext";
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface Props {
  data: Array<BlogType>;
}

const BlogOne: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section className="list-blog three-col lg:mt-[100px] sm:mt-16 mt-10">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h3 className="heading3 text-center">
            {t("HOME.MEDIA.TITLE") || "Latest News & Insights"}
          </h3>
          <div className="body2 text-secondary text-center mt-3 md:max-w-[70%]">
            {t("HOME.MEDIA.SUBTITLE") ||
              "Stay updated with the latest developments in blockchain, cryptocurrency, and our investment activities"}
          </div>
        </div>
        <div className="list grid lg:grid-cols-3 sm:grid-cols-2 gap-8 md:mt-10 mt-6">
          {data.slice(0, 3).map((item, index) => (
            <BlogItem data={item} key={index} type="grid" />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            className="inline-flex items-center gap-2 hover:text-brown duration-300"
            href="/media"
          >
            <div className="text-button">
              {t("HOME.MEDIA.VIEW_ALL") || "View All News & Articles"}
            </div>
            <Icon.CaretDoubleRight weight="bold" className="text-xs mt-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default BlogOne;
