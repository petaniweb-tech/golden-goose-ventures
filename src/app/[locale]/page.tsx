import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import SliderOne from "@/components/Slider/SliderOne";
import ServiceOne from "@/components/Section/Service/ServiceOne";
import serviceData from "@/data/service.json";
import CaseStudyOne from "@/components/Section/CaseStudy/CaseStudyOne";
import FaqsOne from "@/components/Section/FAQs/FaqsOne";
import FormRequestOne from "@/components/Section/FormRequest/FormRequestOne";
import blogData from "@/data/blog.json";
import BlogOne from "@/components/Section/Blog/BlogOne";
import PartnerOne from "@/components/Section/Partner/PartnerOne";
import Footer from "@/components/Footer/Footer";
import CtaOne from "@/components/Section/CTA/CtaOne";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <header id="header">
          <TopNavOne />
          <MenuOne />
        </header>
        <main className="content">
          <SliderOne />
          <ServiceOne data={serviceData} />
          <CaseStudyOne />
          <FaqsOne />
          {/* <FormRequestOne /> */}
          {/* <div className="py-20"> */}
          <CtaOne />
          {/* </div> */}
          {/* <BlogOne data={blogData} />
          <PartnerOne classname="bg-brown lg:mt-[100px] sm:mt-16 mt-10" /> */}
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}
