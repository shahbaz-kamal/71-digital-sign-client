import React from "react";
import Headline from "../../Shared/Headline";
import UseAuth from "../../Hooks/UseAuth";
import UseSingleUserData from "../../Hooks/UseSingleUserData";
import Loading from "../../Shared/Loading";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { LuUsers } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { GrServices } from "react-icons/gr";
import { MdPercent } from "react-icons/md";
import { TiContacts } from "react-icons/ti";

const Overview = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const { userData, refetch } = UseSingleUserData();
  console.log(userData);

  //   getting all user data
const { data: allUser } = useQuery({
    queryKey: ["all user data", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get("all-users");
      return res.data;
    },
  });
//   getting servicedata
 const { data: services = [] } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosSecure.get("services");
      return res.data;
    },
  });
//   getting messages

const { data: contactsData = [] } = useQuery({
    queryKey: ["messages-all"],
    queryFn: async () => {
      const res = await axiosSecure.get("messages");
      return res.data;
    },
  });
  if (!userData && !services) {
    return <Loading></Loading>;
  }
  return (
    <div className="min-h-screen">
      <header>
        <Headline
          title={"Overview"}
          subTitle={"Analytics & Insights"}
        ></Headline>
      </header>
      {/* top row */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* welcome div */}
        <div className="col-span-1 p-6 flex flex-col-reverse xl:flex-row bg-secondary bg-opacity-25 rounded-md xl:justify-between justify-center items-center xl:items-start">
          <div className="flex flex-col h-full">
            <p className="text-base md:text-lg font-medium text-center xl:text-start">Welcome,</p>{" "}
            <h3 className="font-bold text-secondary text-center xl:text-start ">
              {user?.displayName?.split(" ")[0]}
            </h3>
            <div className="flex-grow"></div>
            <Link to={"/dashboard/profile"}>
            
              <button className="mt-4 btn btn-error bg-primary text-white text-base ">
                Update Profile
              </button>
            </Link>
          </div>
          <div className="w-12 h-12">
            <img
              className="w-full h-full object-cover rounded-full"
              src={userData.profilePhoto}
              alt=""
            />
          </div>
        </div>
        {/* stat div */}
        <div className="md:col-span-3 p-6 flex flex-col bg-secondary bg-opacity-25 rounded-md justify-between ">
          <div className="flex justify-between mb-3">
            <h3 className="text-base md:text-lg font-medium">Statistics</h3>
            <p>{format(new Date(), "PP")}</p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {/* first stat */}
            <div className="flex gap-2 col-span-2 2xl:col-span-1">
              <div className="flex items-center justify-center bg-primary bg-opacity-20 text-primary rounded-md p-3">
                <LuUsers size={27} />
              </div>
              <div>
                <p className="font-medium text-color-text text-base md:text-lg">
                  Users
                </p>
                <p className="font-medium text-color-text opacity-80">
                  {allUser?.length}
                </p>
              </div>
            </div>
            {/* second stat:all services */}
            <div className="flex gap-2 col-span-2 2xl:col-span-1">
              <div className="flex items-center justify-center bg-primary bg-opacity-20 text-primary rounded-md p-3">
                <GrServices size={27} />
              </div>
              <div>
                <p className="font-medium text-color-text text-base md:text-lg">
                 Services
                </p>
                <p className="font-medium text-color-text opacity-80">
                  {services?.length}
                </p>
              </div>
            </div>
            {/* second stat:all Conversion Rate */}
            <div className="flex gap-2 col-span-2 2xl:col-span-1">
              <div className="flex items-center justify-center bg-primary bg-opacity-20 text-primary rounded-md p-3">
                <MdPercent size={27} />
              </div>
              <div>
                <p className="font-medium text-color-text text-base md:text-lg">
                 Conversion Rate
                </p>
                <p className="font-medium text-color-text opacity-80">
                  96%
                </p>
              </div>
            </div>
            {/* second stat:all Conversion Rate */}
            <div className="flex gap-2 col-span-2 2xl:col-span-1">
              <div className="flex items-center justify-center bg-primary bg-opacity-20 text-primary rounded-md p-3">
                <TiContacts size={27} />
              </div>
              <div>
                <p className="font-medium text-color-text text-base md:text-lg">
                New Contacts
                </p>
                <p className="font-medium text-color-text opacity-80">
                 {contactsData?.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
