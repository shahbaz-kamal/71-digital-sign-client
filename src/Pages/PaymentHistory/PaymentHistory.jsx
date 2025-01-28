import React, { useState } from "react";
import Headline from "../../Shared/Headline";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import PaymentHistoryTableRow from "./PaymentHistoryTableRow";
import { GrNext, GrPrevious } from "react-icons/gr";
import { data } from "react-router-dom";
import { Helmet } from "react-helmet";

const PaymentHistory = () => {
  const { user } = UseAuth();
  const [itemsPerPage, setItemPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const axiosSecure = UseAxiosSecure();
  console.log(itemsPerPage);
  const { data: dataCount = [] } = useQuery({
    queryKey: ["dataCount", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`paymentCount/${user?.email}`);
      return res.data;
    },
  });

  const { data: historyData, refetch } = useQuery({
    queryKey: ["history-data-employee", user?.email, currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `payment-history/${user?.email}?page=${
          currentPage - 1
        }&size=${itemsPerPage}`
      );
      return res.data;
    },
    keepPreviousData: true,
  });
  //   console.log(historyData);

  //   pagination

  const count = dataCount.count;

  const numberOfPages = Math.ceil(count / itemsPerPage);

  //   console.log(currentPage);

  const pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i + 1);
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleItemPerPage = (e) => {
    setItemPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  if (!historyData) {
    return;
  }
  return (
    <div>
      <header>
        <Headline
          title={"Payment History"}
          subTitle={"Track All Your Payments"}
        ></Headline>
        <Helmet>
          <title>Payment History || 71 Digital SIgn</title>
        </Helmet>
      </header>
      <section>
        <div className="overflow-x-auto bg-muted-green bg-opacity-25 rounded-2xl w-full mx-auto p-6">
          <table className="table">
            {/* head */}
            <thead data-aos="fade-right">
              <tr className="">
                <th className="text-center text-sm md:text-base text-color-text">
                  Month
                </th>
                <th className="text-center text-sm md:text-base text-color-text">
                  Year
                </th>
                <th className="text-center text-sm md:text-base text-color-text">
                  Amount
                </th>
                <th className="text-center text-sm md:text-base text-color-text">
                  Transaction Id
                </th>
              </tr>
            </thead>
            <tbody data-aos="fade-left">
              {/* {historyData.map((singleData, index) => (
                <PaymentHistoryTableRow
                  key={singleData._id}
                  singleData={singleData}
                  index={index}
                ></PaymentHistoryTableRow>
              ))} */}
              {historyData.map((singleData, index) => (
                <PaymentHistoryTableRow
                  singleData={singleData}
                  key={singleData._id}
                  index={index}
                ></PaymentHistoryTableRow>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* select no. of pages */}
      {count > 5 && (
        <section
          data-aos="fade-right"
          className="flex gap-2 justify-center mt-6 items-center"
        >
          <p className="font-medium text-color-text text-sm md:text-base">
            No. of Items Per Page:
          </p>
          <select
            value={itemsPerPage}
            onChange={handleItemPerPage}
            className="  bg-muted-green bg-opacity-25 px-4 py-2"
          >
            <option value="5"> 5</option>
            <option value="10"> 10</option>

            <option value="15"> 15</option>
            <option value="20"> 20</option>
          </select>
        </section>
      )}
      {count > 5 && (
        <section
          data-aos="fade-left"
          className="flex gap-2 justify-center mt-6"
        >
          <button
            onClick={handlePrevious}
            className="bg-muted-green bg-opacity-25 p-4 rounded-md"
          >
            <GrPrevious size={22} />
          </button>
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(page);
              }}
              className={`bg-muted-green  p-4 rounded-md ${
                currentPage === page ? "" : "bg-opacity-25"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={handleNext}
            className="bg-muted-green bg-opacity-25 p-4 rounded-md"
          >
            <GrNext size={22} />
          </button>
        </section>
      )}
    </div>
  );
};

export default PaymentHistory;
