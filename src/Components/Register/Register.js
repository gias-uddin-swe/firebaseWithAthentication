import React, { useState } from "react";
import "./Register.css";
import loginIMg from "../../images/login.png";
import useFirebase from "./../../Hooks/useFirebase";

const Register = () => {
  const { signUpWithEmailAndPass } = useFirebase();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = () => {
    if (email && password) {
      signUpWithEmailAndPass(name, email, password);
    } else {
      alert("Please enter  email or password");
    }
  };
  return (
    <div className="mt-5 container">
      <h1 className="title">Register</h1>
      <div className="row  d-flex justify-content-center">
        <div className="col-md-6">
          <img className="w-100" src={loginIMg} alt="" />
        </div>
        <div className="col-md-6 p-3">
          <div className="login-area">
            <div className="login-box">
              <input
                onChange={(e) => setName(e.target.value)}
                className="input-field"
                type="text"
                placeholder="Enter Name"
              />
              <br />
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
              <p className="text-primary mt-2">already have an account ?</p>
              <button onClick={handleRegister} className="register-btn btn">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
