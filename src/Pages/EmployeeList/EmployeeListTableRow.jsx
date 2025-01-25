import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdVerified } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const EmployeeListTableRow = ({ singleEmployee, index, refetch }) => {
  const axiosSecure = UseAxiosSecure();
  const {
    _id,
    name,
    email,
    isVerified,
    bankAccount,
    salary,
    profilePhoto,
    designation,
  } = singleEmployee;
  const handleVerified = async (_id) => {
    console.log(_id);
    const id = _id;
    const res = await axiosSecure.patch(`update/isVerified/${id}`);
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${name} is a verified employee now`,
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    }
  };
  return (
    <tr>
      <th className="text-center text-color-text text-sm md:text-base">
        {index + 1}
      </th>
      <th className="text-center text-color-text text-sm md:text-base">
        <div className="flex justify-center">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={profilePhoto} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{designation}</div>
            </div>
          </div>
        </div>
      </th>
      <td className="text-center text-color-text text-sm md:text-base">
        {email}
      </td>
      <td className="text-center text-color-text text-sm md:text-base">
        <div className="flex justify-center ">
          {isVerified ? (
            <div className="bg-secondary bg-opacity-30 p-2 rounded-full text-neutral">
              <MdVerified size={22} />
            </div>
          ) : (
            <div
              onClick={() => handleVerified(_id)}
              className="bg-primary bg-opacity-30 p-2 rounded-full text-primary"
            >
              <RxCross2 size={22} />
            </div>
          )}
        </div>
      </td>
      <td className="text-center text-color-text text-sm md:text-base">
        {bankAccount}
      </td>
      <td className="text-center text-color-text text-sm md:text-base">
        {salary}
      </td>
      <td className="text-center text-color-text text-sm md:text-base">
        <button className="py-1 px-3 rounded-md border border-primary hover:bg-primary  transition ease-in-out duration-300 hover:text-white">
          Pay
        </button>
      </td>
      <td className="text-center text-color-text text-sm md:text-base">
        <button className="py-1 px-3 rounded-md bg-secondary border border-secondary hover:bg-muted-green hover:border-muted-green hover:text-color-text transition ease-in-out duration-300">
          Details
        </button>
      </td>
    </tr>
  );
};

export default EmployeeListTableRow;
