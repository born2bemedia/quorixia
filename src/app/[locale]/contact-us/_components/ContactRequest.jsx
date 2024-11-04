"use client";
import ConnectForm from "@/global_components/ConnectForm";
import React from "react";
import { useTranslations } from "next-intl";

const ContactRequest = () => {
  const t = useTranslations("contact");
  return (
    <section className="contact-request">
      <div className="_container">
        <div className="contact-request__body">
          <h2 className="fadeInUp">{t("ContactRequest.title")}</h2>
          <p
            className="fadeInUp"
            dangerouslySetInnerHTML={{ __html: t("ContactRequest.text") }}
          />
          <ConnectForm />
        </div>
      </div>
    </section>
  );
};

export default ContactRequest;
