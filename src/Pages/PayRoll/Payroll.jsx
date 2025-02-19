import React, { useEffect, useState } from "react";
import Headline from "../../Shared/Headline";
import UseAuth from "../../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import PayRollTableRow from "./PayRollTableRow";
import PayrollCard from "./PayrollCard";
import { Helmet } from "react-helmet";

const Payroll = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const [tableView, setTableView] = useState(true);
  const [cardView, setCardView] = useState(false);
  // making card view anabled after1236px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setTableView(false);
        setCardView(true);
      } else {
        setTableView(true);
        setCardView(false);
      }
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Call once to set the correct state on mount
    handleResize();

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  
  // getting payment Data

  const { data: paymentData = [], refetch } = useQuery({
    queryKey: ["payment-collection", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`payment`);
      return res.data;
    },
  });
  console.log(paymentData);

  const handleTableView = () => {
    setTableView(true);
    setCardView(false);
  };
  const handleCardView = () => {
    setTableView(false);
    setCardView(true);
  };
  return (
    <div>
      <header>
        <Headline
          title={"Payroll"}
          subTitle={"Authorize Pending Payroll Transactions"}
        ></Headline>
        <Helmet>
          <title>Payroll || 71 Digital Sign</title>
        </Helmet>
      </header>
      {/* grid & card btn */}
      {/* <section
      
        className="flex justify-center gap-2 mb-7 md:mb-10"
      >
        <button
          onClick={handleTableView}
          className={`btn ${tableView ? "btn-error" : `bg-gray-200`}`}
        >
          Table view
        </button>
        <button
          onClick={handleCardView}
          className={`btn ${cardView ? "btn-error" : "bg-gray-200"}`}
        >
          Card View
        </button>
      </section> */}

      {tableView && (
        <section>
          <div className="overflow-x-auto bg-secondary bg-opacity-25 rounded-xl p-6">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-color-text text-base md:text-lg">
                  <th>#</th>
                  <th>Employee</th>
                  <th>Month</th>
                  <th>Year</th>
                  <th>Requested By</th>
                  <th>Time</th>
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
      )}
      {cardView && (
        <section className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {paymentData.map((cardData, index) => (
            <PayrollCard
              key={cardData._id}
              cardData={cardData}
              refetch={refetch}
              index={index}
            ></PayrollCard>
          ))}
        </section>
      )}
    </div>
  );
};

export default Payroll;
