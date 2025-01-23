import React from "react";
import Banner from "./Banner";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="space-y-7 md:space-y-10">
      <section>
        <Banner></Banner>
      </section>
      <section>
        <Services></Services>
      </section>
      <section>
       <Testimonial></Testimonial>
      </section>
    </div>
  );
};

export default Home;
