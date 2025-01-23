import React from "react";

const Headline = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col items-center gap-1 mb-4 md:mb-7">
      <div data-aos="fade-right" className="flex items-center gap-2">
        {/* Left Line */}
        <span className="h-[2px] w-8 bg-secondary md:w-16"></span>
        <h3 className="font-extrabold text-secondary text-xl md:text-3xl font-play uppercase">
          {title}
        </h3>
        {/* Right Line */}
        <span className="h-[2px] w-8 bg-secondary md:w-16"></span>
      </div>
      <p
        data-aos="fade-left"
        className="text-color-text text-lg md:text-xl font-play"
      >
        {subTitle}
      </p>
    </div>
  );
};

export default Headline;
