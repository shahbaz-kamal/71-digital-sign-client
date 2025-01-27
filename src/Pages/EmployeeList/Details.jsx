import React from "react";
import Headline from "../../Shared/Headline";
import { useParams } from "react-router-dom";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Chart from "./Chart";

const Details = () => {
  const { email: slugEmail } = useParams();
  console.log(slugEmail);
  //   getting salary data
  const axiosSecure = UseAxiosSecure();
  const { data: salaryData = [] } = useQuery({
    queryKey: ["employee-salary-graph"],
    queryFn: async () => {
      const res = await axiosSecure.get(`details/${slugEmail}`);
      return res.data;
    },
  });
  console.log(salaryData);

  // chart
  return (
    <div>
      <header>
        <Headline
          title={"Employee Salary Insights"}
          subTitle={
            "Visualize Monthly Salary Trends for Better Financial Insights"
          }
        ></Headline>
      </header>
      <section className="w-full">
        <Chart chartData={salaryData}></Chart>
      </section>
    </div>
  );
};

export default Details;
