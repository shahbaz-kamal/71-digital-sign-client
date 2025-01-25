import React from "react";
import Headline from "../../Shared/Headline";
import { MdOutlineVerified, MdSubtitles, MdVerifiedUser } from "react-icons/md";
import UseAuth from "../../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import UseRole from "../../Hooks/UseRole";
import {
  createColumnHelper,
  flexRender,
  useReactTable,
} from "@tanstack/react-table";
import { CiBank, CiMail, CiUser } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";
import EmployeeListTableRow from "./EmployeeListTableRow";

const EmployeeList = () => {
  const { user } = UseAuth();
  const { role } = UseRole();
  const axiosSecure = UseAxiosSecure();
  const { data: employeeData = [] ,refetch} = useQuery({
    queryKey: ["only-employee-data"],
    queryFn: async () => {
      const res = await axiosSecure(`all-employee-list?employee=employee`);
      console.log(res.data);
      return res.data;
    },
  });
  console.log(employeeData);

  return (
    <div>
      <header>
        <Headline
          title={"Employee List"}
          subTitle={"Tracking Excellence in Every Role"}
        ></Headline>
      </header>
      <section>
        {" "}
        <div className="overflow-x-auto bg-muted-green bg-opacity-25 rounded-2xl w-full mx-auto p-6">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="">
                <th className="text-center text-sm md:text-base text-color-text">
                  #
                </th>
                <th className="text-center text-sm md:text-base text-color-text">
                  Name
                </th>
                <th className="text-center text-sm md:text-base text-color-text">
                  Email
                </th>
                <th className="text-center text-sm md:text-base text-color-text">
                  Verified
                </th>
                <th className="text-center text-sm md:text-base text-color-text">
                  Bank Account{" "}
                </th>
                <th className="text-center text-sm md:text-base text-color-text">
                  Salary{" "}
                </th>
                <th className="text-center text-sm md:text-base text-color-text">
                  Pay{" "}
                </th>
                <th className="text-center text-sm md:text-base text-color-text">
                  Details{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {employeeData.map((singleEmployee, index) => (
                <EmployeeListTableRow
                  key={singleEmployee._id}
                  singleEmployee={singleEmployee}
                  index={index} refetch={refetch}
                ></EmployeeListTableRow>
              ))}
              {/* {tasks.map((task, index) => (
                  <WorkSheetTableRow
                    key={task._id}
                    taskData={task}
                    index={index} refetch={refetch}
                  ></WorkSheetTableRow>
                ))} */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default EmployeeList;
