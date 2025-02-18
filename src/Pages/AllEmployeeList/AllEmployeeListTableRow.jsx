import React, { useState } from "react";
import makeHr from "../../assets/makeHr.webp";
import { MdEdit, MdOutlineVerified } from "react-icons/md";
import { div, img } from "framer-motion/client";
import AllEmployeeListModal from "./AllEmployeeListModal";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
const AllEmployeeListTableRow = ({ index, user, refetch }) => {
  const {
    _id,
    name,
    email,
    bankAccount,
    salary,
    designation,
    role,
    profilePhoto,
    isFired,
  } = user;
  const axiosSecure = UseAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const handleEditSalary = async () => {
    setSelectedData(user);
    setIsOpen(true);
  };
  const handleMakeHr = async (_id) => {
    console.log(_id);
    const id = _id;
    const role = { roleData: "hr" };
    const res = await axiosSecure.patch(`role/makeHr/${id}`, role);
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${name} is a HR now.`,
        showConfirmButton: false,
        timer: 1500,
      });
      setIsOpen(false);
      refetch();
    }
  };

  const handleFire = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, fire ${name}`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.patch(`fire/${_id}`);
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Fired",
            text: "This Employee is fired",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={profilePhoto} />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{designation}</div>
            </div>
          </div>
        </td>
        <td>{email}</td>
        <td className="flex  items-center gap-2">
          <span>{salary}</span>
          <span
            onClick={handleEditSalary}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Click to update salary"
            className="bg-muted-green bg-opacity-25 text-secondary p-1 rounded-full hover:cursor-pointer"
          >
            <MdEdit size={20} />
          </span>
        </td>
        <td>
          {role === "hr" || role === "admin" ? (
            <div className="text-green-500">
              <MdOutlineVerified size={24} />
            </div>
          ) : (
            <button
              disabled={isFired ? true : false}
              onClick={() => {
                handleMakeHr(_id);
              }}
              className="btn btn-error bg-primary"
            >
              Make HR
            </button>
          )}
        </td>
        <th>
          <button
            disabled={isFired ? true : false}
            onClick={() => handleFire(_id)}
            className="btn btn-error bg-primary text-white"
          >
            {isFired ? "Fired" : "Fire"}
          </button>
        </th>
      </tr>
      {user && (
        <AllEmployeeListModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedData={selectedData}
          refetch={refetch}
        ></AllEmployeeListModal>
      )}
    </>
  );
};

export default AllEmployeeListTableRow;
