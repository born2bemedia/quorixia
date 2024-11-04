"use client";
import { getCases } from "@/utils/cases";
import React, { useEffect, useState } from "react";
import CaseAccordion from "./CaseAccordion";
import { useLocale } from "next-intl";

const CasesWrap = () => {
  const locale = useLocale();
  const [cases, setCases] = useState(null);

  useEffect(() => {
    const fetchCases = async () => {
      const data = await getCases(locale);
      setCases(data);
    };

    fetchCases();
  }, [locale]);

  if (!cases) return <div>...</div>;

  return (
    <section className="cases-wrap">
      <div className="_container">
        <div className="cases-wrap__body">
          <CaseAccordion cases={cases} />
        </div>
      </div>
    </section>
  );
};

export default CasesWrap;
