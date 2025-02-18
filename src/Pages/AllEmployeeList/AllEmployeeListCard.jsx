import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import AllEmployeeListModal from "./AllEmployeeListModal";
import { deleteUser } from "firebase/auth";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const AllEmployeeListCard = ({ index, user, refetch }) => {
    const axiosSecure=UseAxiosSecure()
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
  const [selectedData, setSelectedData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
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
            title: "Fired!",
            text: "This Employee is fired",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <>
      <div className="card bg-secondary bg-opacity-20  shadow-xl gap-6 p-6">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-14 w-14">
              <img src={profilePhoto} />
            </div>
          </div>
          <div>
            <h3 className="font-bold">{name}</h3>
            <p className="text-sm opacity-50">{email}</p>
            <p className="text-sm opacity-50">
              {designation ? designation : "Employee"}
            </p>
          </div>
        </div>
        <hr />
        <div className="flex  items-center gap-2">
          <span className="font-bold text-base">Salary: </span>
          <span>{salary}</span>
          <span
            onClick={handleEditSalary}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Click to update salary"
            className="bg-muted-green bg-opacity-25 text-secondary p-1 rounded-full hover:cursor-pointer"
          >
            <MdEdit size={20} />
          </span>
        </div>
        {/* make hr
         */}
        <div className="flex justify-between">
          <button
            disabled={role === "hr" ? true : false}
            onClick={() => handleMakeHr(_id)}
            className="btn btn-error bg-primary text-white"
          >
            Make HR
          </button>
          <button
            disabled={isFired}
            onClick={() => handleFire(_id)}
            className="btn btn-error bg-primary text-white"
          >
            {isFired?"Fired":"Fire"}
          </button>
        </div>
      </div>
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

export default AllEmployeeListCard;
