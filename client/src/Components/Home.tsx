import React from 'react'
import {  Link } from "react-router-dom";
import Navbar from './Navbar';
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="cont">
        <div className="logo1">
          <h1 className="head">
            <img src="/Assets/Images/Frame.svg" className="image4" alt="" />
            travel
          </h1>

          <p className="slogan">A ride at palm</p>
          <p className="slogan"> of your hand</p>
          <div className="start">
            <p className="start1"></p>
            <Link className="start1" to={"/login"}>
              Get Started
            </Link>
          </div>
        </div>
        <img src="/Assets/Images/home.svg" className="image2" alt="" />
      </div>
    </>
  );
};

export default Home;
