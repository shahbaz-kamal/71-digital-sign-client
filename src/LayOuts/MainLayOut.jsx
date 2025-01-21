import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

const MainLayOut = () => {
  return (
    <div>
      <section>
        <Navbar></Navbar>
      </section>
      <section className="w-11/12 md:w-10/12 mx-auto pt-28">
        <Outlet></Outlet>
      </section>
      <section><Footer></Footer></section>
    </div>
  );
};

export default MainLayOut;
