"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Swiper styles
import ButtonArrow from "@/icons/ButtonArrow";
import React from "react";
import Link from "next/link";

const HomeReviews = ({ reviews }) => {
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
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="slide">
                  <div className="left fadeInUp">
                    <h3>{review.name}</h3>
                    <h4>{review.title}</h4>
                    <div className="buttons">
                      <img
                        src="/images/home/prev.svg"
                        className="prev-button"
                        alt="prev"
                      />
                      <img
                        src="/images/home/next.svg"
                        className="next-button"
                        alt="next"
                      />
                    </div>
                  </div>
                  <div className="right fadeInUp">
                    <img src="/images/home/quote.svg" alt="quote" />
                    <p>{review.quote}</p>
                    <Link href="/case-studies" className="main-button">
                      <span>Read More Success Stories</span>
                      <ButtonArrow />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomeReviews;
