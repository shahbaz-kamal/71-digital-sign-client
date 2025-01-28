import React from 'react';
import UseAuth from './UseAuth';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UseSingleUserData = () => {
   const {user}=UseAuth()
   const axiosSecure=UseAxiosSecure()


   const {data:userData={},refetch}=useQuery({
    queryKey:['singleData',user?.email],
    queryFn: async()=>{
        const res=await axiosSecure.get(`user/${user?.email}`)
        return res.data
    }
   })
   return {userData,refetch}
};

export default UseSingleUserData;