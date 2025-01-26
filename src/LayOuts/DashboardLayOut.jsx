import React, { createContext, useContext } from "react";
import NavbarDashboard from "../Shared/NavbarDashboard";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../Hooks/UseAuth";
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

  const refreshedPaymentRequestData = paymentRequestData.filter(
    (item) => item.isAuthorized === false
  );
  console.log(refreshedPaymentRequestData);
  const paymentRequestInfo = { refreshedPaymentRequestData, refetchNavbar };
  return (
    <PaymentContext.Provider value={paymentRequestInfo}>
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
    </PaymentContext.Provider>
  );
};
export const usePaymentContext = () => useContext(PaymentContext);
export default DashboardLayOut;
