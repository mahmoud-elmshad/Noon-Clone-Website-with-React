import React, { useEffect, useState, createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  deleteUser,
} from "firebase/auth";
import { Oval } from "react-loader-spinner";
import { auth } from "./firebase";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  function signUp(email, pasword) {
    return createUserWithEmailAndPassword(auth, email, pasword);
  }
  function logIn(email, pasword) {
    return signInWithEmailAndPassword(auth, email, pasword);
  }
  function forgetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }
  function logOut() {
    return signOut(auth);
  }
  function userRemove() {
    return deleteUser(user);
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  if (loading)
    return (
      <div className="d-flex justify-content-center my-5">
        <Oval color="#00BFFF" height={80} width={80} />
      </div>
    );

  return (
    <AuthContext.Provider
      value={{ user, signUp, logIn, logOut, forgetPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export function useAuth() {
  return useContext(AuthContext);
}
