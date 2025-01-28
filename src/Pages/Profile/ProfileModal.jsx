import React from "react";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const ProfileModal = ({ isOpen, setIsOpen, userData, refetch }) => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const email = user?.email;
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const bankAccount = e.target.bankAccount.value;
    const salary = e.target.salary.value;
    const designation = e.target.designation.value;
    const newData = { bankAccount, salary, designation, email };
    try {
      const res = await axiosSecure.patch("update-profile", newData);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Information Updated Successfully",
          showConfirmButton: false,
          timer: 2000,
        });
        setIsOpen(false);
        refetch();
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${error.message}`,
        showConfirmButton: false,
        timer: 2000,
      });
      setIsOpen(false);
    }
  };
  return (
    <dialog open={isOpen} className="modal ">
      <div className="modal-box  bg-light-accent ">
        <form
          onSubmit={handleUpdateProfile}
          className="card-body   rounded-2xl w-full mx-auto grid grid-cols-1 "
        >
          {/* Employee Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-color-text">Employee Name</span>
            </label>
            <input
              value={userData.name}
              type="text"
              className="input input-bordered"
              required
            />
          </div>
          {/* email  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-color-text">Email</span>
            </label>
            <input
              value={userData.email}
              type="email"
              className="input input-bordered"
              required
            />
          </div>
          {/* Bank Account */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-color-text">
                Bank Account No.
              </span>
            </label>
            <input
              defaultValue={userData?.bankAccount}
              name="bankAccount"
              type="number"
              placeholder="Enter your Bank Account"
              className="input input-bordered"
              required
            />
          </div>
          {/* salary */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-color-text">Salary</span>
            </label>
            <input
              defaultValue={userData?.salary}
              name="salary"
              type="number"
              placeholder="Enter your Salary"
              className="input input-bordered"
              required
            />
          </div>
          {/* designation */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-color-text">Designation</span>
            </label>
            <input
              defaultValue={userData?.designation}
              name="designation"
              type="text"
              placeholder="Enter your Designation"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-4 ">
            <button className=" btn btn-error text-white">Update</button>
          </div>
        </form>
        <div className="modal-action">
          <form method="dialog">
            <button
              onClick={() => setIsOpen(false)}
              className="btn btn-error text-white"
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ProfileModal;
