import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const PortfolioCard = ({ data }) => {
  const { title, description, image, date, client } = data;
  return (
    <div className="card bg-muted-green bg-opacity-25 shadow-xl">
      <figure className="px-10 pt-10 w-full h-[300px]">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl w-full h-full object-cover"
        />
      </figure>
      <div className="card-body items-center md:items-start ">
        <h2 className="font-bold text-lg md:text-xl text-color-text">
          {title}
        </h2>
        <p className="text-color-text opacity-80 font-medium">{description}</p>
        <p className="text-color-text">
          <span className="font-bold "> Delivery On: </span>
          <span className="opacity-80">{format(new Date(date), "PP")}</span>
        </p>
        <p className="text-color-text">
          <span className="font-bold "> Client: </span>
          <span className="opacity-80">{client}</span>
        </p>
        <div className="card-actions">
          <Link to={"/contact-us"}>
            <button className="btn btn-primary bg-secondary border border-secondary hover:bg-muted-green hover:border-muted-green hover:text-color-text transition ease-in-out duration-300">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
