import React, { useState } from "react";
import Headline from "../../Shared/Headline";
import UseAuth from "../../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import PayRollTableRow from "./PayRollTableRow";

const Payroll = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  // getting payment Data

  const { data: paymentData = [], refetch } = useQuery({
    queryKey: ["payment-collection", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`payment`);
      return res.data;
    },
  });
  console.log(paymentData);
  return (
    <div>
      <header>
        <Headline
          title={"Payroll"}
          subTitle={"Authorize Pending Payroll Transactions"}
        ></Headline>
      </header>

      <section>
        <div className="overflow-x-auto bg-muted-red bg-opacity-25 rounded-xl p-6">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-color-text text-base md:text-lg">
                <th>#</th>
                <th>Employee</th>
                <th>Month</th>
                <th>Year</th>
                <th>Requested By</th>
                <th>Payment Date & Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {paymentData.map((singleData, index) => (
                <PayRollTableRow
                  key={singleData._id}
                  singleData={singleData}
                  refetch={refetch}
                  index={index}
                ></PayRollTableRow>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Payroll;
