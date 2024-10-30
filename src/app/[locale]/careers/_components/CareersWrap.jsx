import { getCases } from "@/utils/cases";
import React from "react";
import CareersAccordion from "./CareersAccordion";
import { getJobs } from "@/utils/jobs";

const CareersWrap = async () => {
  const jobs = await getJobs();
  return (
    <section className="jobs-wrap">
      <div className="_container">
        <h2 className="fadeInUp">Current Job Openings</h2>
        <p className="fadeInUp">Here are our latest opportunities to join the Quorixia team:</p>
        <div className="jobs-wrap__body">
          <CareersAccordion jobs={jobs} />
        </div>
      </div>
    </section>
  );
};

export default CareersWrap;
