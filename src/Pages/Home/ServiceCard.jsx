import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, image, description, title } = service;
  return (
    <div
      // data-aos="fade-right"
      className="card bg-muted-green bg-opacity-25 shadow-xl "
    >
      <figure className="px-6 pt-6 h-40 w-full">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl hover:scale-110 transition duration-300 ease-in-out w-full h-full object-cover"
        />
      </figure>
      <div className="px-6 pb-6 mt-4 flex flex-col gap-2 items-center md:items-start">
        <h2 className="font-bold text-color-text text-lg md:text-xl">
          {title}
        </h2>
        <p className="text-color-text text-base md:text-lg">{description}</p>
        <div className="card-actions">
          <Link to={"/contact-us"}>
            {" "}
            <button className="btn btn-primary bg-secondary border border-secondary hover:bg-muted-green hover:border-muted-green hover:text-color-text transition ease-in-out duration-300">
              Buy Service
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
