"use client";
import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Swiper styles

const EmploymentHowWork = () => {
  const swiperRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="employment-how">
      <div className="_container">
        <div className="employment-how__body">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }} // Autoplay settings
            loop={true}
            effect="slide" // Use 'slide' effect to avoid opacity 0
            className="slider"
          >
            <SwiperSlide>
              <div className="slide">
                <div className="top">
                  <div>
                    <h3>How We Work</h3>
                    <h2>Step 1: In-Depth Consultation</h2>
                  </div>
                  <div className="arrows">
                    <img
                      src="/images/prev.svg"
                      className="prevbutton"
                      alt="Previous"
                      style={{ cursor: "pointer" }}
                      onClick={handlePrev}
                    />
                    <img
                      src="/images/next.svg"
                      className="nextbutton"
                      alt="Next"
                      style={{ cursor: "pointer" }}
                      onClick={handleNext}
                    />
                  </div>
                </div>

                <p>
                  Our journey together begins with a comprehensive consultation,
                  virtually or in person. During this session, we dive deep into
                  your career history, current challenges, and long-term
                  aspirations. We ask insightful questions to understand your
                  strengths, preferences, and pain points. This step helps us
                  clearly understand who you are as a professional and where you
                  want to go.
                </p>
                <h4>What We Cover:</h4>
                <ul>
                  <li>Your past experiences and current job search.</li>
                  <li>Career transitions you’re considering.</li>
                  <li>Skills and strengths to highlight.</li>
                  <li>Potential barriers and how to overcome them.</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="top">
                  <div>
                    <h3>How We Work</h3>
                    <h2>Step 2: Tailored Strategy & Career Planning</h2>
                  </div>
                  <div className="arrows">
                    <img
                      src="/images/prev.svg"
                      className="prevbutton"
                      alt="Previous"
                      style={{ cursor: "pointer" }}
                      onClick={handlePrev}
                    />
                    <img
                      src="/images/next.svg"
                      className="nextbutton"
                      alt="Next"
                      style={{ cursor: "pointer" }}
                      onClick={handleNext}
                    />
                  </div>
                </div>
                <p>
                  With the insights from our consultation, we create a fully
                  customised employment strategy designed to meet your unique
                  needs. This plan outlines actionable steps for your job search
                  or career development, with detailed timelines and clear
                  objectives. Our approach also includes tips for personal
                  branding, market positioning, and presenting yourself as a
                  standout candidate.
                </p>

                <h4>What You’ll Receive:</h4>
                <ul>
                  <li>Personalised career action plan.</li>
                  <li>
                    Resume/CV building strategy and interview preparation.
                  </li>
                  <li>
                    Guidance on networking and leveraging your professional
                    connections.
                  </li>
                  <li>
                    Industry insights and trends that align with your career
                    goals.
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="top">
                  <div>
                    <h3>How We Work</h3>
                    <h2>Step 3: Implementation & Hands-On Support</h2>
                  </div>
                  <div className="arrows">
                    <img
                      src="/images/prev.svg"
                      className="prevbutton"
                      alt="Previous"
                      style={{ cursor: "pointer" }}
                      onClick={handlePrev}
                    />
                    <img
                      src="/images/next.svg"
                      className="nextbutton"
                      alt="Next"
                      style={{ cursor: "pointer" }}
                      onClick={handleNext}
                    />
                  </div>
                </div>
                <p>
                  Once the plan is set, we move into action. Our team provides
                  direct, hands-on support to help you implement your strategy.
                  From perfecting your resume to practising mock interviews,
                  we’re here to equip you with the necessary tools, knowledge,
                  and confidence. We’ll also provide ongoing feedback, ensuring
                  your job search is on track.
                </p>

                <h4>Services During This Stage:</h4>
                <ul>
                  <li>Resume/CV and cover letter writing.</li>
                  <li>
                    LinkedIn profile optimization and digital presence
                    enhancement.
                  </li>
                  <li>
                    Mock interviews and role-playing to sharpen your skills.
                  </li>
                  <li>Networking strategy support, both online and offline.</li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="top">
                  <div>
                    <h3>How We Work</h3>
                    <h2>Step 4: Continuous Guidance & Long-Term Support</h2>
                  </div>
                  <div className="arrows">
                    <img
                      src="/images/prev.svg"
                      className="prevbutton"
                      alt="Previous"
                      style={{ cursor: "pointer" }}
                      onClick={handlePrev}
                    />
                    <img
                      src="/images/next.svg"
                      className="nextbutton"
                      alt="Next"
                      style={{ cursor: "pointer" }}
                      onClick={handleNext}
                    />
                  </div>
                </div>
                <p>
                  Your partnership doesn’t end once you land a job or complete a
                  specific phase. We believe in continuous, long-term support.
                  As your career progresses, we stay connected, offering advice
                  on negotiating job offers, adjusting to new roles, or making
                  further career moves. We’re your partners for ongoing success
                  and adapt our strategies as your goals evolve.
                </p>

                <h4>Long-Term Support Includes:</h4>
                <ul>
                  <li>Job offer evaluation and negotiation advice.</li>
                  <li>
                    Performance review preparation and career growth strategies.
                  </li>
                  <li>
                    Continuous industry insights to help you stay competitive.
                  </li>
                  <li>
                    Ongoing consultations for future career transitions or
                    advancements.
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default EmploymentHowWork;
