import React from "react";
import { FaCheckDouble } from "react-icons/fa";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import { usePaymentContext } from "../../LayOuts/DashboardLayOut";

const MessageCard = ({ message, refetch,index }) => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const { refetchMessage } = usePaymentContext();
  const handleMarkAsRead = async (_id) => {
    console.log(_id);
    try {
      const res = await axiosSecure.patch(`message/update/${_id}`, {
        email: user?.email,
      });
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${message.subject} Is Marked As Read`,
          showConfirmButton: false,
          timer: 3000,
        });
        refetch();
        refetchMessage();
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `${error.message}`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  return (
    <div 
      key={message._id}
      className={`p-6 rounded-lg border shadow-md hover:shadow-lg transition duration-300  ease-in-out bg-muted-green bg-opacity-25`}
    >
      <h3 className="text-color-text font-bold text-xl md:text-2xl mb-1">{index+1}. {message.subject}</h3>
      <p className="text-sm md:text-base text-color-text opacity-70">
        {message.name} | {message.email}
      </p>
      <p className="mt-3 text-color-text text-base md:text-xl">{message.message}</p>
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => handleMarkAsRead(message._id)}
          className="btn btn-error bg-primary border border-primary  transition ease-in-out duration-300 font-medium text-lg md:text-xl text-white "
          disabled={message.isRead}
        >
          {message.isRead ? "Read" : "Mark as Read"}
        </button>
        <div>
          {message.isRead ? (
            <FaCheckDouble size={22} color="#00a651" />
          ) : (
            <FaCheckDouble size={22} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
