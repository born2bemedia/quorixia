import Image from "next/image";
import React from "react";

const WhyFocused = () => {
  return (
    <section className="why-focused">
      <div className="_container">
        <div className="why-focused__body">
          <h2 className="fadeInUp">Focused on Outcomes that Matter</h2>
          <div className="row">
            <p className="fadeInUp">
              The Quorixia crew measures our success not by the number of
              clients we serve but by the tangible results we deliver. We are
              focused on making a real impact on your professional journey. Our
              approach is designed to provide meaningful outcomes — from
              securing better opportunities to developing lasting skills that
              empower you in the long run.
            </p>
            <p className="fadeInUp">
              We don’t believe in temporary fixes or superficial progress. Every
              strategy we craft is designed for long-term success, tailored to
              help you meet your immediate goals and thrive in the future.
              Whether seeking career advancement, transitioning industries, or
              enhancing your leadership skills, we ensure that our solutions
              create measurable growth that aligns with your professional
              aspirations.
            </p>
          </div>
          <Image src={"/images/why/focused.png"} width={1110} height={350} />
        </div>
      </div>
    </section>
  );
};

export default WhyFocused;
