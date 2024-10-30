"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CasesHero = () => {
  return (
    <section className="cases-hero">
      <div className="cases-hero__body">
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <h1 className="fadeInUp">
            Real Success Stories: How <br />
            Quorixia Transforms Careers
          </h1>
          <p>
            At Quorixia, our approach goes beyond offering <br />
            advice — we provide tailored solutions that lead to <br />
            measurable outcomes. Below, detailed case studies <br />
            highlight how we’ve empowered individuals to <br />
            overcome challenges, navigate career transitions, and <br />
            reach new heights in their professional journeys. Each <br />
            story represents our commitment to personalised, <br />
            client-centred success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CasesHero;
