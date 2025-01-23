import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";
import {
    GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const axiosPublic = UseAxiosPublic();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

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
        // get token and store client
        const userInfo = { email: currentUser.email };
        // axiosPublic.post('/jwt', userInfo)
        //     .then(res => {
        //         if (res.data.token) {
        //             localStorage.setItem('access-token', res.data.token);
        //             setLoading(false);
        //         }
        //     })
        setLoading(false);
      } else {
        // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
        // localStorage.removeItem('access-token');
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
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
