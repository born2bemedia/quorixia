"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Swiper styles
import OrderButton from "@/global_components/OrderButton";
import { getProductsByCategory } from "@/utils/products_strapi";
import ReactMarkdown from "react-markdown";

const CareerSolution = () => {
  const swiperRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsByCategory("package");
        console.log("Fetched:", data);
        setProducts(data);
      } catch (error) {
        console.error(
          "Error fetching products:",
          error.response?.data || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Check if Swiper instance and navigation are available
    if (swiperRef.current && swiperRef.current.swiper && swiperRef.current.swiper.navigation) {
      swiperRef.current.swiper.navigation.update();
    }
  }, [products]);

  const handlePrev = () => {
    if (!swiperRef.current || !swiperRef.current.swiper) return;
    swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!swiperRef.current || !swiperRef.current.swiper) return;
    swiperRef.current.swiper.slideNext();
  };

  return (
    <section className="career-solution">
      <div className="_container">
        <div className="career-solution__body">
          <div className="top">
            <div>
              <h3>Tailored Career Solutions</h3>
              <h2>Choose the Perfect Package for Your Journey</h2>
              <p>
                At Quorixia, we understand that every career path is unique.
                That’s why we’ve created a range of carefully curated service
                packages designed to support you at every stage of your
                professional journey. If you’re just starting, looking to
                progress in your field, navigating a career transition, or
                preparing for leadership roles, our packages provide
                comprehensive, personalised support tailored to your specific
                goals. Explore our packages below and find the one that fits
                your career aspirations.
              </p>
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
        </div>
      </div>
      <div className="slider-wrap">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }} // Autoplay settings
          loop={true}
          navigation={{
            prevEl: ".prevbutton",
            nextEl: ".nextbutton",
          }}
          effect="slide" // Use 'slide' effect to avoid opacity 0
          className="slider"
          slidesPerView={2.5}
          spaceBetween={30}
          breakpoints={{
            // Configuration for mobile devices
            0: {
              slidesPerView: 1, // Show 1 slide for small screens (up to 767px)
              spaceBetween: 10, // Adjust space between slides on mobile
            },
            768: {
              slidesPerView: 2.5, // Show 2.5 slides from 768px and above
              spaceBetween: 30,
            },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            // Update navigation once Swiper instance is ready
            setTimeout(() => {
              if (swiper.navigation) {
                swiper.navigation.update();
              }
            }, 0);
          }}
        >
          {products.length > 0 &&
            products.map((product, index) => (
              <SwiperSlide key={product.id}>
                <div className="package">
                  <div className="label">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <div>
                    <h4>{product.attributes.title}</h4>
                    <h5>From €{product.attributes.price}</h5>
                    <OrderButton
                      text={"Buy"}
                      packageItem={product.attributes.title}
                    />
                  </div>
                  <div>
                    <p>{product.attributes.description}</p>
                  </div>
                  <div>
                    <ReactMarkdown>{product.attributes.includes}</ReactMarkdown>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CareerSolution;
