import React from "react";
import Headline from "../../Shared/Headline";

const WhyChoseUs = () => {
  return (
    <div className="bg-background py-12">
      <header>
        <Headline
          title={"Why Choose Us"}
          subTitle={"Discover Our Unique Value"}
        />
      </header>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <div className="bg-white rounded-md shadow-md p-6 flex flex-col items-center transition-transform transform hover:scale-105">
          <div className="h-20 w-20 flex items-center justify-center  text-white rounded-full mb-4">
            <img
              className="w-full h-full rounded-full object-cover"
              src="https://i.ibb.co.com/20JdD5ds/printing-process.jpg"
              alt=""
            />
          </div>
          <h3 className="text-color-text text-xl font-semibold mb-2">
            Quality Printing
          </h3>
          <p className="text-color-text text-center">
            We ensure top-notch quality in all our printing services, delivering
            stunning results every time.
          </p>
        </div>

        <div className="bg-white rounded-md shadow-md p-6 flex flex-col items-center transition-transform transform hover:scale-105">
          <div className="h-20 w-20 flex items-center justify-center bg-primary text-white rounded-full mb-4">
            <img
              className="w-full h-full rounded-full object-cover"
              src="https://i.ibb.co.com/6Sfj4Sr/dt.jpg"
              alt=""
            />
          </div>
          <h3 className="text-color-text text-xl font-semibold mb-2">
            Timely Delivery
          </h3>
          <p className="text-color-text text-center">
            We value your time, providing prompt service without compromising
            quality.
          </p>
        </div>

        <div className="bg-white rounded-md shadow-md p-6 flex flex-col items-center transition-transform transform hover:scale-105">
          <div className="h-20 w-20 flex items-center justify-center bg-primary text-white rounded-full mb-4">
            <img
              className="w-full h-full rounded-full object-cover"
              src="https://i.ibb.co.com/NdBGtG2L/pexels-thatguycraig000-1546912.jpg"
              alt=""
            />
          </div>
          <h3 className="text-color-text text-xl font-semibold mb-2">
            Customer-Centric Approach
          </h3>
          <p className="text-color-text text-center">
            Our clients are our top priority, and we strive to exceed their
            expectations at every turn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseUs;
