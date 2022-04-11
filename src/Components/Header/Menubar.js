import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Menubar = () => {
  const { user, handleLogOut } = useFirebase();

  return (
    <div className="mt-2">
      <Link className="ms-2 p-2" to="/home">
        Home
      </Link>
      <span>{user?.displayName}</span>
      <Link className="ms-2 p-2" to="/about">
        About
      </Link>
      <Link className="ms-2 p-2" to="/admin">
        Admin
      </Link>

      <Link className="ms-2 p-2" to="/login">
        Login
      </Link>
      <Link className="ms-2 p-2" to="/register">
        Register
      </Link>
      <span onClick={handleLogOut}>Logout</span>

      <span></span>
    </div>
  );
};

export default Menubar;
