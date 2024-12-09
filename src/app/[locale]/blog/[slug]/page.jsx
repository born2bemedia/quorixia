import "@/styles/blog.scss";
import { getPost, getSlugs } from "@/utils/blog";
import React from "react";
import ReactMarkdown from "react-markdown";

/*export async function generateStaticParams({ params: { locale } }) {
  const slugs = await getSlugs(locale);

  return slugs.map((slug) => ({ slug }));
}*/

const adjustedSlug = (locale, slug) => {
  console.log("locale", locale);
  console.log("slug", slug);

  if (locale === "de") {
    return slug.endsWith("-de") ? slug : `${slug}-de`;
  } else if (locale === "it") {
    return slug.endsWith("-it") ? slug : `${slug}-it`;
  } else {
    if (slug.endsWith("-de")) {
      return slug.slice(0, -3); // Remove '-de'
    } else if (slug.endsWith("-it")) {
      return slug.slice(0, -3); // Remove '-it'
    }
  }
  
  return slug; // Return slug as is if no changes are needed
};


export async function generateMetadata({ params: { slug, locale } }) {
  const slugs = adjustedSlug(locale, slug);
  const post = await getPost(slugs, locale);
  return {
    title: post.attributes.seo_title,
    description: post.attributes.seo_description,
  };
}

const BlogInner = async ({ params: { slug, locale } }) => {
  const slugs = adjustedSlug(locale, slug);
  const post = await getPost(slugs, locale);
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
