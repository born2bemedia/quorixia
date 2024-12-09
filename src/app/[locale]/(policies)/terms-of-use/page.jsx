import "@/styles/policy.scss";
import { getPageBySlug, getPageSlugs } from "@/utils/pages";
import React from "react";
import ReactMarkdown from "react-markdown";
import { setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
  const slugs = await getPageSlugs();
  const locales = ['en', 'de', 'it']; // Replace with your actual locales
  return slugs.flatMap((slug) => locales.map((locale) => ({ slug, locale })));
}


export async function generateMetadata({ params }) {
  const page = await getPageBySlug(params.slug);

  return {
    title: `${page.title} | Quorixia`,
  };
}

export default async function BlogInner({ params }) {
  const { slug } = params;

  // Enable static rendering
  setRequestLocale(slug);

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
}
