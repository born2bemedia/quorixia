import ButtonArrow from "@/icons/ButtonArrow";
import Link from "next/link";
import React from "react";

const WhyResult = () => {
  return (
    <section className="why-result">
      <div className="_container">
        <h2 className="fadeInUp">Our Commitment to Results</h2>
        <div className="why-result__body">
          <div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3>Tangible Progress</h3>
              <p>
                We deliver accurate, measurable results from job offers to
                skill-building.
              </p>
            </div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3>Long-Term Success</h3>
              <p>
                We focus on solutions that continue to benefit you far into the
                future.
              </p>
            </div>
            <div className="fadeInUp">
              <img src="/images/home/dots.svg" />
              <h3>Impactful Growth</h3>
              <p>
                Our strategies are designed to drive meaningful career
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyResult;
