import React, { useEffect, useState } from "react";
import Headline from "../../Shared/Headline";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const axiosPublic = UseAxiosPublic();

  useEffect(() => {
    const fetchServicesData = async () => {
      const res = await axiosPublic.get("services");
      setServices(res.data);
    };
    fetchServicesData();
  }, []);

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
