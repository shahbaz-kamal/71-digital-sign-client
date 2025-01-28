import React from "react";
import { Helmet } from "react-helmet";
import aboutUs from "../../assets/aboutUs.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Headline from "../../Shared/Headline";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About Us || 71 Digital SIgn</title>
      </Helmet>
      <header>
        <Headline title={"ABout US"} subTitle={"Who We Are"}></Headline>
      </header>
      <section className="bg-muted-green bg-opacity-15 rounded-lg py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left: Image */}
            <div data-aos="fade-right" className="md:w-[40%]">
              <Lottie animationData={aboutUs}></Lottie>
            </div>
            {/* Right: Content */}
            <div data-aos="fade-left" className="md:w-1/2 md:pl-10 mt-6 md:mt-0 flex flex-col items-center md:items-start">
              <p className="text-gray-600 mb-4">
                Welcome to our website! We specialize in providing top-notch
                services tailored to your needs. With a dedicated team of
                professionals, we strive to exceed your expectations in every
                way.
              </p>
              <p className="text-gray-600 mb-4">
                Our mission is to deliver innovative and reliable solutions that
                make a difference. Whether it's our cutting-edge products or
                exceptional customer service, we’re here to support you every
                step of the way.
              </p>
              <Link to={"/contact-us"}>
                <button className=" text-white py-2 px-6 rounded-lg shadow-md  bg-secondary border border-secondary hover:bg-muted-green hover:border-muted-green hover:text-color-text transition ease-in-out duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
