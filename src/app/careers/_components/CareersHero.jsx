"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CareersHero = () => {
  return (
    <section className="careers-hero">
      <div className="careers-hero__body">
        <h2 className="fadeInUp">Join Our Team</h2>
        <h1 className="fadeInUp">Shape the Future with Quorixia</h1>
        <p>
          Great talent is the key to driving meaningful change. As a growing
          company transforming <br />
          how HR and employment services are delivered, we always look for
          passionate, innovative <br />
          individuals ready to make an impact. Join us in creating personalised
          solutions that help <br />
          professionals reach their full potential. Explore our current openings
          and become part of a <br />
          team dedicated to excellence, growth, and collaboration.
        </p>
      </div>
    </section>
  );
};

export default CareersHero;
