import UseAuth from "./UseAuth";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";

const UseRole = () => {
  const { user, loading } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const { data: role = "" } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`role/${user?.email}`);
      console.log(res.data.role);
      return res.data.role;
    },
  });

  return { role };
};

export default UseRole;
