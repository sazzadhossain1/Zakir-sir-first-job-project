import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

import tipShipTaskLogo from "../../images/logo/tipShipTaskLogo.jpg";

const NavBar = () => {
  return (
    <div>
      <div className="first_nav_div">
        <p className="nav_first_header_p">
          Download the Mobile App 'TripShipTask' from the Play Store
        </p>
      </div>
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
                    <Link to="/aboutUs">About</Link>
                  </li>
                  <li>
                    <Link to="/home">Safety</Link>
                  </li>
                  <li>
                    <Link to="/home">Career</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>

                  <div className="login-signUp-div">
                    <Link
                      className="login-btn"
                      to="https://app.tripshiptask.com/web/login"
                    >
                      <button className="login">Login</button>
                    </Link>
                    <Link
                      className="signUp-btn"
                      to="https://app.tripshiptask.com/web/signup"
                    >
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
                  <Link to="/aboutUs">About</Link>
                </li>
                <li>
                  <Link to="/home">Safety</Link>
                </li>
                <li>
                  <Link to="/home">Career</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>

                <div className="login-signUp-div">
                  <Link
                    className="login-btn"
                    to="https://app.tripshiptask.com/web/login"
                  >
                    <button className="login">Login</button>
                  </Link>
                  <Link
                    className="signUp-btn"
                    to="https://app.tripshiptask.com/web/signup"
                  >
                    <button className="signUp">SignUp</button>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
