import React from "react";
import banner1 from "../../assets/hero_image_1.png";
import banner2 from "../../assets/hero_image_2.png";
import banner3 from "../../assets/hero_image_3.png";
import banner4 from "../../assets/hero_image_4.png";
import heroImage from "../../assets/hero_collapsed_bg_removed.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      id="banner"
      className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[70vh] px-5 md:px-10 bg-neutral bg-opacity-80 rounded-lg py-4 md:py-8 w-full "
    >
      {/* text  */}
      <div className="w-full md:w-1/2 flex flex-col gap-5 items-center md:items-start">
        <p data-aos="fade-right" className="text-secondary font-medium text-lg md:text-xl ">
          100% Satisfaction Guaranteed
        </p>
        <h1
          data-aos="fade-right"
          className="text-2xl md:text-5xl font-bold font-play text-white"
        >
          Welcome to <span className="text-light-accent font-extrabold">71 Digital Sign</span>
        </h1>
        <p data-aos="fade-right" className="text-white text-lg max-w-[80%] text-center md:text-start">
          We provide high-quality design and printing services for your banners,
          crests, visiting cards, and more. Let's bring your ideas to life!
        </p>
        <div data-aos="fade-right">
          <button className=" text-base md:text-lg py-2 border border-primary rounded-xl px-5 hover:bg-primary text-white transition duration-300 ease-in-out font-semibold ">
            Get Started
          </button>
        </div>
      </div>
      {/* hero image */}
      <div
        data-aos="fade-left"
        className="grid grid-cols-1 w-full md:w-1/2 gap-6"
      >
        <div className="w-full max-w-[90%] md:max-w-md mx-auto object-contain">
          <img src={heroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
