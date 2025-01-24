import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const axiosPublic = UseAxiosPublic();

  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // *for token

  // *creating user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // *updating user
  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // *sign in with email & password

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // *sign in with Google

  const googleSignInUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // *log out
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   *onauth state changed
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        console.log("Current User ------> ", currentUser);
        // get token and storing in the local storage
        const userInfo = { email: currentUser.email };
        axiosPublic.post("jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });

        // axiosPublic.post('/jwt', userInfo)
        //     .then(res => {
        //         if (res.data.token) {
        //             localStorage.setItem('access-token', res.data.token);
        //             setLoading(false);
        //         }
        //     })
        setLoading(false);
      } else {
        //  remove token and log out user  (if token stored in the client side)
        // localStorage.removeItem('access-token');
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [axiosPublic]);
  const authInfo = {
    logOutUser,
    googleSignInUser,
    signInUser,
    updateUser,
    createUser,
    setLoading,
    loading,
    setUser,
    user,
    userData,
    setUserData,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
