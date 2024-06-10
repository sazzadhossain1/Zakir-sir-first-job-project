import React from "react";
import "./BiggerInSize.css";
import { Link } from "react-router-dom";
import qrCode from "../../images/Qr-code/qr-code.jpg";

import appStore from "../../images/Google&AppStore/appStore.png";
import googleStore from "../../images/Google&AppStore/googleStore.png";

import downloadAppPhoto from "../../images/downloadAppPhoto/downloadAppPhoto.png";
const BiggerInSize = () => {
  return (
    <div className="biggerInSize-parent-div">
      <div className="biggerINSize-text-div">
        <div className="download_tripShipTask_parent_div">
          <h2 className="Join_the">Join the platform,</h2>
          <h2 className="Connect_with">
            Connect with NID verified, same stature individuals.
          </h2>

          <h1 className="download_tripShipTask">
            Download TripShipTask Mobile App from
          </h1>
          <div className="biggerInSize-p-text-div">
            <div className="googleAndApple-btn-div">
              {/* <Link to="http://tripshiptask.com/" target="_blank">
                <button
                  style={{
                    backgroundImage: `url(${appStore})`,
                  }}
                  className="app-btn"
                ></button>
              </Link> */}
              <Link
                to="https://play.google.com/store/apps/details?id=com.tripshiptask.app"
                target="_blank"
              >
                <button
                  style={{
                    backgroundImage: `url(${googleStore})`,
                  }}
                  className="app-btn"
                ></button>
              </Link>
            </div>
            {/* <div className="qr-code-img-div">
              <img className="qr-code-img" src={qrCode} alt="" />{" "}
              <div className="i_div">
                <Link
                  target="_blank"
                  to="https://mail.hostinger.com/"
                  className="i_first"
                >
                  I
                </Link>

                <Link
                  target="_blank"
                  to="https://app.tripshiptask.com/web/admin/login"
                  className="i"
                >
                  I
                </Link>
              </div>
            </div> */}
          </div>
        </div>
        <div className="download_app_photo_div">
          <img className="download_app_photo" src={downloadAppPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BiggerInSize;
