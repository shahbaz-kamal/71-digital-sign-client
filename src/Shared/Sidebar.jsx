import React, { useEffect, useState } from "react";
import logo2 from "../assets/logo-200.png";
import { NavLink } from "react-router-dom";
import UseRole from "../Hooks/UseRole";
import { usePaymentContext } from "../LayOuts/DashboardLayOut";
import UseAuth from "../Hooks/UseAuth";
import { CiHome, CiMenuFries } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { TbCoinTaka } from "react-icons/tb";
import { GiProgression } from "react-icons/gi";
import { LuMessageSquareMore } from "react-icons/lu";
import { SlNotebook } from "react-icons/sl";
import { AiOutlineTransaction } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { IoLogOutOutline } from "react-icons/io5";
import { GrOverview } from "react-icons/gr";

const Sidebar = () => {
  const {
    refreshedPaymentRequestData,
    refreshedMessageData,
    handleShowDashNav,
    handleHideDashNav,
    setShowDashboardNav,
    showDashboardNav,
  } = usePaymentContext();
  const [shhowLogOutBtn, setShowLogOutBtn] = useState(false);
  const { user, logOutUser, userData, setUserData, setLoading } = UseAuth();
      
  const axiosSecure=UseAxiosSecure()
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
          <li className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out flex justify-center items-center">
            <span className="mr-2">
              <CiHome size={22} />
            </span>{" "}
            <span className={`${showDashboardNav ? "block" : "hidden"}`}>
              {" "}
              Home
            </span>
            {/* Custom underline */}
            {showDashboardNav &&   <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>}
          
          </li>
        </NavLink>
        <NavLink
          to={"/dashboard/overview"}
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold text-xl md:text-lg"
              : "text-black text-xl md:text-lg"
          }
        >
          <li className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out flex items-center justify-center">
            <span className="mr-2">
              <GrOverview size={22}/>
            </span>{" "}
            <span className={`${showDashboardNav ? "block" : "hidden"}`}>
            Overview
            </span>
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
          <li className="flex justify-center items-center group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out">
            <span className="mr-2">
              {" "}
              <FaRegUser size={22} />
            </span>{" "}
            <span className={`${showDashboardNav ? "block" : "hidden"}`}>
              {" "}
              Profile
            </span>
            {/* Custom underline */}
            {showDashboardNav &&   <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>}
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
          <li className=" flex items-center group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out">
            <span className="mr-2">
              <SlNotebook size={22} />
            </span>
            <span className={`${showDashboardNav ? "block" : "hidden"}`}>
              {" "}
              Work Sheet
            </span>
            {/* Custom underline */}
            {showDashboardNav &&   <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>}
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
          <li className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out flex items-center justify-center">
            <span className="mr-2">
              <AiOutlineTransaction size={22} />
            </span>{" "}
            <span className={`${showDashboardNav ? "block" : "hidden"}`}>
              Payment history
            </span>
            {showDashboardNav &&   <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>}
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
          <li className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out flex items-center justify-center">
            <span className="mr-2">
              <CiHome size={22}/>
            </span>{" "}
            <span className={`${showDashboardNav ? "block" : "hidden"}`}>
              Home
            </span>
            {/* Custom underline */}
            <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>
          </li>
        </NavLink>
        <NavLink
          to={"/dashboard/overview"}
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold text-xl md:text-lg"
              : "text-black text-xl md:text-lg"
          }
        >
          <li className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out flex items-center justify-center">
            <span className="mr-2">
              <GrOverview size={22}/>
            </span>{" "}
            <span className={`${showDashboardNav ? "block" : "hidden"}`}>
            Overview
            </span>
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
          <li className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out flex items-center justify-center">
            <span className="mr-2">
              {" "}
              <FaRegUser size={22}/>
            </span>{" "}
            <span className={`${showDashboardNav ? "block" : "hidden"}`}>
              Profile
            </span>
            {/* Custom underline */}
            {showDashboardNav &&   <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>}
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
          <li className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out flex items-center justify-center">
            <span className="mr-2">
              <HiOutlineUsers size={22} />
            </span>{" "}
            <span className={`${showDashboardNav ? "block" : "hidden"}`}>
              Employee List
            </span>
            {showDashboardNav &&   <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>}
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
          <li className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out flex items-center justify-center">
            <span className="mr-2">
              <GiProgression size={22}/>{" "}
            </span>{" "}
            <span className={`${showDashboardNav ? "block" : "hidden"}`}>
              Progress
            </span>
            {showDashboardNav &&   <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>}
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
          <li className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out flex items-center justify-center">
            <span className="mr-2">
              <LuMessageSquareMore size={22}/>
            </span>{" "}
            <span className={`${showDashboardNav ? "block" : "hidden"}`}>
              Messages
              {refreshedMessageData.length > 0 ? (
                <span>({refreshedMessageData.length})</span>
              ) : (
                <span>(0)</span>
              )}
            </span>
            {showDashboardNav &&   <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>}
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
              : "text-black text-xl md:text-lg "
          }
        >
          <li className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out flex items-center justify-center">
            <span className="mr-2">
              <CiHome size={22}/>
            </span>
            <span className={`${showDashboardNav ? "block" : "hidden"}`}>
              Home
            </span>
            {/* Custom underline */}
            {showDashboardNav &&   <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>}
          </li>
        </NavLink>
        <NavLink
          to={"/dashboard/overview"}
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold text-xl md:text-lg"
              : "text-black text-xl md:text-lg"
          }
        >
          <li className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out flex items-center justify-center">
            <span className="mr-2">
              <GrOverview size={22}/>
            </span>{" "}
            <span className={`${showDashboardNav ? "block" : "hidden"}`}>
            Overview
            </span>
            {/* Custom underline */}
            <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>
          </li>
        </NavLink>
        <NavLink
          to={"/dashboard/profile"}
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold text-xl md:text-lg "
              : "text-black text-xl md:text-lg "
          }
        >
          <li className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out flex items-center justify-center">
            <span className="mr-2">
              {" "}
              <FaRegUser size={22}/>
            </span>{" "}
            <span className={`${showDashboardNav ? "block" : "hidden"}`}>
              Profile
            </span>
            {/* Custom underline */}
            {showDashboardNav &&   <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>}
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
          <li className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out flex items-center justify-center">
            <span className="mr-2">
              <HiOutlineUsers size={22} />
            </span>{" "}
            <span className={`${showDashboardNav ? "block" : "hidden"}`}>
              All Employee List
            </span>
            {showDashboardNav &&   <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>}
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
          <li className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out flex items-center">
            <span className="mr-2">
              <TbCoinTaka size={22}/>
            </span>{" "}
            <span className={`${showDashboardNav ? "block" : "hidden"}`}>
              Payroll
              {refreshedPaymentRequestData.length > 0 ? (
                <span className="ml-1">
                  {" "}
                  ({refreshedPaymentRequestData.length}){" "}
                </span>
              ) : (
                <span>(0)</span>
              )}
            </span>
            {showDashboardNav &&   <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>}
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
          <li className="group relative hover:text-primary hover:font-semibold transition duration-300 ease-in-out flex items-center justify-center">
           
          <span className="mr-2">
              <LuMessageSquareMore size={22}/>
            </span>{" "} <span className={`${showDashboardNav ? "block" : "hidden"}`}>
              Messages
              {refreshedMessageData.length > 0 ? (
                <span className="ml-1">({refreshedMessageData.length})</span>
              ) : (
                <span>(0)</span>
              )}
            </span>

            {showDashboardNav &&   <span className="absolute left-1/2 bottom-0 w-1/2 h-[3px] bg-primary transform -translate-x-1/2 hidden group-hover:block"></span>}
          </li>
        </NavLink>
      </>
    );
  }
  return (
    <div className="pt-2 flex flex-col items-center justify-center">
      {/* logo section */}
      <section className="px-2 py-2 flex items-center justify-center mb-4 h-20">
        {/* top dashboard */}
        <div className={`flex items-center  ${showDashboardNav?"justify-evenly":"justify-center"}`}>
          <div className={`w-10 md:w-12 ${showDashboardNav?"block":"hidden"}`}>
            <img className="w-full h-full object-cover" src={logo2} alt="" />
          </div>
          <h3
            className={`${
              showDashboardNav
                ? "font-bold text-white text-3xl uppercase inline-flex"
                : "font-bold text-white text-3xl uppercase hidden "
            }`}
          >
            Dashboard
          </h3>
          <div className={`text-black  flex ${showDashboardNav?"ml-4":""}`}>
            {showDashboardNav ? (
              <span onClick={handleHideDashNav} className="mr-1">
                <RxCross1 size={20} />
              </span>
            ) : (
              <span onClick={handleShowDashNav} className="mr-1">
                <CiMenuFries size={20} />
              </span>
            )}
          </div>
        </div>
      </section>
      <div className={`flex items-center justify-center  mb-4 ${showDashboardNav?"gap-2":"flex-col gap-2"}`}>
          {/* User Photo */}
          {user && user?.email ? (
            <div
              onClick={() => setShowLogOutBtn(!shhowLogOutBtn)}
              className="flex flex-col items-center justify-center w-12 h-12  relative "
            >
              {/* Profile Image */}
              <div className={`${showDashboardNav?"w-12 h-12":"w-10 h-10"}  rounded-full overflow-hidden`}>
                <img
                  className="w-full h-full object-cover block mx-auto"
                  src={userData.profilePhoto}
                  alt="User Profile"
                />
              </div>
            </div>
          ) : (
            ""
          )}
           {shhowLogOutBtn && (
              <button
                onClick={handleLogOut}
                className={`text-base md:text-lg py-2 border border-primary rounded-xl  hover:bg-primary hover:text-white transition duration-300 ease-in-out font-semibold  ${showDashboardNav?"px-5":"px-2"}`}
              >
                {showDashboardNav?"Log Out":<IoLogOutOutline />}
              </button>
            )}
        </div>
      <section className="w-full">
        {/* gap-2 is not applying */}
        <div className="flex flex-col justify-center items-center ">
          <ul className="flex flex-col justify-center items-center  gap-2">
            {links}
          </ul>
        </div>
       
      </section>
    </div>
  );
};

export default Sidebar;
