import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-parent-div">
      <div className="footer-grid-div">
        <div className="footer-single-cart-div">
          <img
            className="footer-first-logo"
            src="https://pathao.com/wp-content/uploads/2019/03/Pathao-logo-inverted.png"
            alt=""
          />
          <p>
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
        <div>
          <h3>NAVIGATION</h3>
          <p>Home</p>
          <p>Page</p>
          <p>About Us</p>
          <p>Service</p>
          <p>Help</p>
        </div>
        {/*  */}
        <div>
          <h3>QUICK LINK</h3>
          <p>Contact Us</p>
          <p>FAQs</p>
          <p>Blog</p>
          <p>Gallery</p>
          <p>Pricing</p>
        </div>
        {/*  */}
        <div>
          <h3>WORK HOURS</h3>
          <p>
            <i class="fa-regular fa-clock"></i> 7AM-5PM, Mon - Sat
          </p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Link>
            <i class="fa-solid fa-phone"></i>
            <button>Call us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
