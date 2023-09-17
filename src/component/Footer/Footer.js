import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-parent-div">
      <div>
        <div className="ourAchievement-div">
          <h1 className="ourAchievement-heading">Our Achievement</h1>
          <p className="ourAchievement-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
        <div className="footer-grid-div">
          <div className="border-div">
            <div className="footer-logo-div">
              <div className="logo">
                <i className="fa-solid fa-car i"></i>
              </div>
              <p className="footer-number-k">30K+</p>
            </div>
            <h3 className="footer-cart-heading">Experience</h3>
            <p className="footer-cart-p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Pariatur, ad!
            </p>
          </div>
          <div className="border-div">
            <div className="footer-logo-div">
              <div className="logo">
                <i class="fa-solid fa-users i"></i>
              </div>
              <p className="footer-number-k">300K+</p>
            </div>
            <h3 className="footer-cart-heading">Experience</h3>
            <p className="footer-cart-p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Pariatur, ad!
            </p>
          </div>
          <div className="footer-cart-div">
            <div className="footer-logo-div">
              <div className="logo">
                <i class="fa-solid fa-car i"></i>
              </div>
              <p className="footer-number-k">50K+</p>
            </div>
            <h3 className="footer-cart-heading">Experience</h3>
            <p className="footer-cart-p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Pariatur, ad!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
