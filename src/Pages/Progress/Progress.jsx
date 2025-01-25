import React, { useState } from "react";
import Headline from "../../Shared/Headline";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import ProgressTableRow from "./ProgressTableRow";

const Progress = () => {
  const [month, setMonth] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  // for getting employee name
  const { data: usersData = [] } = useQuery({
    queryKey: ["users-name", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get("progress/users");
      return res.data;
    },
  });

  //   for getting data

  const { data: filteredData = [] } = useQuery({
    queryKey: ["filtered-data/ all data", user?.email, month, employeeName],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `progress/tasks?employeeName=${employeeName}&month=${month}`
      );
      return res.data;
    },
  });
  console.log(employeeName);
  console.log(month);
  console.log(filteredData);

  return (
    <div>
      <header>
        <Headline
          title={"Progress"}
          subTitle={"Task Progress Tracker"}
        ></Headline>
      </header>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Month */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-color-text">Filter by Name</span>
            </label>
            <select
              onChange={(e) => setEmployeeName(e.target.value)}
              name="name"
              defaultValue="Pick a Name"
              className="select select-ghost w-full bg-muted-green bg-opacity-25 "
            >
              <option disabled value="Pick a Name">
                Pick a Name
              </option>
              {usersData.map((singleUser) => (
                <option key={singleUser._id} value={singleUser.name} >
                  {singleUser.name}
                </option>
              ))}
            </select>
          </div>
          {/* Month */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-color-text">
                Filter by Month
              </span>
            </label>
            <select
              onChange={(e) => setMonth(e.target.value)}
              name="month"
              defaultValue="Pick a Month"
              className="select select-ghost w-full bg-muted-green bg-opacity-25"
            >
              <option disabled value="Pick a Month">
                Pick a Month
              </option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
        </div>
        <div className="mt-7 md:mt-10">
          <div className="overflow-x-auto bg-muted-green rounded-xl p-6 bg-opacity-25">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-base md:text-lg text-color-text">
                  <th>#</th>
                  <th>Employee</th>

                  <th>Tasks</th>
                  <th>Hours Worked</th>
                  <th>Date </th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {filteredData.map((item, index) => (
                  <ProgressTableRow
                    key={item._id}
                    item={item}
                    index={index}
                  ></ProgressTableRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Progress;
