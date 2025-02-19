import React from "react";
import Headline from "../../Shared/Headline";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Featured.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const FeaturedWork = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <>
      {" "}
      <div>
        <header>
          <Headline
            title={"Featured Works"}
            subTitle={"Our Signature Projects"}
          ></Headline>
        </header>
        <section>
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper h-[60vh]"
          >
            <SwiperSlide>
              <div className="relative w-full h-[60vh] rounded-md">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src="https://i.ibb.co.com/6Jy1BXw/visiting-card.jpg"
                  alt=""
                />
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-2">
                  <h2 className="text-white text-2xl font-bold bg-color-text px-2 bg-opacity-50">
                    Customized Card design
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="relative w-full h-[60vh] rounded-md">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src="https://i.ibb.co.com/bgbcjhdX/annie-spratt-88-HN85-BJbq4-unsplash.jpg"
                  alt=""
                />
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-2">
                  <h2 className="text-white text-2xl font-bold bg-color-text px-2 bg-opacity-50">
                    Customized Mug design
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="relative w-full h-[60vh] rounded-md">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src="https://i.ibb.co.com/52G9h7k/leaflet.jpg"
                  alt=""
                />
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-2">
                  <h2 className="text-white text-2xl font-bold bg-color-text px-2 bg-opacity-50">
                    Customized Leaflet design
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <section className="flex items-center justify-center mt-4">
          <Link to={"/portfolio"}>
            <button className="btn btn-error bg-primary text-color-text">
              View All Work
            </button>
          </Link>
        </section>
      </div>
    </>
  );
};

export default FeaturedWork;
