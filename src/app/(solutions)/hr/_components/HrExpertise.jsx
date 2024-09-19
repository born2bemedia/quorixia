"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ButtonArrow from "@/icons/ButtonArrow";
import Link from "next/link";
import OrderButton from "@/global_components/OrderButton";

const HrExpertise = () => {
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
      title: "Contract Negotiation <br>& Review",
      description:
        "Secure favourable terms in your employment agreements to protect your interests.",
    },
    {
      title: "Performance <br>Management",
      description:
        "Receive expert guidance to excel in your current role and achieve professional growth.",
    },
    {
      title: "Legal <br>HR Consultation",
      description:
        "Navigate complex employment laws and workplace rights with confidence.",
    },
    {
      title: "Workplace <br>Conflict Resolution",
      description:
        "Get professional advice on resolving disputes and creating a harmonious work environment.",
    },
    {
      title: "Leadership <br>Coaching",
      description:
        "Unlock your leadership potential with personalised coaching to advance in your career.",
    },
    {
      title: "Compensation <br>& Benefits Consultation",
      description:
        "Ensure you’re being compensated fairly and receiving the right benefits for your role.",
    },
    {
      title: "Exit Strategy & Career <br>Transition Support",
      description:
        "Receive guidance on smoothly transitioning out of a current role and into new opportunities.",
    },
    {
      title: "Work-Life Balance <br>Strategies",
      description:
        "Tailored strategies to help you maintain a healthy balance between work and personal life.",
    },
    {
      title: "Onboarding <br>Support",
      description:
        "Make the transition into new roles easier with customised onboarding advice.",
    },
    {
      title: "Talent Development <br>& Skills Assessment",
      description:
        "Identify your strengths and areas for growth with a tailored skills assessment.",
    },
    {
      title: "Diversity & Inclusion <br>Consultation",
      description: "Get advice on navigating diverse and inclusive workplaces.",
    },
    {
      title: "Remote Work <br>& Flexibility Planning",
      description:
        "Develop strategies to thrive in remote or flexible working environments.",
    },
    {
      title: "Career Path <br>Planning",
      description:
        "Map out a clear, strategic path for your career progression.",
    },
    {
      title: "HR Policy <br>Review",
      description:
        "Ensure your employment is aligned with fair and up-to-date HR policies.",
    },
    {
      title: "Personal <br>Development Plans",
      description:
        "Create a long-term plan for personal and professional development.",
    },
    {
      title: "Conflict <br>Mediation",
      description:
        "Receive expert mediation to help resolve internal workplace conflicts.",
    },
    {
      title: "Job Role Analysis <br>& Clarification",
      description:
        "Get clear on your role expectations and how to maximise your performance.",
    },
    {
      title: "Employee Rights <br>Advocacy",
      description:
        "Support in ensuring your employee rights are upheld in the workplace.",
    },
    {
      title: "Workplace Culture <br>& Adaptation",
      description:
        "Receive guidance on how to fit into and thrive within a company’s culture.",
    },
    {
      title: "Mentorship <br>Matching",
      description:
        "We help connect you with mentors in your industry for growth and development.",
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
    <section className="hr-expertise">
      <div className="_container">
        <div className="hr-expertise__top">
          <h2 className="fadeInUp">Discover Our HR Expertise</h2>
          <p className="fadeInUp">
            No two career paths are alike. Our range of HR solutions is designed
            to address your issues, whether navigating a career transition,
            enhancing your leadership skills, or seeking personalised HR advice.
            Focusing on customised strategies and one-on-one support, we offer
            services that empower you to take control of your professional
            future.
          </p>
        </div>
        {isMobile ? (
          <>
            <Swiper
              ref={swiperRef} // Attach ref to Swiper component
              spaceBetween={20}
              slidesPerView={1}
              className="hr-expertise__swiper"
            >
              {chunkedData.map((chunk, index) => (
                <SwiperSlide key={index}>
                  <div className="hr-expertise__slide">
                    {chunk.map((item, subIndex) => (
                      <div
                        className="hr-expertise__item fadeInUp"
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
          <div className="hr-expertise__body">
            {expertiseData.map((item, index) => (
              <div className="hr-expertise__item fadeInUp" key={index}>
                <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        )}
        <div className="buttons-wrap">
          <OrderButton
            packageItem={"HR Service"}
            text={"Order HR Service Now"}
          />
        </div>
      </div>
    </section>
  );
};

export default HrExpertise;
