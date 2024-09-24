import ButtonArrow from "@/icons/ButtonArrow";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CareersHow = () => {
  return (
    <section className="careers-how">
      <div className="_container">
        <div className="careers-how__body">
          <div className="fadeInUp">
            <h2>How to Apply</h2>
            <p>
              Interested in joining Quorixia? We’d love to hear from you! Send
              your resume, cover letter, and a brief description of why you’d be
              a great fit. Please include the job title you’re applying for in
              the subject line.
            </p>
            <button className="main-button">
              <span>Submit Your Resume</span>
              <ButtonArrow />
            </button>
          </div>
          <Image
            className="fadeInUp"
            src={"/images/careers/apply.png"}
            width={475}
            height={270}
          />
        </div>
      </div>
    </section>
  );
};

export default CareersHow;
