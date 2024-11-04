"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const HrHero = () => {
  const t = useTranslations("hr");
  return (
    <section className="hr-hero">
      <div className="hr-hero__body">
        <div></div>
        <div><div></div></div>
        <div>
          <h1 className="fadeInUp" dangerouslySetInnerHTML={{ __html: t("HrHero.title") }} />
          <p dangerouslySetInnerHTML={{ __html: t("HrHero.text") }} />
        </div>
      </div>
    </section>
  );
};

export default HrHero;
