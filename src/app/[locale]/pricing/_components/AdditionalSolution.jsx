import ButtonArrow from "@/icons/ButtonArrow";
import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";

const AdditionalSolution = () => {
  return (
    <section className="additional-solution">
      <div className="_container">
        <div className="additional-solution__body">
          <div className="fadeInUp">
            <h2>Discover Additional Solutions</h2>
            <p>
              The fixed-price services listed above are just a glimpse of what
              Quorixia can provide. We offer a full suite of HR and employment
              solutions designed to be flexible and personalised to your career
              path. We have many services to meet your unique needs, from
              advanced coaching to tailored job search strategies.
              <br />
              <br />
              Download our comprehensive price list for a detailed look at all
              the options and pricing we offer. We’re dedicated to supporting
              your career growth, no matter where you are on your journey.
            </p>
            <div className="buttons-wrap">
              <Link
                href="/Quorixia_Pricing.pdf"
                className="main-button"
                target="_blank"
              >
                <span>Download Complete Price List</span>
                <ButtonArrow />
              </Link>
            </div>
          </div>
          <Image
            className="fadeInUp"
            src={"/images/pricing/additional.png"}
            width={475}
            height={270}
          />
        </div>
      </div>
    </section>
  );
};

export default AdditionalSolution;
