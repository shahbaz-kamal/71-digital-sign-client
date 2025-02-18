import React, { createContext, useContext, useEffect, useState } from "react";
import NavbarDashboard from "../Shared/NavbarDashboard";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../Hooks/UseAuth";
import Sidebar from "../Shared/Sidebar";
const PaymentContext = createContext();

const DashboardLayOut = () => {
  // functions for getting payment request data in the navbar as well as inside
  const [showDashboardNav, setShowDashboardNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowDashboardNav(true); // Show for medium (md) and larger screens
      } else {
        setShowDashboardNav(false); // Hide for smaller screens
      }
    };

    // Call on mount to set the initial state
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleHideDashNav = () => {
    setShowDashboardNav(false);
  };
  const handleShowDashNav = () => {
    setShowDashboardNav(true);
  };
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const { data: paymentRequestData = [], refetch: refetchNavbar } = useQuery({
    queryKey: ["payment-collection", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`payment`);
      return res.data;
    },
  });
  const { data: messageData = [], refetch: refetchMessage } = useQuery({
    queryKey: ["messages-collection", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`messages`);
      return res.data;
    },
  });

  const refreshedPaymentRequestData = paymentRequestData.filter(
    (item) => item.isAuthorized === false
  );
  const refreshedMessageData = messageData.filter(
    (singleMessage) => singleMessage.isRead === false
  );

  const info = {
    refreshedPaymentRequestData,
    refetchNavbar,
    refreshedMessageData,
    refetchMessage,
    handleShowDashNav,
    handleHideDashNav,
    setShowDashboardNav,
    showDashboardNav,
  };
  return (
    <PaymentContext.Provider value={info}>
      <>
        <div className="flex w-full mx gap-6">
          <section
            className={`${
              showDashboardNav
                ? "min-h-screen  w-80 bg-secondary bg-opacity-60 fixed z-10 "
                : "min-h-screen  w-20 bg-secondary bg-opacity-60 fixed z-10"
            }`}
          >
            <Sidebar></Sidebar>
          </section>
          {/* right div */}
          <div
            className={`${
              showDashboardNav
                ? "flex flex-col flex-1 ml-80"
                : "flex flex-col flex-1 ml-20"
            } `}
          >
            <section className=" bg-yellow-400 bg-opacity-60 fixed w-full">
              <NavbarDashboard></NavbarDashboard>
            </section>
            <section className=" mx-auto pt-28 space-y-7 md:space-y-10">
              <Outlet></Outlet>
            </section>
          </div>
        </div>

        <section>{/* <Footer></Footer> */}</section>
      </>
    </PaymentContext.Provider>
  );
};
export const usePaymentContext = () => useContext(PaymentContext);
export default DashboardLayOut;
