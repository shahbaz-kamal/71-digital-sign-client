import UseAuth from "./UseAuth";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";

const UseRole = () => {
  const { user, loading: authLoading } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const { data: role = "", isLoading: roleLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !authLoading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`role/${user?.email}`);
      console.log(res.data.role);
      return res.data.role;
    },
  });

  return { role, roleLoading };
};

export default UseRole;
