"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const CasesHero = () => {
  const t = useTranslations("cases");
  return (
    <section className="cases-hero">
      <div className="cases-hero__body">
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <h1 className="fadeInUp" dangerouslySetInnerHTML={{ __html: t("CasesHero.title") }} />
          <p dangerouslySetInnerHTML={{ __html: t("CasesHero.text") }} />
        </div>
      </div>
    </section>
  );
};

export default CasesHero;
