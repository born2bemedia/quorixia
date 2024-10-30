"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const WhyHero = () => {
  {
    /*const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);*/
  }

  return (
    <section className="why-hero">
      <div className="why-hero__body">
        <h2 className="fadeInUp">Why Choose Quorixia?</h2>
        <h1 className="fadeInUp">
          A Fresh, Professional <br />
          Perspective on HR Solutions
        </h1>
        <p>
          At Quorixia, we do things differently. Though we are a young company,
          we bring a powerful combination <br />
          of fresh energy, innovative thinking, and deep experience from a team
          of seasoned professionals.
          <br />
          <br />
          What sets us apart is our ability to blend the agility of a new firm
          with the expertise of those who’ve spent <br />
          years mastering their craft. Our high-quality, personalised solutions
          are designed to make a meaningful <br />
          impact on your career journey.
          <br />
          <br />
          Whether navigating a complex transition, seeking career advancement,
          or seeking guidance in a new <br />
          field, Quorixia offers a tailored approach, ensuring your unique goals
          are always the priority. We provide <br />
          more than just advice — we craft the blueprint for your success.
        </p>
      </div>
      <div className="why-hero__bottom">
        <div className="left">
          <h2>
            What Makes <br />
            Us Unique
          </h2>
        </div>
        <div className="right">
          <p>
            We understand that every career journey is personal and unique. We
            are committed to offering fully customised HR and employment
            solutions, listening carefully to your needs, assessing your goals,
            and developing a tailored plan that aligns perfectly with your
            aspirations.
            <br />
            <br />
            Our crew specialises in creating bespoke strategies for
            professionals at all stages, whether they’re just starting out,
            shifting industries, or preparing for senior leadership roles. Our
            team draws on years of expertise across various industries, giving
            us the knowledge to provide the proper guidance in any scenario. We
            aren’t just consultants—we’re dedicated partners, helping you
            navigate the twists and turns of your career with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyHero;
