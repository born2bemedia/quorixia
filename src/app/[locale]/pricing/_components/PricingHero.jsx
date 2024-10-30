"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const PricingHero = () => {
  return (
    <section className="pricing-hero">
      <div className="pricing-hero__body">
        <h2 className="fadeInUp">Quorixia Pricing</h2>
        <h1 className="fadeInUp">
          Transparent & Flexible <br />
          Options for Your Career Needs
        </h1>
        <p>
          The Quorixia crew provides clear, fixed pricing for our HR and
          employment services, ensuring <br />
          you know exactly what you’re getting. Whether you need standalone
          services or want to invest <br />
          in a comprehensive career support package, our options are designed to
          fit various needs and <br />
          budgets. Explore our fixed-price services below, or opt for one of our
          carefully curated <br />
          packages that combine multiple offerings to give you the best value.
        </p>
      </div>
    </section>
  );
};

export default PricingHero;
