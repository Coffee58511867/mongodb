import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="cont2">
      <h2 className="logo">Itravel</h2>
      <div className="links">
        <Link className="linkhome" to={"/"}>
          HOME
        </Link>
      


        <Link className="link2" to={"/login"}>
          <span className="span1">Log in</span>
        </Link>
        <Link className="link1" to={"/register"}>
          <span className="span1">Sign up</span>
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
