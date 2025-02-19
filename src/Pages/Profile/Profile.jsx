import React, { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import UseSingleUserData from "../../Hooks/UseSingleUserData";
import covorPhoto from "../../assets/profile_cover.webp";
import ProfileModal from "./ProfileModal";
import { Helmet } from "react-helmet";
const Profile = () => {
  const { user } = UseAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { userData, refetch } = UseSingleUserData();
  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <div className="flex flex-col items-center min-h-screen ">
      {/* Cover Photo */}
      <Helmet>
        <title> User Profile || 71 Digital SIgn</title>
      </Helmet>
      <div className="w-full lg:w-[70%] xl:w-[80%] relative rounded-lg">
        <img
        
          src={covorPhoto}
          alt="Cover"
          className="w-full h-48 md:h-64 object-cover rounded-lg"
        />
        <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2">
          {/* Profile Photo */}
          <img
           
            src={userData?.profilePhoto || "https://via.placeholder.com/150"}
            alt={userData?.name || "User"}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-background object-cover"
          />
        </div>
      </div>

      {/* User Info */}
      <div  className="mt-16 text-center">
        <h1 className="text-xl md:text-2xl font-bold text-color-text">
          {userData?.name || "Name not available"}
        </h1>
        <p className="text-neutral">{userData?.designation || "Designation"}</p>
        <p className="text-neutral">
          <span className="capitalize font-medium">
            {userData?.role || "Role"}
          </span>
        </p>
        {userData.role !== "admin" && (
          <p className="text-neutral">
            Status from HR :
            <span
              className={`font-bold ${
                userData?.isVerified === true
                  ? "text-secondary"
                  : userData?.isVerified === false
                  ? "text-primary"
                  : "text-muted-red"
              }`}
            >
              {userData?.isVerified && " Verified"}
              {userData?.isVerified || " Not Verified"}
            </span>
          </p>
        )}
      </div>

      {/* Additional Info */}
      <div className="mt-6 bg-secondary bg-opacity-25 shadow-md rounded-lg p-4 w-full md:w-3/4 lg:w-1/2">
        <h2 className="text-lg font-bold text-color-text mb-4">User Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-color-text">
              <span className="font-semibold">Email:</span> {userData?.email}
            </p>
          </div>
          <div>
            <p className="text-color-text">
              <span className="font-semibold">Bank Account:</span>{" "}
              {userData?.bankAccount}
            </p>
          </div>
          <div>
            <p className="text-color-text">
              <span className="font-semibold">Salary:</span> {userData?.salary}
            </p>
          </div>
          <div>
            <p className="text-color-text">
              <span className="font-semibold">Joined On:</span>{" "}
              {new Date(userData?.timeStamp).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Update Profile Button */}
      <div className="mt-6 pb-6">
        <button
          onClick={handleClick}
          className="px-6 py-2 btn btn-error rounded-lg bg-primary  font-semibold shadow-md   transition-all text-white"
        >
          Update Profile
        </button>
      </div>
      {/* modal for updating profile */}
      <div>
        {userData && (
          <ProfileModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            userData={userData}
            refetch={refetch}
          ></ProfileModal>
        )}
      </div>
    </div>
  );
};

export default Profile;
