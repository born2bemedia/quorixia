import ButtonArrow from "@/icons/ButtonArrow";
import Link from "next/link";
import React from "react";

const AboutLast = () => {
  return (
    <section className="about-last">
      <div className="_container">
        <div className="about-last__body fadeInUp">
          <div className="left">
            <h2>Ready to Learn More About Why Quorixia?</h2>
            <p>
              Curious about what sets Quorixia apart from other HR firms?
              Explore our unique approach and discover how we create
              personalised solutions tailored to your needs.
            </p>
            <Link href="#" className="main-button">
              <span>Why Choose Quorixia?</span>
              <ButtonArrow />
            </Link>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutLast;
