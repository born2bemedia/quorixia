"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const GlossaryHero = () => {
  const t = useTranslations("glossary");
  return (
    <section className="pricing-hero">
      <div className="pricing-hero__body">
        <h2 className="fadeInUp">{t("GlossaryHero.title")}</h2>
        <h1 className="fadeInUp">{t("GlossaryHero.subtitle")}</h1>
        <p dangerouslySetInnerHTML={{ __html: t("GlossaryHero.text") }} />
      </div>
    </section>
  );
};

export default GlossaryHero;
