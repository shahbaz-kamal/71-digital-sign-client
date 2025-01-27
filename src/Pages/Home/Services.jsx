import React, { useEffect, useState } from "react";
import Headline from "../../Shared/Headline";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import ServiceCard from "./ServiceCard";
import { useQuery } from "@tanstack/react-query";

const Services = () => {
  const axiosPublic = UseAxiosPublic();

  const { data: services = [] } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosPublic.get("services");
      return res.data;
    },
  });

  return (
    <div>
      <header>
        <Headline
          title={"Our Services"}
          subTitle={"Tailored Solutions for Your Needs"}
        ></Headline>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {services.map((service, index) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </section>
    </div>
  );
};

export default Services;
