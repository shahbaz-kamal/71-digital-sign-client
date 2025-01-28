import React from "react";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { CiEdit } from "react-icons/ci";

const PaymentHistoryTableRow = ({ singleData, index }) => {
  //   console.log(singleData);
  return (
    <>
      <tr>
        <td className="text-center text-color-text text-sm md:text-base">
          {singleData.month}
        </td>
        <td className="text-center text-color-text text-sm md:text-base">
          {singleData.year}
        </td>
        <td className="text-center text-color-text text-sm md:text-base">
          {singleData.employee_salary}
        </td>
        <td className="text-center text-color-text text-sm md:text-base">
          {singleData.trxId}
        </td>
      </tr>
    </>
  );
};

export default PaymentHistoryTableRow;
