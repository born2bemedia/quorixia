import React from "react";
import BlogSlider from "./BlogSlider";
import { getPosts } from "@/utils/blog";

const BlogWrap = async () => {
  const posts = await getPosts(9999);
  return (
    <section className="blog-wrap">
      <div className="_container">
        <div className="blog-wrap__body">
          <BlogSlider posts={posts} />
        </div>
      </div>
    </section>
  );
};

export default BlogWrap;
