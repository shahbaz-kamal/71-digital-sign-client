import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../assets/logo-100.png";
import logo2 from "../assets/logo-200.png";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMobileNavItems, setShowMobileNavItems] = useState(false);

  const handleShowNav = () => {
    setShowMobileNavItems(true);
  };
  const handleHideNav = () => {
    setShowMobileNavItems(false);
  };

  const links = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "text-primary font-semibold text-xl md:text-lg"
            : "text-black text-xl md:text-lg"
        }
      >
        <li className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out">
          Home
          {/* Custom underline */}
          <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>
        </li>
      </NavLink>
      <NavLink
        to={"/portfolio"}
        className={({ isActive }) =>
          isActive
            ? "text-primary font-semibold text-xl md:text-lg"
            : "text-black text-xl md:text-lg"
        }
      >
        <li className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out">
          PortFolio {/* Custom underline */}
          <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>
        </li>
      </NavLink>
      <NavLink
        to={"/dashboard"}
        className={({ isActive }) =>
          isActive
            ? "text-primary font-semibold text-xl md:text-lg"
            : "text-black text-xl md:text-lg"
        }
      >
        <li className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out">
          Dashboard {/* Custom underline */}
          <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>
        </li>
      </NavLink>
      <NavLink
        to={"/contact-us"}
        className={({ isActive }) =>
          isActive
            ? "text-primary font-semibold text-xl md:text-lg"
            : "text-black text-xl md:text-lg"
        }
      >
        <li className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out">
          Contact Us {/* Custom underline */}
          <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>
        </li>
      </NavLink>
      <NavLink
        to={"/about-us"}
        className={({ isActive }) =>
          isActive
            ? "text-primary font-semibold text-xl md:text-lg"
            : "text-black text-xl md:text-lg"
        }
      >
        <li className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out">
          About Us {/* Custom underline */}
          <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>
        </li>
      </NavLink>
    </>
  );
  return (
    <div className="">
      {/* first div */}
      <div className="bg-primary  bg-opacity-15 py-2 fixed top-0 z-50 w-full">
        <nav className="flex w-11/12 md:w-10/12 mx-auto items-center justify-between">
          {/* logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 md:w-14 ">
              <img className="w-full h-full object-cover" src={logo2} alt="" />
            </div>
            <h3 className="font-bold text-3xl uppercase hidden md:inline-flex">
              71 Digital Sign
            </h3>
          </div>
          {/* navbar ends */}
          <div className="flex items-center ">
            {/* navitems */}
            <ul className="hidden lg:flex items-center  gap-4 mr-10">
              {links}
            </ul>
            {/* login button */}
            <button className=" text-base md:text-lg py-2 border border-primary rounded-xl px-5 hover:bg-primary hover:text-white transition duration-300 ease-in-out font-semibold ">
              Log In
            </button>
            <div className="text-black lg:hidden ml-4 flex">
              {showMobileNavItems ? (
                <span onClick={handleHideNav}>
                  <RxCross1 size={22} />
                </span>
              ) : (
                <span onClick={handleShowNav}>
                  <CiMenuFries size={22} />
                </span>
              )}
            </div>
          </div>
          {/* login button */}
          {/* Mobile Section menu section */}
        </nav>
      </div>
      {/* second div */}
      {showMobileNavItems ? (
        <nav id="mobile-navitems" className="w-full mx-auto lg:hidden fixed">
          <ul className=" flex flex-col items-center bg-primary bg-opacity-15  rounded-lg  z-10 mt-[87px]">
            {links}
          </ul>
        </nav>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
