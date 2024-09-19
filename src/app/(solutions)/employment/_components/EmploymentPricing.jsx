import ButtonArrow from "@/icons/ButtonArrow";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EmploymentPricing = () => {
  return (
    <section className="employment-pricing">
      <div className="_container">
        <div className="employment-pricing__body">
          <div className="fadeInUp">
            <h2>Transparent Pricing, Tailored Packages</h2>
            <p>
              We offer flexible pricing options tailored to your specific
              employment needs. Whether you are looking for a one-time service
              or a comprehensive employment package, Quorixia provides
              transparent pricing to fit every stage of your professional
              journey.
            </p>
            <div className="buttons-wrap">
              <Link href="#" className="main-button">
                <span>View Pricing & Packages</span>
                <ButtonArrow />
              </Link>
            </div>
          </div>
          <Image
            className="fadeInUp"
            src={"/images/employment/pricing.png"}
            width={475}
            height={270}
          />
        </div>
      </div>
    </section>
  );
};

export default EmploymentPricing;
