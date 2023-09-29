import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import mainLogo from "../../images/logo-one.jpg";
import mainLogo1 from "../../images/logo-two.jpg";

const Footer = () => {
  return (
    <div className="footer-parent-div">
      <div className="footer-grid-div">
        <div className="footer-single-cart-div footer-border">
          <img className="footer-first-logo" src={mainLogo} alt="" />
          <p className="footer-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="footer-logo-parent-grid-div">
            <div className="footer-child-logo-div">
              <i class="fa-brands fa-facebook"></i>
            </div>
            <div className="footer-child-logo-div">
              <i class="fa-brands fa-twitter"></i>
            </div>
            <div className="footer-child-logo-div">
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="footer-single-cart-div footer-border">
          <h3 className="footer-heading">COMPANY</h3>
          <p className="footer-p">Home</p>
          <p className="footer-p">Page</p>
          <p className="footer-p">About Us</p>
          <p className="footer-p">Service</p>
          <p className="footer-p">Help</p>
        </div>
        {/*  */}
        <div className="footer-single-cart-div footer-border">
          <h3 className="footer-heading">QUICK LINK</h3>
          <p className="footer-p">Contact Us</p>
          <p className="footer-p">FAQs</p>
          <p className="footer-p">Blog</p>
          <p className="footer-p">Gallery</p>
          <p className="footer-p">Pricing</p>
        </div>
        {/*  */}
        <div className="footer-single-cart-div footer-border-2">
          <h3 className="footer-heading">COUNTRIES</h3>
          <p>Bangladesh</p>
          <p className="footer-p-and-i">
            <i class="fa-regular fa-clock footer-i"></i>
            <span className="footer-p">7AM-5PM, Mon - Sat</span>
          </p>
          <p className="footer-p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link className="footer-callUs-button">
            <i class="fa-solid fa-phone"></i>
            <button>Support</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
