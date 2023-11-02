import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import mainLogo from "../../images/logo-one.jpg";
import mainLogo1 from "../../images/logo-two.jpg";
import tipShipTaskLogo from "../../images/logo/tipShipTaskLogo.jpg";

const NavBar = () => {
  return (
    <div className="navbar-main-parent-div">
      <div className="navbar-parent-dvi">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/home">About</Link>
                </li>
                <li>
                  <Link to="/home">Safety</Link>
                </li>
                <li>
                  <Link to="/home">Career</Link>
                </li>
                <li>
                  <Link to="/home">FAQ</Link>
                </li>

                <div className="login-signUp-div">
                  <Link className="login-btn" to="/login">
                    <button className="login">Login</button>
                  </Link>
                  <Link className="signUp-btn" to="/signUp">
                    <button className="signUp">SignUp</button>
                  </Link>
                </div>
              </ul>
            </div>
            <div className="logo-div">
              <Link to="/home" className="btn btn-ghost normal-case text-xl ">
                <img className="mainLogo-img" src={tipShipTaskLogo} alt="" />
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="nav-ul menu menu-horizontal px-1">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/home">About</Link>
              </li>
              <li>
                <Link to="/home">Safety</Link>
              </li>
              <li>
                <Link to="/home">Career</Link>
              </li>
              <li>
                <Link to="/home">FAQ</Link>
              </li>

              <div className="login-signUp-div">
                <Link className="login-btn" to="/login">
                  <button className="login">Login</button>
                </Link>
                <Link className="signUp-btn" to="/signUp">
                  <button className="signUp">SignUp</button>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
