import { format } from "date-fns";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const TaskUpdateModal = ({ taskData, isOpen, setIsOpen, refetch }) => {
  const axiosSecure = UseAxiosSecure();
  const { _id, task, hoursWorked, date, email } = taskData;
  console.log(taskData);
  const [startDate, setStartDate] = useState(new Date(date));

  console.log(startDate);
  const handleClose = () => {
    setIsOpen(false); // Close the modal
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const task = e.target.tasks.value;
    const hoursWorked = e.target.hoursWorked.value;
    const date = startDate;
    const updatedData = { task, hoursWorked, date };
    const id = _id;

    try {
      const res = await axiosSecure.patch(
        `update/work-sheet/${id}`,
        updatedData
      );
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Task updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsOpen(false);
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${error.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
      setIsOpen(false);
    }
  };
  return (
    <dialog open={isOpen} className="modal">
      <div className="modal-box bg-muted-green">
        <form
          onSubmit={handleUpdate}
          className="card-body   rounded-2xl w-full mx-auto grid grid-cols-1 "
        >
          {/* Tasks */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-color-text">Tasks</span>
            </label>
            <select
              defaultValue={task || "Pick a Task"}
              name="tasks"
              className="select select-ghost w-full bg-white"
            >
              <option value="Pick a Task" disabled>
                Pick a Task
              </option>
              <option value={"Sales"}>Sales</option>
              <option value={"Support"}> Support</option>
              <option value={"Content"}> Content</option>
              <option value={"Paper-work"}> Paper-work</option>
            </select>
          </div>
          {/* Hours worked */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-color-text">Hours Worked</span>
            </label>
            <input
              defaultValue={hoursWorked}
              name="hoursWorked"
              type="number"
              placeholder="Hours"
              step={"0.01"}
              className="input input-bordered"
              required
            />
          </div>

          {/* date */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-color-text">Date</span>
            </label>
            <DatePicker
              name="date"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="input input-bordered w-full bg-white"
            />
          </div>

          <div className="form-control mt-4 ">
            <button className="input input-bordered bg-secondary border border-secondary hover:bg-secondary hover:border-muted-green hover:text-color-text transition ease-in-out duration-300 font-medium text-lg md:text-xl text-white">
              Update Task
            </button>
          </div>
        </form>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={handleClose}
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

export default TaskUpdateModal;
