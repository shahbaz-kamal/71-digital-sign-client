import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Headline from "../../Shared/Headline";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import TestimonialSlide from "./TestimonialSlide";
import { useQuery } from "@tanstack/react-query";

const Testimonial = () => {
  const axiosPublic = UseAxiosPublic();

  // console.log(testimonials);
  const { data: testimonials = [] } = useQuery({
    queryKey: ["testimonial-data"],
    queryFn: async () => {
      const res = await axiosPublic.get("testimonials");
      return res.data;
    },
  });
  return (
    <div>
      <header>
        <Headline
          title={"Testimonial"}
          subTitle={"Customer Experiences That Speak Volumes"}
        ></Headline>
      </header>
      <section className="w-full">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          loop={false}
          className="mySwiper"
          breakpoints={{
            // Define breakpoints for responsive behavior
            640: {
              slidesPerView: 1, // Small screens (mobile)
            },
            768: {
              slidesPerView: 2, // Medium screens (tablets)
            },
            1024: {
              slidesPerView: 3, // Large screens (desktops)
            },
          }}
        >
          {/* Render slides dynamically */}
          {testimonials.length > 0
            ? testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <TestimonialSlide testimonialData={testimonial} />
                </SwiperSlide>
              ))
            : ""}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonial;
