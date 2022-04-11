import * as React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Menubar from "./Components/Header/Menubar";
import Register from "./Components/Register/Register";
import Admin from "./Components/Admin/Admin";
import PrivateRoute from "./Private/PrivateRoute";
import useFirebase from "./Hooks/useFirebase";

function App() {
  const { user } = useFirebase();
  console.log(user);
  return (
    <div className="App">
      <Menubar></Menubar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
