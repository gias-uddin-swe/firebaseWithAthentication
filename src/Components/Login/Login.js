import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "./../../Hooks/useFirebase";
import loginIMg from "../../images/login.png";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  const { signInWithEmailAndPassword } = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log("hoice");
    if (email && password) {
      signInWithEmailAndPassword(email, password);
    } else {
      alert("Please enter  email or password");
    }
  };
  return (
    <div className="mt-5 container">
      <h1>Login Page</h1>
      <div className="row">
        <div className="col-md-6">
          <img className="w-100" src={loginIMg} alt="" />
        </div>
        <div className="col-md-6">
          <div className="login">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              type="email"
              placeholder="Enter Email"
            />
            <br />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              type="password"
              placeholder="Enter Password"
            />
            <br />
          </div>
          <div className="d-flex justify-content-center p-1">
            <p className="text-primary mt-2 me-2">are you new ?</p>
            <p className="text-danger ms-3 mt-2">Forget Password ?</p>
          </div>
          <button onClick={handleLogin} className="btn btn-primary mt-2">
            Login
          </button>
          <br />
          <button className="mt-2 btn btn-info" onClick={signInWithGoogle}>
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
