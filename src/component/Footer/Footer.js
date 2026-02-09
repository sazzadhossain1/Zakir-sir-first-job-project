import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logoThree from "../../images/logo_Three.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import qrCode from "../../images/Qr-code/qr-code.jpg";

const Footer = () => {
  return (
    <div>
      <div className="footer-parent-div">
        <div className="footer-grid-div">
          <div className="footer_first-single-cart-div footer_border flex_div">
            <div className="">
              <img className="footer-first-logo" src={logoThree} alt="" />

              <p className="Office-p">
                Office: RUAP, Mollika 605, Uttara 18, Dhaka 1230
              </p>

              <p className="Office-p">
                Office: 218 Sahera Tropical Center 5th Floor ( Lift 05) , Suite-
                20 Elephant Road, Bata Signal Dhaka 1205 Bangladesh.
              </p>
              <p className="Office-p">
                <FontAwesomeIcon className="envelop_icon" icon={faEnvelope} />
                &nbsp; support@tripshiptask.com
              </p>
              <Link
                to="https://wa.me/8801793596432" // replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="Office-p">
                  &nbsp;
                  <FontAwesomeIcon
                    className="whatsApp_icon"
                    icon={faWhatsapp}
                  />
                  &nbsp;+8801793596432
                </p>
              </Link>

              {/* <p className="Office-p">
                &nbsp;
                <FontAwesomeIcon className="whatsApp_icon" icon={faWhatsapp} />
                &nbsp;+8801746093229
              </p> */}
            </div>
          </div>
          {/*  */}

          <div className="company_footer-single-cart-div footer_border">
            <div>
              <h3 className="footer-heading">COMPANY</h3>
              <p className="footer-p">
                <Link to="/aboutUs">About</Link>
              </p>

              <p className="footer-p">
                <Link
                  target="_blank"
                  to="https://app.tripshiptask.com/pages/careers"
                >
                  Careers
                </Link>
              </p>
              <p className="footer-p">
                <Link
                  target="_blank"
                  to="https://app.tripshiptask.com/pages/faq"
                >
                  FAQ
                </Link>
              </p>

              <div className="footer_qr_code_div">
                <img className="footer_qrCode" src={qrCode} alt="" />{" "}
              </div>
            </div>

            {/* <div className="company_footer_i_div"></div> */}
          </div>

          {/*  */}
          <div className="terms_footer-single-cart-div footer_border">
            <div>
              {" "}
              <h3 className="footer-heading">TERMS & POLICIES</h3>
              <p className="footer-p">
                <Link
                  target="_blank"
                  to="https://app.tripshiptask.com/pages/terms"
                >
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
                <Link
                  target="_blank"
                  to="https://app.tripshiptask.com/pages/data"
                >
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
                <Link
                  target="_blank"
                  to="https://app.tripshiptask.com/pages/aup"
                >
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
              <Link
                target="_blank"
                to="https://app.tripshiptask.com/pages/charge"
              >
                <p className="footer-p">Charge Points </p>
              </Link>
              <Link
                target="_blank"
                to="https://app.tripshiptask.com/pages/security"
              >
                <p className="footer-p">Security Deposit</p>
              </Link>
              <Link
                target="_blank"
                to="https://app.tripshiptask.com/pages/refund"
              >
                <p className="footer-p">Return & Refund Policy</p>
              </Link>
              <Link
                target="_blank"
                to="https://app.tripshiptask.com/pages/cancellation"
              >
                <p className="footer-p">Cancellation Policy</p>
              </Link>
              <p className="footer-p">
                <Link to="/respectPolice">Respect Policy</Link>
              </p>
            </div>
          </div>
          {/*  */}
          <div className="countries_footer-single-cart-div footer-border-2">
            <h3 className="footer-heading">COUNTRIES</h3>
            <p className="bangladesh">Bangladesh</p>

            <div>
              {/* <div className="media_flex_div">
              <Link
                target="_blank"
                to="https://web.facebook.com/profile.php?id=100063669755190&_rdc=1&_rdr"
              >
                Facebook Page &nbsp;
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </div> */}
              <div className="media_flex_div">
                <Link
                  target="_blank"
                  to="https://web.facebook.com/groups/2814072982035339/?_rdc=1&_rdr"
                >
                  BD Facebook Group &nbsp;
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </div>

              <div className="media_flex_div">
                <Link
                  target="_blank"
                  to="https://web.facebook.com/profile.php?id=100063669755190&_rdc=1&_rdr"
                >
                  Facebook Page
                </Link>
                <FontAwesomeIcon icon={faFacebook} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
