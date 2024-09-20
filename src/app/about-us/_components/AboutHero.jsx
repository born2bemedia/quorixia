"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AboutHero = () => {
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
    <section className="about-hero">
      <div className="about-hero__body">
        <h2 className="fadeInUp">Who We Are</h2>
        <h1 className="fadeInUp">Quorixia’s Dedication to Your Growth</h1>
        <p>
          The Quorixia team views every career as a dynamic, evolving journey
          full of potential and <br />
          opportunity. We’re here to help you navigate the complexities of your
          professional path with <br />
          confidence and clarity. As a team of dedicated HR and employment
          experts, we aim to <br />
          provide personalised guidance and tailored solutions that align with
          your unique goals.
        </p>
      </div>
      <div className="after">
        <p>
          We approach every client relationship with fresh eyes and an open
          mind. By deeply understanding your specific needs, ambitions, and
          challenges, we can craft bespoke strategies that help you achieve your
          current objectives and lay the foundation for future success.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
