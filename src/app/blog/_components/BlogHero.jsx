"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const BlogHero = () => {
  return (
    <section className="blog-hero">
      <div className="blog-hero__body">
        <div></div>
        <div>
          <div></div>
        </div>
        <div>
          <h1 className="fadeInUp">
            Quorixia Blog: Your <br />
            Guide to Career Success
          </h1>
          <p>
            We believe that knowledge is key to unlocking your <br />
            professional potential. Our blog is filled with expert <br />
            tips, industry insights, and actionable advice to help <br />
            you confidently navigate your career journey. Stay <br />
            informed, stay ahead, and take control of your <br />
            future with Quorixia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
