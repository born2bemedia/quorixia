import { useTranslations } from "next-intl";
import React from "react";

const ThankyouPage = () => {
  const t = useTranslations("thankyou");
  return (
    <section className="thankyou-page">
      <div className="_container">
        <h1 dangerouslySetInnerHTML={{ __html: t("title") }} />
        <h2 dangerouslySetInnerHTML={{ __html: t("text") }} />
      </div>
    </section>
  );
};

export default ThankyouPage;
