import React, { useEffect } from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Aos from "aos";

const MainLayOut = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing type
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <div>
      <section>
        <Navbar></Navbar>
      </section>
      <section className="w-11/12 md:w-10/12 mx-auto pt-28 ">
        <Outlet></Outlet>
      </section>
      <section><Footer></Footer></section>
    </div>
  );
};

export default MainLayOut;
