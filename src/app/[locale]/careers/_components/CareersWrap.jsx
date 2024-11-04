"use client";
import { getJobs } from "@/utils/jobs";
import React, { useEffect, useState } from "react";
import CareersAccordion from "./CareersAccordion";
import { useLocale, useTranslations } from "next-intl";

const CareersWrap = () => {
  const locale = useLocale();
  const t = useTranslations("careers");
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getJobs(locale);
      setJobs(data);
    };

    fetchJobs();
  }, []);

  if (!jobs) return <div>...</div>;

  return (
    <section className="jobs-wrap">
      <div className="_container">
        <h2 className="fadeInUp">{t("CareersWrap.title")}</h2>
        <p className="fadeInUp">{t("CareersWrap.subtitle")}</p>
        <div className="jobs-wrap__body">
          <CareersAccordion jobs={jobs} />
        </div>
      </div>
    </section>
  );
};

export default CareersWrap;
