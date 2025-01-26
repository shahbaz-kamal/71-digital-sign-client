import React, { useState } from "react";
import { TbCoinTaka } from "react-icons/tb";
import PayRollModal from "./PayRollModal";
import { format } from "date-fns";

const PayRollTableRow = ({ index, singleData, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const {
    paymentId,
    month,
    year,
    employee_name,
    employee_email,
    employee_bankAccount,
    employee_salary,
    employee_profilePhoto,
    employee_designation,
    employee_isVerified,
    hr_name,
    hr_email,
    hr_profilePhoto,
    isAuthorized,
    trxId,
    authorizedBy,
  } = singleData;

  const handlePayButton = async () => {
    setSelectedData(singleData);
    setIsOpen(true);
  };
  console.log(selectedData);
  return (
    <>
      {" "}
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={employee_profilePhoto}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{employee_name}</div>
              <div className="text-sm opacity-50 flex items-center gap-1 text-primary font-bold">
                <span>Salary: {employee_salary}</span>{" "}
                <span>
                  <TbCoinTaka />
                </span>
              </div>
            </div>
          </div>
        </td>
        <td>{month}</td>
        <td>{year}</td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={hr_profilePhoto}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{hr_name}</div>
              <div className="text-sm opacity-50 flex items-center gap-1 text-primary font-bold">
                <span>Designation: HR</span>{" "}
              </div>
            </div>
          </div>
        </td>
        <td>{singleData?.paymentDate && format(new Date(singleData?.paymentDate), "PPpp")}</td>
        <th>
          <button
            onClick={handlePayButton}
            disabled={isAuthorized}
            className="btn btn-error  text-white"
          >
            Pay
          </button>
        </th>
      </tr>
      {selectedData && (
        <PayRollModal
          selectedData={selectedData}
          isOpen={isOpen}
          refetch={refetch}
          setIsOpen={setIsOpen}
        ></PayRollModal>
      )}
    </>
  );
};

export default PayRollTableRow;
