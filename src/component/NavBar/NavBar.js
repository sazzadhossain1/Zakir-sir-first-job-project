import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import mainLogo from "../../images/logo-one.jpg";
import mainLogo1 from "../../images/logo-two.jpg";

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
                  <a>Company</a>
                  <ul className="p-2">
                    <li>
                      <Link to="/safety"> Safety</Link>
                    </li>
                    <li>
                      <Link to="/faq">Faq</Link>
                    </li>
                    <li>
                      <Link to="/help">Help</Link>
                    </li>
                    <li>
                      <Link to="/aboutUs">AboutUs</Link>
                    </li>
                    <li>
                      <Link to="/howTripShipWork">How Trip Ship Task Work</Link>
                    </li>
                    <li>
                      <Link to="/media">Media</Link>
                    </li>
                    <li>
                      <Link to="/careers">Careers</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link>Service</Link>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link>Help</Link>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/webMail">Web Mail</Link>
                </li>
                <li>
                  <a>More</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
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
                <img className="mainLogo-img" src={mainLogo1} alt="" />
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Company</summary>
                  <ul className="p-2">
                    <li>
                      <Link to="/safety"> Safety</Link>
                    </li>
                    <li>
                      <Link to="/faq">Faq</Link>
                    </li>
                    <li>
                      <Link to="/help">Help</Link>
                    </li>
                    <li>
                      <Link to="/aboutUs">AboutUs</Link>
                    </li>
                    <li>
                      <Link to="/howTripShipWork">How Trip Ship Task Work</Link>
                    </li>
                    <li>
                      <Link to="/media">Media</Link>
                    </li>
                    <li>
                      <Link to="/careers">Careers</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Service</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>help</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/webMail">Web Mail</Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>
                    More <span>◉</span>
                  </summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
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
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-1">
              <li tabIndex={0}>
                <details>
                  <summary>Eng</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
