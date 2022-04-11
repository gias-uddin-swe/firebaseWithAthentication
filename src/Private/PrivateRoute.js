import { React } from "react";
import useFirebase from "./../Hooks/useFirebase";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "./Firebase.config";
import { getAuth } from "firebase/auth";

const PrivateRoute = ({ children }) => {
  const auth = getAuth(app);
  console.log(children);
  const [user] = useAuthState(auth);
  console.log(user);
  let location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
