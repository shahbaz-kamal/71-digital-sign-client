import React, { useState } from "react";
import UseSingleUserData from "../../Hooks/UseSingleUserData";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const EmployeeListModal = ({
  refetch,
  isModalOpen,
  setIsModalOpen,
  selectedUser,
}) => {
  if (!selectedUser) {
    return null;
  }
  const axiosSecure = UseAxiosSecure();
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const {
    _id,
    name,
    email,
    isVerified,
    bankAccount,
    salary,
    profilePhoto,
    designation,
  } = selectedUser;

  //   handling payment request
  const { userData } = UseSingleUserData();
  const handlePaymentRequest = async (e) => {
    e.preventDefault();
    console.log("payment request triggered");

    const newPawmentData = {
      paymentId: _id,
      month,
      year,
      employee_name: name,
      employee_email: email,
      employee_bankAccount: bankAccount,
      employee_salary: salary,
      employee_profilePhoto: profilePhoto,
      employee_designation: designation,
      employee_isVerified: isVerified,
      hr_name: userData.name,
      hr_email: userData.email,
      hr_profilePhoto: userData.profilePhoto,
    };
    const res = await axiosSecure.post("payment", newPawmentData);
    if (res.data.message) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `${res.data.message}`,
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }
    if (res.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Payment Process is submitted for authorization",
        showConfirmButton: false,
        timer: 2000,
      });
      setIsModalOpen(false)
      refetch()
    }
  };
  return (
    <dialog open={isModalOpen} className="modal">
      <div className="modal-box bg-muted-green">
        <form
          onSubmit={handlePaymentRequest}
          className="card-body   rounded-2xl w-full mx-auto grid grid-cols-1 "
        >
          {/* Tasks */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-color-text">Salary</span>
            </label>

            <input
              value={salary}
              name="salary"
              type="number"
              placeholder="salary"
              step={"0.01"}
              className="input input-bordered"
              required
            />
          </div>
          {/* Month */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-color-text">Month</span>
            </label>
            <select
              onChange={(e) => setMonth(e.target.value)}
              name="salary"
              defaultValue="Pick a Month"
              className="select select-ghost w-full bg-white"
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
          {/* Month */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-color-text">Pick a year</span>
            </label>
            <select
              onChange={(e) => setYear(e.target.value)}
              name="year"
              defaultValue="Pick a Year"
              className="select select-ghost w-full bg-white"
            >
              <option disabled value="Pick a Month">
                Pick a Year
              </option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>

          <div className="form-control mt-4 ">
            <button className=" py-2 px-3 rounded-md border border-primary text-color-text hover:bg-primary  transition ease-in-out duration-300 hover:text-white font-bold">
              Make Payment Request
            </button>
          </div>
        </form>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={() => setIsModalOpen(false)}
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

export default EmployeeListModal;
