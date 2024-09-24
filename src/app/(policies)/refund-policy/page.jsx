import "@/styles/policy.scss";
import { getPageBySlug, getPageSlugs } from "@/utils/pages";
import React from "react";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  const slugs = await getPageSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const page = await getPageBySlug(slug);

  return {
    title: `${page.title} | Quorixia`,
  };
}

const BlogInner = async ({ params: { slug } }) => {
  const page = await getPageBySlug(slug);
  return (
    <section className="policy-inner">
      <div className="_container">
        <div className="policy-inner__body">
          <div className="policy-title">
            <h1>{page.title}</h1>
            <p>Last Updated: {page.updatedAt}</p>
          </div>
          <ReactMarkdown>{page.content}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default BlogInner;
