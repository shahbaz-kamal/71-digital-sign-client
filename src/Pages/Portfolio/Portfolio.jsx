import React from "react";
import { Helmet } from "react-helmet-async";
import { useRouteError } from "react-router-dom";
import UseRole from "../../Hooks/UseRole";

const Portfolio = () => {
  return (
    <div>
      <Helmet>
        <title>Portfolio || 71 Digital SIgn</title>
      </Helmet>
      I am Portfolio
    </div>
  );
};

export default Portfolio;
