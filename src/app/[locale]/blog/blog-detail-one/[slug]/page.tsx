import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuOne from "@/components/Header/Menu/MenuOne";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem";
import LayoutDetailOne from "@/components/Blog/LayoutDetailOne";
import blogData from "@/data/blog.json";
import { BlogType } from "@/type/BlogType";
import CtaOne from "@/components/Section/CTA/CtaOne";
import Footer from "@/components/Footer/Footer";
import BlogDetailClient from "@/components/Blog/BlogDetailClient";

// Generate static paths for all blog posts
export function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.title.toLowerCase().replace(/ /g, "-"),
  }));
}

export default function CaseStudyDetail({
  params: { slug },
}: {
  params: { slug: string };
}) {
  let foundPost = blogData.find((item) => {
    return item.title.toLowerCase().replace(/ /g, "-") === slug;
  });

  if (foundPost === undefined) {
    foundPost = blogData[0];
  }

  return (
    <>
      <div className="overflow-x-hidden">
        {/* <header id="header">
          <TopNavOne />
          <MenuOne />
        </header> */}
        <main className="content">
          <BreadcrumbItem
            link="Case Studies"
            img="/images/banner/1920x400.png"
            title={"Blog Detail"}
            desc={
              "Discover valuable insights and expert advice on budgeting, investing, and retirement planning in our Financial Blogs section."
            }
          />
          <BlogDetailClient data={foundPost as BlogType} slug={slug} />
          <CtaOne />
        </main>
        {/* <footer id="footer">
          <Footer />
        </footer> */}
      </div>
    </>
  );
}
