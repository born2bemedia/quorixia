"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Link } from "@/navigation";
import Image from "next/image";
import ButtonArrow from "@/icons/ButtonArrow";

const BlogSlider = ({ posts }) => {
  return (
    <>
      <div className="slider-top">
        <h2>Featured Blog Topics</h2>
        <div className="arrows">
          <img
            src="/images/prev.svg"
            className="prev-post"
            alt="Previous"
            style={{ cursor: "pointer" }}
          />
          <img
            src="/images/next.svg"
            className="next-post"
            alt="Next"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 10000, disableOnInteraction: false }} // Autoplay settings
        loop={true}
        navigation={{
          prevEl: ".prev-post",
          nextEl: ".next-post",
        }}
        effect="slide" // Use 'slide' effect to avoid opacity 0
        className="slider"
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          // Configuration for mobile devices
          0: {
            slidesPerView: 1, // Show 1 slide for small screens (up to 767px)
            spaceBetween: 10, // Adjust space between slides on mobile
          },
          768: {
            slidesPerView: 3, // Show 2.5 slides from 768px and above
            spaceBetween: 30,
          },
        }}
      >
        {posts.length > 0 &&
          posts.map((post, index) => (
            <SwiperSlide key={post.id}>
              <Link
                href={`/blog/${post.attributes.slug}`}
                key={post.id}
                className="fadeInUp"
              >
                <div className="thumb">
                  <Image
                    //src={`/images/blog/${post.attributes.slug}.png`} // Fallback image if no URL
                    src={`${post.attributes.image.data.attributes.url}`} // Fallback image if no URL
                    alt={post.attributes.title}
                    fill
                  />
                </div>
                <div className="info">
                  <h4>{post.attributes.title}</h4>
                  <p>{post.attributes.excerpt}</p>
                  <span className="main-button">
                    <span>Read now</span>
                    <ButtonArrow />
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default BlogSlider;
