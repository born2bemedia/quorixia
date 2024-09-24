import "@/styles/blog.scss";
import { getPost, getSlugs } from "@/utils/blog";
import React from "react";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  const slugs = await getSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const post = await getPost(slug);
  return {
    title: post.attributes.seo_title,
    description: post.attributes.seo_description,
  };
}

const BlogInner = async ({ params: { slug } }) => {
  const post = await getPost(slug);
  console.log(post);
  return (
    <section className="blog-inner">
      <div className="_container">
        <div className="blog-inner__body">
          <h1>{post.attributes.title}</h1>
          <ReactMarkdown>{post.attributes.content}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default BlogInner;
