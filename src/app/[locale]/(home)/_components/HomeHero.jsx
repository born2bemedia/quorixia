"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const HomeHero = () => {
  const t = useTranslations("home");

  return (
    <section className="home-hero">
      <div className="home-hero__body">
        <h2 className="fadeInUp">{t("HomeHero.title")}</h2>
        <h1
          className="fadeInUp"
          dangerouslySetInnerHTML={{ __html: t("HomeHero.subtitle") }}
        />
        <p dangerouslySetInnerHTML={{ __html: t("HomeHero.text") }} />
      </div>
    </section>
  );
};

export default HomeHero;
