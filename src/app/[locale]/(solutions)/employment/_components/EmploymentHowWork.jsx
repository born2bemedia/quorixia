"use client";
import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Swiper styles
import { useTranslations } from "next-intl";

const EmploymentHowWork = () => {
  const t = useTranslations("employment");
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
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: t("EmploymentHowWork.title"),
                      }}
                    />
                    <h2
                      dangerouslySetInnerHTML={{
                        __html: t("EmploymentHowWork.step1.title"),
                      }}
                    />
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

                {t.rich("EmploymentHowWork.step1.content", {
                  p: (children) => <p>{children}</p>,
                  h4: (children) => <h4>{children}</h4>,
                  ul: (children) => <ul>{children}</ul>,
                  li: (children) => <li>{children}</li>,
                })}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="top">
                  <div>
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: t("EmploymentHowWork.title"),
                      }}
                    />
                    <h2
                      dangerouslySetInnerHTML={{
                        __html: t("EmploymentHowWork.step2.title"),
                      }}
                    />
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
                {t.rich("EmploymentHowWork.step2.content", {
                  p: (children) => <p>{children}</p>,
                  h4: (children) => <h4>{children}</h4>,
                  ul: (children) => <ul>{children}</ul>,
                  li: (children) => <li>{children}</li>,
                })}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="top">
                  <div>
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: t("EmploymentHowWork.title"),
                      }}
                    />
                    <h2
                      dangerouslySetInnerHTML={{
                        __html: t("EmploymentHowWork.step3.title"),
                      }}
                    />
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
                {t.rich("EmploymentHowWork.step3.content", {
                  p: (children) => <p>{children}</p>,
                  h4: (children) => <h4>{children}</h4>,
                  ul: (children) => <ul>{children}</ul>,
                  li: (children) => <li>{children}</li>,
                })}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="top">
                  <div>
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: t("EmploymentHowWork.title"),
                      }}
                    />
                    <h2
                      dangerouslySetInnerHTML={{
                        __html: t("EmploymentHowWork.step4.title"),
                      }}
                    />
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
                {t.rich("EmploymentHowWork.step4.content", {
                  p: (children) => <p>{children}</p>,
                  h4: (children) => <h4>{children}</h4>,
                  ul: (children) => <ul>{children}</ul>,
                  li: (children) => <li>{children}</li>,
                })}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default EmploymentHowWork;
