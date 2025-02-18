import React, { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Headline from "../../Shared/Headline";
import AllEmploeeListTableRow from "./AllEmployeeListTableRow";
import AllEmployeeListTableRow from "./AllEmployeeListTableRow";
import { Helmet } from "react-helmet";
import AllEmployeeListCard from "./AllEmployeeListCard";

const AllEmployeeList = () => {
  const [tableview, setTableView] = useState(true);

  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  // making tableview false after 1300px
  useEffect(() => {
    const handleResize = () => {
      setTableView(window.innerWidth >= 1300); // Set false if width < 1300px
    };

    handleResize(); // Call immediately to apply correct state

    window.addEventListener("resize", handleResize); // Listen for resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);
  // getting all employee data
  const { data: allUser = [], refetch } = useQuery({
    queryKey: ["all-workers-data", user?.email],
    queryFn: async () => {
      const res = await axiosSecure("all-employee-list");
      return res.data;
    },
  });
  console.log(tableview);
  return (
    <div>
      <Headline
        title={"All Employee List"}
        subTitle={"Customize Access for Your Team"}
      ></Headline>
      <Helmet>
        <title>All Employee || 71 Digital SIgn</title>
      </Helmet>

      {/* Table view */}
      {tableview && (
        <section>
          <div className="overflow-x-auto bg-secondary  rounded-xl p-6 bg-opacity-25">
            <table className="table">
              {/* head */}
              <thead data-aos="">
                <tr className="text-base md:text-lg text-color-text">
                  <th>#</th>
                  <th>Employee</th>
                  <th>Email</th>
                  <th>Salary</th>
                  <th>Make HR</th>
                  <th>Fire</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}

                {allUser.map((user, index) => (
                  <AllEmployeeListTableRow
                    key={user._id}
                    user={user}
                    refetch={refetch}
                    index={index}
                  ></AllEmployeeListTableRow>
                ))}
              </tbody>
              {/* foot */}
            </table>
          </div>
        </section>
      )}
      {!tableview && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {" "}
          {allUser.map((user, index) => (
            <AllEmployeeListCard
              key={user._id}
              user={user}
              refetch={refetch}
              index={index}
            ></AllEmployeeListCard>
          ))}
        </section>
      )}
    </div>
  );
};

export default AllEmployeeList;
