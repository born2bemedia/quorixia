import React from "react";
import "@/styles/blog.scss";
import BlogHero from "./_components/BlogHero";
import BlogWrap from "./_components/BlogWrap";

export const metadata = {
    title: "Career Insights & Expert Advice | Quorixia Blog",
    description:
      "Stay updated with Quorixia’s latest blog posts, offering expert advice, career tips, and insights to help you navigate your professional journey.",
    openGraph: {
      title: "Career Insights & Expert Advice | Quorixia Blog",
      description:
        "Stay updated with Quorixia’s latest blog posts, offering expert advice, career tips, and insights to help you navigate your professional journey.",
      images: "https://quorixia.com/images/meta.png",
    },
  };

const Blog = () => {
  return (
    <>
      <BlogHero />
      <BlogWrap />
    </>
  );
};

export default Blog;
