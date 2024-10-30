import ButtonArrow from "@/icons/ButtonArrow";
import { Link } from "@/navigation";
import React from "react";

const WhyLast = () => {
  return (
    <section className="why-last">
      <div className="_container">
        <div className="why-last__body fadeInUp">
          <div className="left">
            <h2>Curious to Know What Drives Us?</h2>
            <p>
              Explore the values, passion, and dedication behind Quorixia. Learn
              more about how we’re shaping careers and guiding individuals to
              success with every step.
            </p>
            <Link href="/about-us" className="main-button">
              <span>Discover Our Approach</span>
              <ButtonArrow />
            </Link>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyLast;
