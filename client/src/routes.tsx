import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./User/Login";
import Register from "./User/Register";
const Mainroutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register />} />
   
    </Routes>
  );
};

export default Mainroutes;
