"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const GlossaryHero = () => {
  return (
    <section className="pricing-hero">
      <div className="pricing-hero__body">
        <h2 className="fadeInUp">The Quorixia HR & Employment Glossary:</h2>
        <h1 className="fadeInUp">Essential Terms to Know</h1>
        <p>
          Navigating the complexities of HR and employment can involve
          industry-specific <br />
          terminology that isn’t always easy to understand. If you are new to
          the job market or a <br />
          seasoned professional, our glossary provides clear definitions of key
          HR terms to keep you <br />
          informed and empowered. From A to Z, this guide will help you
          understand the language <br />
          that drives modern HR practices and employment processes.
        </p>
      </div>
    </section>
  );
};

export default GlossaryHero;
