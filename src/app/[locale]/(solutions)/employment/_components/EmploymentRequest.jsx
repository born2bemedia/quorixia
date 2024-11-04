"use client";
import ConnectForm from "@/global_components/ConnectForm";
import { useTranslations } from "next-intl";
import React from "react";

const EmploymentRequest = () => {
  const t = useTranslations("employment");
  return (
    <section className="employment-request">
      <div className="_container">
        <div className="employment-request__body">
          <h2
            className="fadeInUp"
            dangerouslySetInnerHTML={{ __html: t("EmploymentRequest.title") }}
          />
          <p
            className="fadeInUp"
            dangerouslySetInnerHTML={{ __html: t("EmploymentRequest.text") }}
          />
          <ConnectForm />
        </div>
      </div>
    </section>
  );
};

export default EmploymentRequest;
