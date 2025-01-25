import React, { useState } from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const AllEmployeeListModal = ({ refetch, isOpen, setIsOpen, selectedData }) => {
  if (!selectedData) {
    return null;
  }
  const [salaryData, setSalaryData] = useState(0);
  const axiosSecure = UseAxiosSecure();
  const { _id } = selectedData;
  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(_id);
    if (salaryData < parseInt(selectedData.salary)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Salary can not decrease",
        showConfirmButton: false,
        timer: 1500,
      });
      setIsOpen(false);
      return;
    }
    const id = _id;
    const res = await axiosSecure.patch(`update/salary/${id}`, { salaryData });
    if (res.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Salary updated Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      setIsOpen(false);
      refetch()
    }
  };
  return (
    <dialog open={isOpen} className="modal">
      <div className="modal-box bg-muted-green">
        <form
          onSubmit={handleUpdate}
          className="card-body   rounded-2xl w-full mx-auto grid grid-cols-1 "
        >
          {/* Hours worked */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-color-text">Salary</span>
            </label>
            <input
              onChange={(e) => setSalaryData(e.target.value)}
              defaultValue={selectedData?.salary}
              name="salary"
              type="number"
              placeholder="salary"
              step={"0.01"}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-4 ">
            <button className="input input-bordered bg-secondary border border-secondary hover:bg-secondary hover:border-muted-green hover:text-color-text transition ease-in-out duration-300 font-medium text-lg md:text-xl text-white">
              Update Salary
            </button>
          </div>
        </form>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={() => setIsOpen(false)}
              className="btn input input-bordered bg-secondary border border-secondary hover:bg-secondary hover:border-muted-green hover:text-color-text transition ease-in-out duration-300 font-medium text-lg md:text-xl text-white"
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default AllEmployeeListModal;
