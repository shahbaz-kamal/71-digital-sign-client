import React from "react";
import Banner from "./Banner";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Process from "./Process";
import { FaQ } from "react-icons/fa6";
import FAQ from "./FAQ";
import { Helmet } from "react-helmet";
import FeaturedWork from "./FeaturedWork";
import WhyChoseUs from "./WhyChoseUs";
import NewsLetter from "./NewsLetter";

const Home = () => {
  return (
    <div className="space-y-7 md:space-y-10 w-full">
         <Helmet>
              <title>Home || 71 Digital SIgn</title>
            </Helmet>
      <section className="w-full">
        <Banner></Banner>
      </section>
      <section>
        <Services></Services>
      </section>
      <section>
        <FeaturedWork></FeaturedWork>
      </section>
      <section>
        <Testimonial></Testimonial>
      </section>
      <section>
        <Process></Process>
      </section>
      <section><WhyChoseUs></WhyChoseUs></section>
      <section>
        <FAQ></FAQ>
      </section>
      <section><NewsLetter></NewsLetter></section>
    </div>
  );
};

export default Home;
