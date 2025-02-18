import React, { createContext, useContext } from "react";
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
  };
  return (
    <PaymentContext.Provider value={info}>
      <>
        <div className="flex w-full mx gap-6">
          <section className="min-h-screen w-20 md:w-80 bg-secondary bg-opacity-60">
            <Sidebar></Sidebar>
          </section>
          {/* right div */}
          <div className="flex flex-col flex-1 ">
            <section className=" bg-secondary bg-opacity-60 ">
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
