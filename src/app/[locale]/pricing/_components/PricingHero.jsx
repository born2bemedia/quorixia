"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const PricingHero = () => {
  const t = useTranslations("pricing");
  return (
    <section className="pricing-hero">
      <div className="pricing-hero__body">
        <h2
          className="fadeInUp"
          dangerouslySetInnerHTML={{ __html: t("PricingHero.title") }}
        />
        <h1
          className="fadeInUp"
          dangerouslySetInnerHTML={{ __html: t("PricingHero.subtitle") }}
        />
        <p dangerouslySetInnerHTML={{ __html: t("PricingHero.text") }} />
      </div>
    </section>
  );
};

export default PricingHero;
