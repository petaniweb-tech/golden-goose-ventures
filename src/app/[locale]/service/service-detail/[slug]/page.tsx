import Link from "next/link";
import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import serviceData from "@/data/service.json";
import CtaOne from "@/components/Section/CTA/CtaOne";
import Footer from "@/components/Footer/Footer";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import ServiceDetailClient from "@/components/Service/ServiceDetailClient";

// Generate static paths for all service detail pages
export function generateStaticParams() {
  return serviceData.map((item) => ({
    slug: item.title.toLowerCase().replace(/ /g, "-"),
  }));
}

export default function ServiceStyleOne({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const foundPost = serviceData.find((item) => {
    return item.title.toLowerCase().replace(/ /g, "-") === slug;
  });

  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <BreadcrumbItem
            link="Our Services"
            img="/images/banner/about1.png"
            title={foundPost?.title || "Our Services"}
            desc={
              foundPost?.desc ||
              "Expand your knowledge and skills in cryptocurrency trading through our educational resources."
            }
          />
          <ServiceDetailClient foundPost={foundPost} />
          <CtaOne />
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}
