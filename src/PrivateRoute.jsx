import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { auth } from "./Firebase";

const PrivateRoute = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) return <MoonLoader color="#36d7b7" />;

  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
