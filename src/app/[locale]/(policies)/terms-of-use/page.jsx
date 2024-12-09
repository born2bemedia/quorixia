import "@/styles/policy.scss";
import { getPageBySlug, getPageSlugs } from "@/utils/pages";
import React from "react";
import ReactMarkdown from "react-markdown";
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'it', 'de']; // Add other locales if necessary

export async function generateStaticParams() {
  const slugs = await getPageSlugs();
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ slug, locale }))
  );
}


export async function generateMetadata({ params }) {
  try {
    const locale = await setRequestLocale(params.locale);
    const page = await getPageBySlug('terms-of-use', { locale });

    return {
      title: `${page.title} | Quorixia`,
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return notFound();
  }
}

export default async function BlogInner({ params }) {
  const page = await getPageBySlug('terms-of-use', { locale: params.locale });

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
}
