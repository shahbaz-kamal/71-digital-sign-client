import React from "react";
import ReactStars from "react-rating-stars-component";

const TestimonialSlide = ({ testimonialData }) => {
  const { ratings, image, testimonial, designation, name } = testimonialData;

  return (
    <div className="p-4 bg-muted-green rounded-lg bg-opacity-25">
      <p data-aos="fade-left" className="mb-4">
        ❝{testimonial}❞
      </p>
      <div data-aos="fade-right" className="flex gap-3 ">
        <div className="w-20 h-20 rounded-lg">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={image}
            alt=""
          />
        </div>
        <div>
          <p className="font-bold text-base md:text-lg">{name}</p>
          <p className="text-sm md:text-base">{designation}</p>
          <ReactStars
            isHalf={true}
            value={ratings}
            count={5}
            size={24}
            edit={false}
            activeColor="#ffd700"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide;
