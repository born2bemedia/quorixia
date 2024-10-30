import ButtonArrow from "@/icons/ButtonArrow";
import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";

const AboutPeople = () => {
  return (
    <section className="about-people">
      <div className="_container">
        <div className="about-people__body">
          <Image
            className="fadeInUp"
            src={"/images/about/people.png"}
            width={445}
            height={360}
          />
          <div className="fadeInUp">
            <h2>The People Behind Quorixia</h2>
            <p>
              Our strength lies in our people. We are passionate HR and
              employment professionals with extensive experience across diverse
              industries. From tech to finance, creative sectors to healthcare,
              our collective expertise spans many fields, allowing us to offer
              you comprehensive and insightful career solutions. <br />
              <br />
              What sets our team apart is our deep commitment to your growth. We
              don’t just provide you with advice — we invest in your long-term
              success. Our experts are skilled in identifying the opportunities,
              trends, and challenges unique to your industry, enabling us to
              craft strategies that are not only practical but transformative.{" "}
              <br />
              <br />
              Whether seeking guidance for a career shift, leadership coaching,
              or job market navigation, our team brings the knowledge,
              experience, and enthusiasm to help you thrive. We are more than
              advisors; we are your partners in growth, guiding you through
              every phase of your career with precision and care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPeople;
