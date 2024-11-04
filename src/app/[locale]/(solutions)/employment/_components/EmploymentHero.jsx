"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const EmploymentHero = () => {
  const t = useTranslations("employment");
  return (
    <section className="employment-hero">
      <div className="employment-hero__body">
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <h1
            className="fadeInUp"
            dangerouslySetInnerHTML={{ __html: t("EmploymentHero.title") }}
          />
          <p dangerouslySetInnerHTML={{ __html: t("EmploymentHero.text") }} />
        </div>
      </div>
    </section>
  );
};

export default EmploymentHero;
