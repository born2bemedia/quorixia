"use client";
import ConnectForm from "@/global_components/ConnectForm";
import { useTranslations } from "next-intl";
import React from "react";

const HrRequest = () => {
  const t = useTranslations("hr");
  return (
    <section className="hr-request">
      <div className="_container">
        <div className="hr-request__body">
          <h2
            className="fadeInUp"
            dangerouslySetInnerHTML={{ __html: t("HrRequest.title") }}
          />
          <p
            className="fadeInUp"
            dangerouslySetInnerHTML={{ __html: t("HrRequest.text") }}
          />
          <ConnectForm />
        </div>
      </div>
    </section>
  );
};

export default HrRequest;
