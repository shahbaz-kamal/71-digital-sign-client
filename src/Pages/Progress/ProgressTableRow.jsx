import { format } from "date-fns";
import React from "react";

const ProgressTableRow = ({ item, index }) => {
  return (
    <tr className="text-sm md:text-base text-color-text">
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={item.profilePhoto}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{item.name}</div>
            <div className="text-sm opacity-50 italic text-blue-800 font-bold">
              {item.email}
            </div>
          </div>
        </div>
      </td>
      <td>{item.task}</td>
      <td>{item.hoursWorked}</td>
      <th>
        <p>{format(new Date(item.date), "PP")}</p>
      </th>
    </tr>
  );
};

export default ProgressTableRow;
