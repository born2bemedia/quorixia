"use client";
import ConnectForm from "@/global_components/ConnectForm";
import React from "react";
import { useTranslations } from "next-intl";

const HomeRequest = () => {
  const t = useTranslations("home");
  return (
    <section className="home-request">
      <div className="_container">
        <div className="home-request__body">
          <h3 className="fadeInUp">{t("HomeRequest.title")}</h3>
          <h2 className="fadeInUp">{t("HomeRequest.subtitle")}</h2>
          <p className="fadeInUp">
          {t("HomeRequest.text")}
          </p>
          <ConnectForm />
        </div>
      </div>
    </section>
  );
};

export default HomeRequest;
