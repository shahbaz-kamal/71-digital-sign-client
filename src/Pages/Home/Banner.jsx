import React from "react";
import banner1 from "../../assets/printing-invoices.gif";
import banner2 from "../../assets/printing-invoices-amico.png";
import banner3 from "../../assets/photocopy.gif";
import banner4 from "../../assets/designer-girl-cuate.png";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:items-center justify-between">
      {/* text  */}
      <div className="w-1/2 flex flex-col gap-5">
        <p class="text-secondary font-medium text-lg">
          100% Satisfaction Guaranteed
        </p>
        <h1 class="text-2xl md:text-5xl font-bold font-play">
          Welcome to <span className="text-primary">71 Digital Sign</span>
        </h1>
        <p class="text-color-text text-lg max-w-[80%]">
          We provide high-quality design and printing services for your banners,
          crests, visiting cards, and more. Let's bring your ideas to life!
        </p>
        <div>
          <button className=" text-base md:text-lg py-2 border border-primary rounded-xl px-5 hover:bg-primary hover:text-white transition duration-300 ease-in-out font-semibold ">
            Get Started
          </button>
        </div>
      </div>
      {/* hero image */}
      <div className="grid grid-cols-2 w-1/2 gap-6">
        <div className="w-64">
          <img className="w-full " src={banner1} alt="" />
        </div>
        <div className="w-64">
          <img className="w-full " src={banner2} alt="" />
        </div>
        <div className="w-64">
          <img className="w-full " src={banner3} alt="" />
        </div>
        <div className="w-64">
          <img className="w-full " src={banner4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
