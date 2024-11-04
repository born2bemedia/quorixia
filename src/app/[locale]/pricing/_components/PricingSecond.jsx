"use client";
import React, { useState } from "react";
import HrServices from "./tabs/HrServices";
import EmploymentServices from "./tabs/EmploymentServices";
import { useTranslations } from "next-intl";

const PricingSecond = () => {
  const t = useTranslations("pricing");
  const [activeTab, setActiveTab] = useState("hr");
  const handleTabs = (id) => {
    setActiveTab(id);
  };
  return (
    <section className="pricing-tabs">
      <div className="_container">
        <div className="pricing-tabs__body">
          <div className={`tabs-head ${activeTab}`}>
            <div
              className={`${activeTab == "hr" ? "active" : ""}`}
              onClick={() => handleTabs("hr")}
            >
              {t("PricingSecond.hr")}
            </div>
            <div
              className={`${activeTab == "employment" ? "active" : ""}`}
              onClick={() => handleTabs("employment")}
            >
              {t("PricingSecond.employment")}
            </div>
          </div>
          <div className="tabs-content">
            <div className={`${activeTab == "hr" ? "active" : ""}`}>
              <HrServices />
            </div>
            <div className={`${activeTab == "employment" ? "active" : ""}`}>
              <EmploymentServices />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSecond;
