"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const ContactHero = () => {
  const t = useTranslations("contact");
  return (
    <section className="contact-hero">
      <div className="contact-hero__body">
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <h1 className="fadeInUp">{t("ContactHero.title")}</h1>
          <p dangerouslySetInnerHTML={{ __html: t("ContactHero.text") }} />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
