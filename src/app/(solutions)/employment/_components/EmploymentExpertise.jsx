"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ButtonArrow from "@/icons/ButtonArrow";
import Link from "next/link";
import OrderButton from "@/global_components/OrderButton";

const EmploymentExpertise = () => {
  const [isMobile, setIsMobile] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    // Check if the window width is less than 992px
    const checkMobile = () => setIsMobile(window.innerWidth <= 992);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const expertiseData = [
    {
      title: "Resume & CV <br>Building",
      description:
        "Craft custom resumes that highlight your unique strengths and achievements.",
    },
    {
      title: "Interview <br>Preparation",
      description:
        "Gain confidence and practice techniques to excel in your interviews.",
    },
    {
      title: "Job Search <br>Strategy",
      description:
        "Navigate the job market with a tailored plan that fits your career goals.",
    },
    {
      title: "LinkedIn Profile <br>Optimization",
      description:
        "Enhance your digital presence with a standout LinkedIn profile to attract employers.",
    },
    {
      title: "Networking <br>Strategy",
      description:
        "Learn how to expand your professional network and leverage critical contacts.",
    },
    {
      title: "Cover Letter <br>Writing",
      description:
        "Create compelling cover letters that stand out to potential employers.",
    },
    {
      title: "Job Market Trends <br>& Insights",
      description:
        "Stay ahead of industry trends and market shifts to optimise your job search.",
    },
    {
      title: "Salary Negotiation <br>Coaching",
      description:
        "Learn how to negotiate your salary and benefits with confidence effectively.",
    },
    {
      title: "Career Transition <br>Support",
      description:
        "Smoothly transition to a new industry or job role with personalised advice.",
    },
    {
      title: "Personal Branding <br>Consultation",
      description:
        "Build a solid personal brand that sets you apart in the job market.",
    },
    {
      title: "Job Application <br>Assistance",
      description:
        "Get guidance on filling out job applications that grab the attention of recruiters.",
    },
    {
      title: "Professional Portfolio <br>Development",
      description:
        "Showcase your work and skills with a well-designed professional portfolio.",
    },
    {
      title: "Freelance & Contract <br>Job Strategies",
      description:
        "Tailored support for those seeking freelance or contract-based opportunities.",
    },
    {
      title: "Virtual Interview <br>Coaching",
      description:
        "Master the nuances of virtual interviews with targeted coaching.",
    },
    {
      title: "Workplace Culture <br>Fit Analysis",
      description:
        "Find a work environment that aligns with your values and personality.",
    },
    {
      title: "Internship & Apprenticeship <br>Search",
      description:
        "Specialised assistance for finding internships and apprenticeships.",
    },
    {
      title: "Second Career <br>Planning",
      description:
        "Tailored strategies for professionals seeking a complete career shift.",
    },
    {
      title: "Interview Follow-Up <br>Strategy",
      description:
        "Learn how to follow up after interviews to increase your chances of success.",
    },
    {
      title: "Freelancer Profile <br>Optimization",
      description:
        "Boost your profile on freelance platforms to attract better clients and projects.",
    },
    {
      title: "Employment Law <br>Advice",
      description:
        "Understand your rights and obligations as you navigate your job search.",
    },
    {
      title: "Job Offer <br>Evaluation",
      description:
        "Get expert advice on evaluating and accepting the best job offers for your career growth.",
    },
  ];

  // Function to split the data into chunks of 3 items each
  const chunkArray = (array, chunkSize) => {
    const results = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      results.push(array.slice(i, i + chunkSize));
    }
    return results;
  };

  const chunkedData = chunkArray(expertiseData, 3);

  return (
    <section className="employment-expertise">
      <div className="_container">
        <div className="employment-expertise__top">
          <h2 className="fadeInUp">
            Explore the Full List <br />
            of Offerings
          </h2>
          <p className="fadeInUp">
            Unlock a world of opportunities with Quorixia’s employment services.
            From refining your resume to crafting a winning interview strategy,
            our solutions are designed to help you stand out in the competitive
            job market. Let us guide you through every step of your job search,
            providing the tools, insights, and support needed to achieve your
            career goals confidently.
          </p>
        </div>
        {isMobile ? (
          <>
            <Swiper
              ref={swiperRef} // Attach ref to Swiper component
              spaceBetween={20}
              slidesPerView={1}
              className="employment-expertise__swiper"
            >
              {chunkedData.map((chunk, index) => (
                <SwiperSlide key={index}>
                  <div className="employment-expertise__slide">
                    {chunk.map((item, subIndex) => (
                      <div
                        className="employment-expertise__item fadeInUp"
                        key={subIndex}
                      >
                        <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                        <p>{item.description}</p>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="arrows">
              <img
                src="/images/prev.svg"
                className="prev"
                alt="Previous"
                style={{ cursor: "pointer" }}
                onClick={handlePrev}
              />
              <img
                src="/images/next.svg"
                className="next"
                alt="Next"
                style={{ cursor: "pointer" }}
                onClick={handleNext}
              />
            </div>
          </>
        ) : (
          <div className="employment-expertise__body">
            {expertiseData.map((item, index) => (
              <div className="employment-expertise__item fadeInUp" key={index}>
                <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        )}
        <div className="buttons-wrap">
          <OrderButton
            packageItem={"Order Employment"}
            text={"Order Employment Service Now"}
          />
        </div>
      </div>
    </section>
  );
};

export default EmploymentExpertise;
