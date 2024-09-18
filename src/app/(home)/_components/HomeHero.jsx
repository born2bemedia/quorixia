"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const HomeHero = () => {
  {/*const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);*/}

  return (
    <section className="home-hero">
      <div className="home-hero__body">
        <h2 className="fadeInUp">Redefine Your Career</h2>
        <h1 className="fadeInUp">
          Shape <br />
          What’s Next
        </h1>
        <p>
          At Quorixia, your career is more than a job — it’s your personal
          journey. We offer bespoke HR and employment <br />
          solutions, expertly crafted to guide you every step of the way.
          Whether making bold career moves or seeking <br />
          steady progression, we are here to help you unlock your full potential
          with personalised, human-centred support.
        </p>
      </div>
    </section>
  );
};

export default HomeHero;
