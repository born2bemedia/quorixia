import ButtonArrow from "@/icons/ButtonArrow";
import { Link } from "@/navigation";
import React from "react";
import { useTranslations } from "next-intl";

const HomeSolutionWhite = () => {
  const t = useTranslations("home");
  return (
    <section className="home-solution white">
      <div className="_container">
        <div className="home-solution__body">
        {t.rich("HomeSolutionWhite.content", {
            h3: (children) => <h3 >{children}</h3>,
            h2: (children) => <h2 >{children}</h2>,
            p: (children) => <p >{children}</p>,
            h4: (children) => <h4 >{children}</h4>,
            ul: (children) => <ul >{children}</ul>,
            li: (children) => <li>{children}</li>,
            b: (children) => <b>{children}</b>,
          })}
          <Link href="/employment" className="main-button">
            <span>{t("HomeSolutionWhite.button")}</span>
            <ButtonArrow />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSolutionWhite;
