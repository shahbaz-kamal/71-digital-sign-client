import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo1 from "../assets/logo-100.png";
import logo2 from "../assets/logo-200.png";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import UseAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

const Navbar = () => {
  const axiosSecure = UseAxiosSecure();
  // const [userData, setUserData] = useState({});
  const { user, logOutUser, userData, setUserData, setLoading } = UseAuth();
  const [showMobileNavItems, setShowMobileNavItems] = useState(false);
  const navigate = useNavigate();
  const [shhowLogOutBtn, setShowLogOutBtn] = useState(false);

  const handleLogOut = async () => {
    logOutUser().then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Log Out Successfull",
        showConfirmButton: false,
        timer: 1500,
      });
      setLoading(false);
      navigate("/");
    });
  };
  const handleShowNav = () => {
    setShowMobileNavItems(true);
  };
  const handleHideNav = () => {
    setShowMobileNavItems(false);
  };

  // for navbar
  const fetchUserData = async (email) => {
    const res = await axiosSecure.get(`/user/${email}`);
    setUserData(res.data);
  };

  if (user && user?.email) {
    useEffect(() => {
      fetchUserData(user?.email);
    }, [user]);
  }

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
        <li
          onClick={handleHideNav}
          className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out"
        >
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
        <li
          onClick={handleHideNav}
          className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out"
        >
          PortFolio {/* Custom underline */}
          <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>
        </li>
      </NavLink>
      {user && user?.email && (
        <NavLink
          to={"/dashboard/profile"}
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold text-xl md:text-lg"
              : "text-black text-xl md:text-lg"
          }
        >
          <li
            onClick={handleHideNav}
            className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out"
          >
            Dashboard {/* Custom underline */}
            <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>
          </li>
        </NavLink>
      )}
      <NavLink
        to={"/contact-us"}
        className={({ isActive }) =>
          isActive
            ? "text-primary font-semibold text-xl md:text-lg"
            : "text-black text-xl md:text-lg"
        }
      >
        <li
          onClick={handleHideNav}
          className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out"
        >
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
        <li
          onClick={handleHideNav}
          className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out"
        >
          About Us {/* Custom underline */}
          <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>
        </li>
      </NavLink>
    </>
  );
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      {/* first div */}
      <div className=" ">
        <nav className="flex  items-center justify-between px-2 md:px-0">
          {/* logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 md:w-14 ">
              <img className="w-full h-full object-cover" src={logo2} alt="" />
            </div>
            <h3 className="font-bold text-white text-3xl uppercase hidden md:inline-flex">
              71 Digital Sign
            </h3>
          </div>
          {/* navbar ends */}
          <div className="flex items-center">
            {/* navitems */}
            <ul className="hidden lg:flex items-center  gap-4 mr-10">
              {links}
            </ul>

            {!(user && user?.email) ? (
              <Link to={"/login"}>
                <button className=" text-base md:text-lg py-2 border border-primary rounded-xl px-5 hover:bg-primary hover:text-white transition duration-300 ease-in-out font-semibold ">
                  Log In
                </button>
              </Link>
            ) : (
              ""
            )}

            {/* user photo */}
            {user && user?.email ? (
              <div
                onClick={() => setShowLogOutBtn(!shhowLogOutBtn)}
                // data-tooltip-id="my-tooltip"
                // data-tooltip-content={`${userData.name}`}
                className="flex flex-col items-center w-12 h-12 ml-2 z-100"
              >
                {/* Profile Image */}
                <div className="w-12 h-12 mb-2">
                  <img
                    // referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                    src={userData.profilePhoto}
                    // alt="User Profile"
                  />
                </div>
              </div>
            ) : (
              ""
            )}
            {shhowLogOutBtn && (
              <button
                onClick={handleLogOut}
                className=" text-base md:text-lg py-2 border border-primary rounded-xl px-5 hover:bg-primary hover:text-white transition duration-300 ease-in-out font-semibold ml-2"
              >
                Log Out
              </button>
            )}
            <div className="text-black lg:hidden ml-4 flex z-50">
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
          {/* second div */}
          {showMobileNavItems ? (
            <nav
              id="mobile-navitems"
              className=" w-[87%] mt-[163px] lg:hidden fixed z-40  "
            >
              <ul className="p-6 flex flex-col items-center bg-secondary  backdrop-blur-sm rounded-lg  z-100 mt-[75px]">
                {links}
              </ul>
            </nav>
          ) : (
            ""
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
