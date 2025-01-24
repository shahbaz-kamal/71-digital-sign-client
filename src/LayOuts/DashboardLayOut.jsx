import React from "react";
import NavbarDashboard from "../Shared/NavbarDashboard";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

const DashboardLayOut = () => {
  return (
    <div>
      <section>
        <NavbarDashboard></NavbarDashboard>
      </section>
      <section className="w-11/12 md:w-10/12 mx-auto pt-28 space-y-7 md:space-y-10">
        <Outlet></Outlet>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default DashboardLayOut;
