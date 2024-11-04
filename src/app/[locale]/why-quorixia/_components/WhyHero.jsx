"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const WhyHero = () => {
  const t = useTranslations("why");
  return (
    <section className="why-hero">
      <div className="why-hero__body">
        <h2
          className="fadeInUp"
          dangerouslySetInnerHTML={{ __html: t("WhyHero.title") }}
        />
        <h1
          className="fadeInUp"
          dangerouslySetInnerHTML={{
            __html: t.rich("WhyHero.subtitle", {
              br: () => "<br />",
            }),
          }}
        />
        <p
          dangerouslySetInnerHTML={{
            __html: t.rich("WhyHero.text1", {
              br: () => "<br />",
            }),
          }}
        />
      </div>
      <div className="why-hero__bottom">
        <div className="left">
          <h2
            dangerouslySetInnerHTML={{
              __html: t.rich("WhyHero.subtitle2", {
                br: () => "<br />",
              }),
            }}
          />
        </div>
        <div className="right">
          <p
            dangerouslySetInnerHTML={{
              __html: t.rich("WhyHero.text2", {
                br: () => "<br />",
              }),
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyHero;
