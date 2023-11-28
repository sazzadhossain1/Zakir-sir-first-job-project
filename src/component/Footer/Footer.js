import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import mainLogo from "../../images/logo-one.jpg";
import mainLogo1 from "../../images/logo-two.jpg";
import logoThree from "../../images/logo_Three.png";

const Footer = () => {
  return (
    <div className="footer-parent-div">
      <div className="footer-grid-div">
        <div className="footer-single-cart-div footer-border">
          <img className="footer-first-logo" src={logoThree} alt="" />

          <p className="Office-p">
            Office: RUAP, Mollika 605, Uttara 18, Dhaka 1230
          </p>

          <p className="Office-p">
            Office: 218 Sahera Tropical Center 5th Floor ( Lift 05) , Suite- 20
            Elephant Road , Bata Signal Dhaka 1205 Bangladesh.
          </p>
          <p className="Office-p">
            <i class="fa-solid fa-envelope"></i> support@tripshiptask.com
          </p>
          <p className="Office-p">
            <i class="fa-brands fa-whatsapp"></i> &nbsp;
            <i class="fa-solid fa-phone"></i>&nbsp; 880132 780 8821
          </p>
        </div>
        {/*  */}
        <div className="footer-single-cart-div footer-border">
          <h3 className="footer-heading">COMPANY</h3>
          <p className="footer-p">
            <Link to="/aboutUs">About</Link>
          </p>
          <p className="footer-p">
            <Link to="/safety"> Safety</Link>
          </p>
          <p className="footer-p">
            <Link to="/careers">Careers</Link>
          </p>
          <p className="footer-p">
            <Link to="/faq">FAQ</Link>
          </p>
        </div>
        {/*  */}
        <div className="footer-single-cart-div footer-border">
          <h3 className="footer-heading">QUICK LINK</h3>
          <p className="footer-p">
            <Link target="_blank" to="https://app.tripshiptask.com/pages/terms">
              Terms
            </Link>
          </p>
          <p className="footer-p">
            <Link
              target="_blank"
              to="https://app.tripshiptask.com/pages/privacy"
            >
              Privacy policy
            </Link>
          </p>
          <p className="footer-p">
            <Link target="_blank" to="https://app.tripshiptask.com/pages/data">
              Data policy
            </Link>
          </p>
          <p className="footer-p">
            <Link
              target="_blank"
              to="https://app.tripshiptask.com/pages/cookies"
            >
              Cookies policy
            </Link>
          </p>
          <p className="footer-p">
            <Link target="_blank" to="https://app.tripshiptask.com/pages/aup">
              Acceptable Use
            </Link>
          </p>
          <p className="footer-p">
            <Link
              target="_blank"
              to="https://app.tripshiptask.com/pages/copyright"
            >
              Copyright Policy
            </Link>
          </p>
          <Link to="/chargePoints">
            <p className="footer-p">Charge Points</p>
          </Link>
          <Link to="/securityDeposit">
            <p className="footer-p">Security Deposit</p>
          </Link>
        </div>
        {/*  */}
        <div className="footer-single-cart-div footer-border-2">
          <h3 className="footer-heading">COUNTRIES</h3>
          <p className="bangladesh">Bangladesh</p>

          <div>
            <div className="media_flex_div">
              <Link
                target="_blank"
                to="https://web.facebook.com/profile.php?id=100063669755190&_rdc=1&_rdr"
              >
                Facebook Page
              </Link>
              <i class="fa-brands fa-facebook media_icon"></i>
            </div>
            <div className="media_flex_div">
              <Link
                target="_blank"
                to="https://web.facebook.com/groups/2814072982035339/?_rdc=1&_rdr"
              >
                BD Facebook Group
              </Link>
              <i class="fa-brands fa-facebook media_icon"></i>
            </div>
          </div>

          {/* <div className="footer-logo-parent-grid-div">
            <div className="footer-child-logo-div">
              <i class="fa-brands fa-facebook"></i>
            </div>
            <div className="footer-child-logo-div">
              <i class="fa-brands fa-twitter"></i>
            </div>
            <div className="footer-child-logo-div">
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
