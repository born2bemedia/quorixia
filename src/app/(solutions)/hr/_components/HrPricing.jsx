import ButtonArrow from "@/icons/ButtonArrow";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HrPricing = () => {
  return (
    <section className="hr-pricing">
      <div className="_container">
        <div className="hr-pricing__body">
          <div className="fadeInUp">
            <h2>Transparent Pricing, Tailored Packages</h2>
            <p>
              We offer clear and flexible pricing to meet your specific needs.
              Whether you’re looking for one-time consultations or ongoing HR
              support, our service packages are designed to fit your career
              goals and budget. Explore our detailed pricing options to find the
              right package for you.
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
            src={"/images/hr/pricing.png"}
            width={475}
            height={270}
          />
        </div>
      </div>
    </section>
  );
};

export default HrPricing;
