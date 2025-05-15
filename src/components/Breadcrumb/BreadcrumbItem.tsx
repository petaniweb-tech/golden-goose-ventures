import React from "react"
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface Props {
  link: string;
  img: string;
  title: string;
  desc: string;
  blur?: boolean;
  bgBlack?: string;
}

const BreadcrumbItem: React.FC<Props> = ({
  link,
  img,
  title,
  desc,
  blur = false,
  bgBlack = "bg-black/20",
}) => {
  return (
    <div
      className={`${bgBlack} breadcrumb-block w-full lg:h-[400px] sm:h-[360px] h-[320px] relative`}
    >
      <div
        className={`bg-img w-full h-full absolute top-0 left-0 z-[-1] ${
          blur ? "blur-sm" : ""
        }`}
      >
        <Image
          src={img}
          width={4000}
          height={3000}
          alt="banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container relative h-full flex items-center">
        <div className="text-nav xl:w-1/2 md:w-3/5">
          <div className="heading3 text-white">{title}</div>
          <div className="sub-heading mt-4 text-white font-normal">{desc}</div>
        </div>
      </div>
    </div>
  );
};
export default BreadcrumbItem