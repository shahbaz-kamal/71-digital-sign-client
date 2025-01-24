import React from "react";
import { CiEdit } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";

const WorkSheetTableRow = ({ taskData, index }) => {
  const { _id, task, hoursWorked, date, email } = taskData;
  return (
    <tr>
      <th className="text-center">{index + 1}</th>
      <td className="text-center">{task}</td>
      <td className="text-center">{hoursWorked}</td>
      <td className="text-center">{date}</td>
      <td>
        <div className="flex justify-center ">
          <div className="bg-secondary bg-opacity-30 p-2 rounded-full text-neutral">
            <CiEdit size={20} />
          </div>
        </div>
      </td>
      <td>
        <div className="flex justify-center">
          <div className="bg-primary  p-2 rounded-full text-white">
            <FaTrashAlt size={20} />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default WorkSheetTableRow;
