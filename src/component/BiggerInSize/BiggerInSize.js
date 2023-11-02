import React from "react";
import "./BiggerInSize.css";
import { Link } from "react-router-dom";
import qrCode from "../../images/Qr-code/qr-code.jpg";
const BiggerInSize = () => {
  return (
    <div className="biggerInSize-parent-div">
      <div className="biggerINSize-text-div">
        <div className="biggerInSize-heading-text-div">
          <h1>Download TripShipTask Mobile App from</h1>
        </div>
        <div className="biggerInSize-p-text-div">
          <div className="qr-code-img-div">
            <img className="qr-code-img" src={qrCode} alt="" />
          </div>
          <div className="googleAndApple-btn-div">
            <Link to="http://tripshiptask.com/" target="_blank">
              <button className="apple-btn">
                <i class="fa-brands fa-apple"></i>
                <div className="apple-btn-text-div">
                  <span className="downloadOnThe">Download on the</span>
                  <span className="appleStore-btn-text-span">Apple Store</span>
                </div>
              </button>
            </Link>
            <Link to="http://tripshiptask.com/" target="_blank">
              <button className="google-btn">
                <i class="fa-brands fa-google-play"></i>
                <div>
                  <span className="downloadOnThe">Download on the</span>
                  <span className="appleStore-btn-text-span">Google Play</span>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiggerInSize;
