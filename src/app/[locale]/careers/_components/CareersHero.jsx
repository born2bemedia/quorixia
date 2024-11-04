"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const CareersHero = () => {
  const t = useTranslations("careers");

  return (
    <section className="careers-hero">
      <div className="careers-hero__body">
        <h2 className="fadeInUp">{t("CareersHero.title")}</h2>
        <h1 className="fadeInUp">{t("CareersHero.subtitle")}</h1>
        <p dangerouslySetInnerHTML={{ __html: t("CareersHero.text") }} />
      </div>
    </section>
  );
};

export default CareersHero;
