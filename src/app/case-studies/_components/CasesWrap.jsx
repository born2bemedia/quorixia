import { getCases } from "@/utils/cases";
import React from "react";
import CaseAccordion from "./CaseAccordion";

const CasesWrap = async () => {
  const cases = await getCases();
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
