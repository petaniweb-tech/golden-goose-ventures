import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import CtaOne from "@/components/Section/CTA/CtaOne";
import Footer from "@/components/Footer/Footer";
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function ContactStyleOne() {
  return (
    <>
      <div className="overflow-x-hidden">
        <main className="content">
          {/* <BreadcrumbItem
            link="Contact us"
            img="/images/banner/about1.png"
            title="Contact us"
            desc="Explore our Contact Us page for prompt assistance from our dedicated team."
          /> */}
          <div className="form-contact style-one lg:py-[100px] sm:py-16 py-10">
            <div className="container w-full flex items-center justify-center">
              <div className="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 flex justify-center">
                <div className="infor bg-blue rounded-xl p-10 flex flex-col items-center justify-center w-full">
                  <div className="heading5 text-white">Get in touch</div>
                  <div className="body3 text-white mt-2 text-center">
                    We will get back to you within 24 hours, or call us everyday
                  </div>
                  <div className="list-social flex flex-wrap items-center gap-3 md:mt-10 mt-6">
                    <a
                      className="item rounded-full w-12 h-12 flex items-center justify-center bg-surface"
                      href="https://www.facebook.com/"
                      target="_blank"
                    >
                      <i className="icon-facebook text-black"></i>
                    </a>
                    <a
                      className="item rounded-full w-12 h-12 flex items-center justify-center bg-surface"
                      href="https://www.linkedin.com/"
                      target="_blank"
                    >
                      <i className="icon-in text-black"></i>
                    </a>
                    <a
                      className="item rounded-full w-12 h-12 flex items-center justify-center bg-surface"
                      href="https://www.twitter.com/"
                      target="_blank"
                    >
                      <i className="icon-twitter text-sm text-black ml-1"></i>
                    </a>
                    <a
                      className="item rounded-full w-12 h-12 flex items-center justify-center bg-surface"
                      href="https://www.instagram.com/"
                      target="_blank"
                    >
                      <i className="icon-insta text-sm text-black"></i>
                    </a>
                    <a
                      className="item rounded-full w-12 h-12 flex items-center justify-center bg-surface"
                      href="https://www.youtube.com/"
                      target="_blank"
                    >
                      <i className="icon-youtube text-xs text-black"></i>
                    </a>
                  </div>
                  <div className="list-more-infor md:mt-10 mt-6">
                    <div className="item flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                        <Icon.Clock
                          weight="bold"
                          className="text-blue text-2xl"
                        />
                      </div>
                      <div className="line-y"></div>
                      <div className="text-button normal-case text-white">
                        8AM - 6PM, Mon - sun
                      </div>
                    </div>
                    <div className="item flex items-center gap-3 mt-5">
                      <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                        <Icon.Phone
                          weight="fill"
                          className="text-blue text-2xl"
                        />
                      </div>
                      <div className="line-y"> </div>
                      <div className="text-button normal-case text-white">
                        123 456 7890
                      </div>
                    </div>
                    <div className="item flex items-center gap-3 mt-5">
                      <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                        <Icon.EnvelopeSimple
                          weight="bold"
                          className="text-blue text-2xl"
                        />
                      </div>
                      <div className="line-y"> </div>
                      <div className="text-button normal-case text-white">
                        hi@goldengooseventures.com
                      </div>
                    </div>
                    <div className="item flex items-center gap-3 mt-5">
                      <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full flex-shrink-0">
                        <Icon.MapPin
                          weight="bold"
                          className="text-blue text-2xl"
                        />
                      </div>
                      <div className="line-y"> </div>
                      <div className="text-button normal-case text-white">
                        Singapore
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <CtaOne /> */}
        </main>
      </div>
    </>
  );
}
