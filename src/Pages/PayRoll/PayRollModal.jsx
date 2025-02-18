import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckOutForm";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const PayRollModal = ({ isOpen, setIsOpen, selectedData, refetch }) => {
  console.log(selectedData);
  return (
    <dialog open={isOpen} className="modal">
      <div className="modal-box  ">
        <form className="card-body   rounded-2xl w-full mx-auto grid grid-cols-1 ">
          {/* Salary worked */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-color-text">Employee Name</span>
            </label>
            <input
              value={selectedData.employee_name}
              name="name"
              type="text"
              className="input input-bordered"
              required
            />
          </div>
          {/* Salary  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-color-text">Salary</span>
            </label>
            <input
              value={selectedData.employee_salary}
              name="salary"
              type="number"
              className="input input-bordered"
              required
            />
          </div>

          {/* date */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-color-text">Card Information</span>
            </label>
            <Elements stripe={stripePromise}>
                {/* form component */}
                <CheckoutForm setIsOpen={setIsOpen} selectedData={selectedData} refetch={refetch}></CheckoutForm>
            </Elements>
          </div>

          {/* <div className="form-control mt-4 ">
            <button className=" btn btn-error text-white">Pay</button>
          </div> */}
        </form>
        <div className="modal-action">
          <form method="dialog">
 
            <button
              onClick={() => setIsOpen(false)}
              className="btn btn-error text-white bg-primary"
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default PayRollModal;
