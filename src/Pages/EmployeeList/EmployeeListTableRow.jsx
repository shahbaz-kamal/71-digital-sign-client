import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdVerified } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import EmployeeListModal from "./EmployeeListModal";
import { Link, useNavigate } from "react-router-dom";

const EmployeeListTableRow = ({ singleEmployee, index, refetch }) => {
  const axiosSecure = UseAxiosSecure();
  const {
    _id,
    name,
    email,
    isVerified,
    bankAccount,
    isFired,
    salary,
    profilePhoto,
    designation,
  } = singleEmployee;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handlePay = async () => {
    if (!isVerified) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `${name} is not verified yet,Please Wait for The Admin to Verify`,
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    if (isFired) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${name} is Fired! You Can't Pay Him`,
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    setIsModalOpen(true);
    setSelectedUser(singleEmployee);
  };
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
    <>
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
          <button
            onClick={handlePay}
            className="btn btn-error text-white rounded-md bg-primary border border-primary   transition ease-in-out duration-300"
          >
            Pay
          </button>
        </td>
        <td className="text-center text-color-text text-sm md:text-base">
          <Link to={`/dashboard/details/${email}`}>
       
            <button className="btn btn-error text-white rounded-md bg-primary border border-primary   transition ease-in-out duration-300">
              Details
            </button>
          </Link>
        </td>
      </tr>
      {singleEmployee && (
        <EmployeeListModal
          selectedUser={selectedUser}
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          refetch={refetch}
        ></EmployeeListModal>
      )}
    </>
  );
};

export default EmployeeListTableRow;
