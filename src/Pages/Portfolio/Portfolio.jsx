import React from "react";
import { Helmet } from "react-helmet-async";
import { useRouteError } from "react-router-dom";
import UseRole from "../../Hooks/UseRole";
import Headline from "../../Shared/Headline";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  const axiosPublic = UseAxiosPublic();
  const { data: portfolioData = [] } = useQuery({
    queryKey: ["portfolio"],
    queryFn: async () => {
      const res = await axiosPublic("portfolio");
      return res.data;
    },
  });
  console.log(portfolioData);
  return (
    <div>
      <Helmet>
        <title>Portfolio || 71 Digital SIgn</title>
      </Helmet>
      <header>
        <Headline
          title={"Our Work"}
          subTitle={"Our Crafted Visual Stories"}
        ></Headline>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.map((data) => (
          <PortfolioCard key={data._id} data={data}></PortfolioCard>
        ))}
      </section>
    </div>
  );
};

export default Portfolio;
