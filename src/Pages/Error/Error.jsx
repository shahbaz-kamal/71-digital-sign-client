import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-muted-red bg-opacity-25 p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
        <h1 className="text-5xl text-red-600 mb-6">Oops!</h1>
        <p className="text-lg text-gray-700 mb-8">
          Something went wrong. Please try again later.
        </p>
        <Link
          to={"/"}
          className="inline-block px-6 py-3 bg-primary text-white text-lg rounded-full hover:bg-primary hover:bg-opacity-80 transition ease-in-out duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
