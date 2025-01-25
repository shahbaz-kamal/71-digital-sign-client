import React from "react";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Headline from "../../Shared/Headline";
import AllEmploeeListTableRow from "./AllEmployeeListTableRow";
import AllEmployeeListTableRow from "./AllEmployeeListTableRow";

const AllEmployeeList = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  // getting all employee data
  const { data: allUser = [] ,refetch} = useQuery({
    queryKey: ["all-workers-data", user?.email],
    queryFn: async () => {
      const res = await axiosSecure("all-employee-list");
      return res.data;
    },
  });

  return (
    <div>
      <Headline
        title={"All Employee List"}
        subTitle={"Customize Access for Your Team"}
      ></Headline>

      <section>
        <div className="overflow-x-auto bg-muted-red rounded-xl p-6 bg-opacity-25">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-base md:text-lg text-color-text">
                <th>
                #
                </th>
                <th>Employee</th>
                <th>Email</th>
                <th>Salary</th>
                <th>Make HR</th>
                <th>Fire</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
             
             {allUser.map((user,index)=><AllEmployeeListTableRow key={user._id} user={user} refetch={refetch} index={index}></AllEmployeeListTableRow>)}
            </tbody>
            {/* foot */}
           
          </table>
        </div>
      </section>
    </div>
  );
};

export default AllEmployeeList;
