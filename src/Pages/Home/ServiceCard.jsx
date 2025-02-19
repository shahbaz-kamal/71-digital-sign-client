import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, image, description, title } = service;
  return (
    <div
      // data-aos="fade-right"
      className="card bg-white  shadow-xl hover:scale-105 transition ease-in-out duration-300"
    >
      <figure className="px-6 pt-6 h-64 w-full">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl hover:scale-110 transition duration-300 ease-in-out w-full h-full object-cover"
        />
      </figure>
      <div className="px-6 pb-6 mt-4 flex flex-col h-full">
  <div className="flex-grow flex flex-col gap-2 items-center md:items-start">
    <h2 className="font-bold text-color-text text-lg md:text-xl">
      {title}
    </h2>
    <p className="text-color-text text-base md:text-lg">{description}</p>
  </div>
  <div className="card-actions mt-auto">
    <Link to={"/contact-us"}>
      <button className="btn btn-error bg-primary border border-primary text-white transition ease-in-out duration-300">
        Buy Service
      </button>
    </Link>
  </div>
</div>
    </div>
  );
};

export default ServiceCard;
