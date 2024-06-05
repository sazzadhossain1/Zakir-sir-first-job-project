import React, { useState } from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";

import mainLogo1 from "../../images/logo-two.jpg";

const NavigationBar = () => {
  const homeUi = document.getElementById("parent-home-page-child-div");
  console.log(homeUi);

  let [state, setState] = useState({ clicked: false });
  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  const handleBlur = () => {
    console.log("btn clicked");
  };
  const handleBlurClose = () => {
    console.log("Blur end");
  };
  return (
    <div className=" nav-parent-div">
      <nav className="NavbarItems container">
        <div onClick={handleClick} className="menu-icons">
          {state.clicked ? (
            <i onClick={handleBlurClose} className="fas fa-times"></i>
          ) : (
            <i onClick={handleBlur} className="fas fa-bars"></i>
          )}

          {/* <i className={state.clicked ? timeIcon : barsIcon}></i> */}
        </div>
        <img className="nav-logo" src={mainLogo1} alt="" />
        <div className="ul-parent-div">
          <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
            <li className="nav-link">
              <Link className="img-span-flex">
                <span>Food</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link className="img-span-flex">
                <span>Shop</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link className="img-span-flex">
                <span>Rental</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link className="img-span-flex">
                <span>Education</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link className="img-span-flex">
                <span>Health</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link className="img-span-flex">
                <span>Works</span>
              </Link>
            </li>
            <li className="nav-link">
              <Link className="img-span-flex">
                <span>Works</span>
              </Link>
            </li>
            <div>
              <Link>Login</Link>
              <Link>SignUp</Link>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
