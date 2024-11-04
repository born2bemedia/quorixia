"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const BlogHero = () => {
  const t = useTranslations("blog");
  return (
    <section className="blog-hero">
      <div className="blog-hero__body">
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <h1 className="fadeInUp" dangerouslySetInnerHTML={{ __html: t("BlogHero.title") }} />
          <p dangerouslySetInnerHTML={{ __html: t("BlogHero.text") }} />
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
