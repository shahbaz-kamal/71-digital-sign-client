import React from "react";
import SocialLogin from "../../Shared/SocialLogin";
import { Link } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Headline from "../../Shared/Headline";
import UseAuth from "../../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import WorkSheetTableRow from "./WorkSheetTableRow";
import UseSingleUserData from "../../Hooks/UseSingleUserData";
import { Helmet } from "react-helmet";

const WorkSheet = () => {
  const { user, loading: authLoading } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const [startDate, setStartDate] = useState(new Date());
  const { userData: userDataForName } = UseSingleUserData();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = e.target.tasks.value;
    const hoursWorked = e.target.hoursWorked.value;
    const date = startDate;
    const email = user?.email;
    const name = userDataForName.name;
    const profilePhoto = userDataForName.profilePhoto;
    const newTask = { task, name, profilePhoto, hoursWorked, date, email };
    console.log(newTask);

    const res = await axiosSecure.post("work-sheet", newTask);
    if (res.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Task Added Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    }
  };

  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["task-data", user],
    queryFn: async () => {
      const email = user.email;
      const res = await axiosSecure(`tasks/${email}`);

      return res.data;
    },
  });
  console.log(tasks);
  return (
    <div className="">
      <header>
        <Headline
          title={"Your Work Sheet"}
          subTitle={"Help Us Track Your Work"}
        ></Headline>
        <Helmet>
          <title>Work Sheet || 71 Digital SIgn</title>
        </Helmet>
      </header>
      <form
        onSubmit={handleSubmit}
        className="card-body bg-muted-green bg-opacity-25 rounded-2xl w-full mx-auto grid grid-cols-2 md:grid-cols-4 "
      >
        {/* Tasks */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-color-text">Tasks</span>
          </label>
          <select
            defaultValue={"Pick a Task"}
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
            portalId="root"
          />
        </div>

        <div className="form-control  ">
          <label className="label">
            <span className="label-text text-color-text">Add Task</span>
          </label>
          <button className="input input-bordered bg-secondary border border-secondary hover:bg-muted-green hover:border-muted-green hover:text-color-text transition ease-in-out duration-300 font-medium text-lg md:text-xl text-white">
            Add Work
          </button>
        </div>
      </form>
      {/* table */}
      <section className="mt-7 md:mt-10">
        <Headline title={"Your Work History"}></Headline>
        <div>
          <div className="overflow-x-auto bg-muted-green bg-opacity-25 rounded-2xl w-full mx-auto p-6">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="">
                  <th className="text-center text-sm md:text-base text-color-text">
                    #
                  </th>
                  <th className="text-center text-sm md:text-base text-color-text">
                    Tasks
                  </th>
                  <th className="text-center text-sm md:text-base text-color-text">
                    Hours Worked
                  </th>
                  <th className="text-center text-sm md:text-base text-color-text">
                    Date{" "}
                  </th>
                  <th className="text-center text-sm md:text-base text-color-text">
                    Edit{" "}
                  </th>
                  <th className="text-center text-sm md:text-base text-color-text">
                    Delete{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {/* <tr className="bg-base-200">
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                  <td>Blue</td>
                  <td>Blue</td>
                </tr> */}
                {tasks.map((task, index) => (
                  <WorkSheetTableRow
                    key={task._id}
                    taskData={task}
                    index={index}
                    refetch={refetch}
                  ></WorkSheetTableRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkSheet;
