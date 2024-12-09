import "@/styles/policy.scss";
import { getPageBySlug, getPageSlugs } from "@/utils/pages";
import React from "react";
import ReactMarkdown from "react-markdown";
import { setRequestLocale } from "next-intl/server";

/*export async function generateStaticParams({ params }) {
  const awaitedParams = await params; // Await the params
  const { locale } = awaitedParams;
  setRequestLocale(locale);
  const slugs = await getPageSlugs(999, locale);
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

export async function generateMetadata({ params }) {
  const awaitedParams = await params; // Await the params
  const { slug, locale } = awaitedParams;
  setRequestLocale(locale);
  const slugs = adjustedSlug(locale, "refund-policy");
  const page = await getPageBySlug(slugs, locale);
  return {
    title: `${page.title} | Quorixia`,
  };
}

const BlogInner = async ({ params }) => {
  const awaitedParams = await params; // Await the params
  const { slug, locale } = awaitedParams;
  const slugs = adjustedSlug(locale, "refund-policy");
  const page = await getPageBySlug(slugs, locale);
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
