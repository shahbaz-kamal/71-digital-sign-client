import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import UseAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";


import UseRole from "../Hooks/UseRole";
import { usePaymentContext } from "../LayOuts/DashboardLayOut";

const NavbarDashboard = () => {
  const {
    refreshedPaymentRequestData,
    refreshedMessageData,
    handleShowDashNav,
    handleHideDashNav,
    setShowDashboardNav,
    showDashboardNav,
  } = usePaymentContext();

  // messageData

  const axiosSecure = UseAxiosSecure();
  // const [userData, setUserData] = useState({});
  const { user, logOutUser, userData, setUserData, setLoading } = UseAuth();

  const navigate = useNavigate();
  const [shhowLogOutBtn, setShowLogOutBtn] = useState(false);

  const handleLogOut = async () => {
    // navigate("/");
    logOutUser().then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Log Out Successfull",
        showConfirmButton: false,
        timer: 1500,
      });
      setLoading(false);
      navigate("/");
    });
  };

  // for navbar
  const fetchUserData = async (email) => {
    const res = await axiosSecure.get(`/user/${email}`);
    setUserData(res.data);
  };

  if (user && user?.email) {
    useEffect(() => {
      fetchUserData(user?.email);
    }, [user]);
  }
  const { role } = UseRole();
  //   console.log(userData);

  return (
    <div className=" w-full">
      <nav className="flex  mx-auto items-center justify-start  px-2 md:px-0 ">
       
        {/* navbar end */}
        <div className="flex items-center justify-center">
          {/* User Photo */}
          {user && user?.email ? (
            <div
              onClick={() => setShowLogOutBtn(!shhowLogOutBtn)}
              className="flex flex-col items-center justify-center w-12 h-12 ml-2 relative"
            >
              {/* Profile Image */}
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  className="w-full h-full object-cover block mx-auto"
                  src={userData.profilePhoto}
                  alt="User Profile"
                />
              </div>
            </div>
          ) : (
            ""
          )}
           {shhowLogOutBtn && (
              <button
                onClick={handleLogOut}
                className=" text-base md:text-lg py-2 border border-primary rounded-xl px-5 hover:bg-primary hover:text-white transition duration-300 ease-in-out font-semibold ml-2"
              >
                Log Out
              </button>
            )}
        </div>
      </nav>
    </div>
  );
};

export default NavbarDashboard;
