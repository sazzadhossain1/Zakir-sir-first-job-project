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
            Address: 218 Sahera Tropical Center 5th Floor ( Lift 05) , Suite- 20
            Elephant Road , Bata Signal Dhaka 1205 Bangladesh.
          </p>
          <p className="footer-p">
            Another Location: RUAP, Mollika 605, Uttara 18, Dhaka 1230
          </p>
          <p className="footer-p">support@tripshiptask.com</p>
          <p className="footer-p">Contact Number: 8801793596432</p>
        </div>
        {/*  */}
        <div className="footer-single-cart-div footer-border">
          <h3 className="footer-heading">COMPANY</h3>
          <p className="footer-p">
            <Link to="/safety"> Safety</Link>
          </p>
          <p className="footer-p">
            <Link to="/faq">Faq</Link>
          </p>
          <p className="footer-p">
            <Link to="/help">Help</Link>
          </p>
          <p className="footer-p">
            <Link to="/aboutUs">AboutUs</Link>
          </p>
          <p className="footer-p">
            <Link to="/howTripShipWork">How Trip Ship Task Work</Link>
          </p>
          <p className="footer-p">
            <Link to="/media">Media</Link>
          </p>
          <p className="footer-p">
            <Link to="/careers">Careers</Link>
          </p>
        </div>
        {/*  */}
        <div className="footer-single-cart-div footer-border">
          <h3 className="footer-heading">QUICK LINK</h3>
          <p className="footer-p">
            <Link to="/blog">Blog</Link>
          </p>
          <p className="footer-p">
            <Link to="/webMail">Web Mail</Link>
          </p>
        </div>
        {/*  */}
        <div className="footer-single-cart-div footer-border-2">
          <h3 className="footer-heading">COUNTRIES</h3>
          <p>Bangladesh</p>

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
      </div>
    </div>
  );
};

export default Footer;
