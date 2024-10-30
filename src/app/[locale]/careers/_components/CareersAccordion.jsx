"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const CareersAccordion = ({ jobs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      // If the clicked item is already active, close it
      setActiveIndex(null);
    } else {
      // Otherwise, open the clicked item
      setActiveIndex(index);
    }
  };

  return (
    <div className="careers-accordion">
      {jobs.map((item, index) => (
        <div
          className={`item ${activeIndex === index ? "active" : ""}`}
          key={index}
        >
          <div
            className="accordion-title"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.attributes.title}</span>
            <span className="line"></span>
            <img
              src="/images/accordion.svg"
              className={`icon ${activeIndex === index ? "open" : ""}`}
            />
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              <ReactMarkdown>{item.attributes.content}</ReactMarkdown>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CareersAccordion;
