"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AboutHero = () => {
  const t = useTranslations("about");
  return (
    <section className="about-hero">
      <div className="about-hero__body">
        <h2 className="fadeInUp" dangerouslySetInnerHTML={{ __html: t("AboutHero.title") }} />
        <h1 className="fadeInUp" dangerouslySetInnerHTML={{ __html: t("AboutHero.subtitle") }} />
        <p dangerouslySetInnerHTML={{ __html: t("AboutHero.text") }} />
      </div>
      <div className="after">
        <p dangerouslySetInnerHTML={{ __html: t("AboutHero.text2") }} />
      </div>
    </section>
  );
};

export default AboutHero;
