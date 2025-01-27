import React, { useState } from "react";
import { TbCoinTaka } from "react-icons/tb";
import PayRollModal from "./PayRollModal";

const PayrollCard = ({ index, cardData, refetch }) => {
  if (!cardData) {
    return;
  }
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
  } = cardData;
  console.log(cardData);
  const handlePayButton = async () => {
    setSelectedData(cardData);
    setIsOpen(true);
  };
  return (
    <div className="card bg-muted-red bg-opacity-25  shadow-xl p-6">
      <section className="mb-4">
        <h3 className="text-color-text font-bold mb-2">Employee Infomation:</h3>
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
      </section>
      <section className="mb-4">
        <h3 className="text-color-text font-bold mb-2">Requested By:</h3>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={hr_profilePhoto} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{hr_name}</div>
            <div className="text-sm opacity-50 flex items-center gap-1 text-primary font-bold">
              <span> HR</span>
            </div>
          </div>
        </div>
      </section>
      <h3 className="text-color-text font-bold mb-2">Payment For:</h3>
      <section className="flex justify-between mb-4">
        <span>{month}</span>
        <span>{year}</span>
      </section>
      <button
        onClick={handlePayButton}
        disabled={isAuthorized}
        className="btn btn-error text-white"
      >
        {isAuthorized ? "Paid" : "Pay"}
      </button>
      {selectedData && (
        <PayRollModal
          selectedData={selectedData}
          isOpen={isOpen}
          refetch={refetch}
          setIsOpen={setIsOpen}
        ></PayRollModal>
      )}
    </div>
  );
};

export default PayrollCard;
