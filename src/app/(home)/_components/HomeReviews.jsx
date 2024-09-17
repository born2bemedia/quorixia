"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Swiper styles
import ButtonArrow from "@/icons/ButtonArrow";
import React from "react";
import Link from "next/link";

const HomeReviews = () => {
  return (
    <section className="home-reviews">
      <div className="_container">
        <div className="home-reviews__body">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
            loop={true}
            effect="slide" // Use 'slide' effect to avoid opacity 0
            className="slider"
          >
            <SwiperSlide>
              <div className="slide">
                <div className="left fadeInUp">
                  <h3>Sarah K.</h3>
                  <h4>Marketing Executive</h4>
                  <div className="buttons">
                    <img src="/images/home/prev.svg" className="prev-button" />
                    <img src="/images/home/next.svg" className="next-button" />
                  </div>
                </div>
                <div className="right fadeInUp">
                  <img src="/images/home/quote.svg" />
                  <p>
                    “Quorixia gave me the tools and confidence I needed to take
                    the next step in my career. Their team was with me every
                    step of the way.”
                  </p>
                  <Link href="#" className="main-button">
                    <span>Read More Success Stories</span>
                    <ButtonArrow />
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide">
                <div className="left fadeInUp">
                  <h3>John D.</h3>
                  <h4>IT Specialist</h4>
                  <div className="buttons">
                    <img src="/images/home/prev.svg" className="prev-button" />
                    <img src="/images/home/next.svg" className="next-button" />
                  </div>
                </div>
                <div className="right fadeInUp">
                  <img src="/images/home/quote.svg" />
                  <p>
                    “I never knew HR could be so personalised and effective.
                    Quorixia changed the way I approach my career.”
                  </p>
                  <Link href="#" className="main-button">
                    <span>Read More Success Stories</span>
                    <ButtonArrow />
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide">
                <div className="left fadeInUp">
                  <h3>Emma R.</h3>
                  <h4>Project Manager</h4>
                  <div className="buttons">
                    <img src="/images/home/prev.svg" className="prev-button" />
                    <img src="/images/home/next.svg" className="next-button" />
                  </div>
                </div>
                <div className="right fadeInUp">
                  <img src="/images/home/quote.svg" />
                  <p>
                    “With Quorixia’s help, I secured a new role within weeks.
                    Their approach is truly groundbreaking.”
                  </p>
                  <Link href="#" className="main-button">
                    <span>Read More Success Stories</span>
                    <ButtonArrow />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomeReviews;
