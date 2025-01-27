import React from "react";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Headline from "../../Shared/Headline";
import MessageCard from "./MessageCard";

const Messages = () => {
  const axiosSecure = UseAxiosSecure();
  const { data: messages = [], refetch } = useQuery({
    queryKey: ["client-messsage"],
    queryFn: async () => {
      const res = await axiosSecure("messages");
      return res.data;
    },
  });

  return (
    <div className="container mx-auto p-4">
      <header>
        <Headline
          title={"Messages"}
          subTitle={"Messages Received from Clients"}
        />
      </header>
      <div className="mt-6 space-y-4">
        {messages.map((message,index) => (
          <MessageCard
            key={message._id}
            message={message}
            refetch={refetch}
            index={index}
          ></MessageCard>
        ))}
      </div>
    </div>
  );
};

export default Messages;
