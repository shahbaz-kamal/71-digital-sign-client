import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";
import { format } from "date-fns";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import TaskUpdateModal from "./TaskUpdateModal";

const WorkSheetTableRow = ({ taskData, index, refetch }) => {
  const axiosSecure = UseAxiosSecure();
  const { _id, task, hoursWorked, date, email } = taskData;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const handleEdit = () => {
    setSelectedTask(taskData); // Set the selected task
    setIsModalOpen(true); // Open the modal
  };
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`work-sheet/${id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };
  return (
    <>
      <tr>
        <th className="text-center text-color-text text-sm md:text-base">
          {index + 1}
        </th>
        <td className="text-center text-color-text text-sm md:text-base">
          {task}
        </td>
        <td className="text-center text-color-text text-sm md:text-base">
          {hoursWorked}
        </td>
        <td className="text-center text-color-text text-sm md:text-base">
          {format(new Date(date), "PP")}
        </td>
        <td>
          <div className="flex justify-center ">
            <div
              onClick={handleEdit}
              className="bg-secondary bg-opacity-30 p-2 rounded-full text-neutral"
            >
              <CiEdit size={20} />
            </div>
          </div>
        </td>
        <td>
          <div className="flex justify-center">
            <div
              onClick={() => handleDelete(_id)}
              className="bg-primary  p-2 rounded-full text-white"
            >
              <FaTrashAlt size={20} />
            </div>
          </div>
        </td>
      </tr>
      {selectedTask && (
        <TaskUpdateModal
          taskData={selectedTask}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          refetch={refetch}
        />
      )}
    </>
  );
};

export default WorkSheetTableRow;
