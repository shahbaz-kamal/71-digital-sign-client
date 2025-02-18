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

import UseRole from "../Hooks/UseRole";
import { usePaymentContext } from "../LayOuts/DashboardLayOut";

const NavbarDashboard = () => {
  const { refreshedPaymentRequestData, refreshedMessageData,handleShowDashNav,handleHideDashNav,setShowDashboardNav,showDashboardNav } =
    usePaymentContext();

  // messageData

  const axiosSecure = UseAxiosSecure();
  // const [userData, setUserData] = useState({});
  const { user, logOutUser, userData, setUserData, setLoading } = UseAuth();
  const [showMobileNavItems, setShowMobileNavItems] = useState(false);
  const navigate = useNavigate();
  const [shhowLogOutBtn, setShowLogOutBtn] = useState(false);

  const handleLogOut = async () => {
    // navigate("/");
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
  const { role } = UseRole();
  //   console.log(userData);
  let links = <></>;
  if (role === "employee") {
    links = (
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
            Profile
            {/* Custom underline */}
            <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>
          </li>
        </NavLink>
        <NavLink
          to={"/dashboard/work-sheet"}
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
            Work Sheet{/* Custom underline */}
            <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>
          </li>
        </NavLink>
        <NavLink
          to={"/dashboard/payment-history"}
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
            Payment History
            <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>
          </li>
        </NavLink>
      </>
    );
  }
  if (role === "hr") {
    links = (
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
            Profile
            {/* Custom underline */}
            <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>
          </li>
        </NavLink>
        <NavLink
          to={"/dashboard/employee-list"}
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
            Employee List
            <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>
          </li>
        </NavLink>
        <NavLink
          to={"/dashboard/progress"}
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
            Progress
            <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>
          </li>
        </NavLink>{" "}
        <NavLink
          to={"/dashboard/message"}
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
            Messages{" "}
            {refreshedMessageData.length > 0 ? (
              <span>({refreshedMessageData.length})</span>
            ) : (
              <span>(0)</span>
            )}
            <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>
          </li>
        </NavLink>
      </>
    );
  }
  if (role === "admin") {
    links = (
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
            Profile
            {/* Custom underline */}
            <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>
          </li>
        </NavLink>

        <NavLink
          to={"/dashboard/all-employee-list"}
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
            All Employee List
            <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>
          </li>
        </NavLink>
        <NavLink
          to={"/dashboard/payroll"}
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
            Payroll{" "}
            {refreshedPaymentRequestData.length > 0 ? (
              <span>({refreshedPaymentRequestData.length})</span>
            ) : (
              <span>(0)</span>
            )}
            <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>
          </li>
        </NavLink>
        <NavLink
          to={"/dashboard/message"}
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
            Messages
            {refreshedMessageData.length > 0 ? (
              <span>({refreshedMessageData.length})</span>
            ) : (
              <span>(0)</span>
            )}
            <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>
          </li>
        </NavLink>
      </>
    );
  }
  return (
    <div className="">
      {/* first div */}
      <div className=" ">
        <nav className="flex w-full md:w-10/12 mx-auto items-center justify-between px-2 md:px-0 ">
          {/* logo */}
         {/* mavbarstarts  */}
        {/* navbar center */}
          <div className="flex items-center ">
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
            {/* <div className="text-black  ml-4 flex">
              {showDashboardNav ? (
                <span onClick={handleHideDashNav}>
                  <RxCross1 size={22} />
                </span>
              ) : (
                <span onClick={handleShowDashNav}>
                  <CiMenuFries size={22} />
                </span>
              )}
            </div> */}
          </div>
          {/* login button */}
          {/* Mobile Section menu section */}
        </nav>
      </div>
      {/* second div */}
      {showMobileNavItems ? (
        <nav
          id="mobile-navitems"
          className="w-full mx-auto lg:hidden fixed backdrop-blur-xl z-40"
        >
          <ul className=" flex flex-col items-center bg-muted-red  bg-opacity-50  rounded-lg  z-100 mt-[85px]">
            {links}
          </ul>
        </nav>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavbarDashboard;
