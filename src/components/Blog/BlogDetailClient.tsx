"use client";

import { useRouter } from "next/navigation";
import LayoutDetailOne from "@/components/Blog/LayoutDetailOne";
import blogData from "@/data/blog.json";
import { BlogType } from "@/type/BlogType";

interface BlogDetailClientProps {
  data: BlogType;
  slug: string;
}

export default function BlogDetailClient({
  data,
  slug,
}: BlogDetailClientProps) {
  const router = useRouter();

  const handleNextBlogDetail = () => {
    if (data) {
      let nextId: number;
      const index = blogData.findIndex((post) => post.id === data?.id);
      if (index === blogData.length - 1) {
        nextId = blogData[0].id;
      } else {
        nextId = blogData[index + 1].id;
      }
      const nextBlog = blogData.find((item) => item.id === nextId);
      if (nextBlog) {
        router.push(
          `/blog/blog-detail-one/${nextBlog.title
            .toLowerCase()
            .replace(/ /g, "-")}`
        );
      }
    }
  };

  const handlePrevBlogDetail = () => {
    if (data) {
      let nextId: number;
      const index = blogData.findIndex((post) => post.id === data?.id);

      if (index === blogData[0].id - 1) {
        nextId = blogData.length;
      } else {
        nextId = blogData[index - 1].id;
      }
      const nextBlog = blogData.find((item) => item.id === nextId);
      if (nextBlog) {
        router.push(
          `/blog/blog-detail-one/${nextBlog.title
            .toLowerCase()
            .replace(/ /g, "-")}`
        );
      }
    }
  };

  if (!data) {
    return <h3>Post not found.</h3>;
  }

  return (
    <LayoutDetailOne
      data={data}
      handleNextBlogDetail={handleNextBlogDetail}
      handlePrevBlogDetail={handlePrevBlogDetail}
    />
  );
}
