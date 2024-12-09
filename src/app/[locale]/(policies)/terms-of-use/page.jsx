import "@/styles/policy.scss";
import { getPageBySlug, getPageSlugs } from "@/utils/pages";
import React from "react";
import ReactMarkdown from "react-markdown";
import { setRequestLocale } from 'next-intl/server';

export async function generateStaticParams({ params: { locale } }) {
  // Tell next-intl what the locale is, so it doesn't rely on dynamic headers
  setRequestLocale(locale);

  const slugs = await getPageSlugs(999, locale);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { locale } }) {
  setRequestLocale(locale);
  const page = await getPageBySlug("terms-of-use", locale);
  return {
    title: `${page.title} | Quorixia`,
  };
}

const BlogInner = async ({ params: { locale } }) => {
  const page = await getPageBySlug("terms-of-use", locale);
  return (
    <section className="policy-inner">
      <div className="_container">
        <div className="policy-inner__body">
          <div className="policy-title">
            <h1>{page.title}</h1>
            <p>Last Updated: 20 September, 2024</p>
          </div>
          <ReactMarkdown>{page.content}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default BlogInner;
