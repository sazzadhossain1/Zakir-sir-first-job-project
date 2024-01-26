import React from "react";
import "./NastedMenuBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingShield,
  faCoins,
  faLayerGroup,
  faShield,
  faTaxi,
  faUnderline,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const NastedMenuBar = () => {
  return (
    <div>
      <div className="NastedMenuBar_Bar">
        <div className="NastedMenuBar_top_section">
          <h1 className="NastedMenuBar_howTos">How tos</h1>
          {/* <div className="NastedMenuBar_bars">
            <FontAwesomeIcon className="NastedMenuBar_bars_icon" icon={faBars} />
          </div> */}
        </div>

        <div className="NastedMenuBar_video_details_div">
          <details className="NastedMenuBar_details" open>
            <summary> Videos</summary>
            <ul>
              <li className="NastedMenuBar_nested_Link">
                <Link to="/aboutTripShipTask">
                  TripShipTask.com কি তা জানেন কি?
                </Link>
              </li>
              <li className="NastedMenuBar_nested_Link">
                <Link to="/howToSignUp">
                  How to Sign Up and Verify E-Mail - কিভাবে সাইন আপ এবং ইমেইল
                  ভেরিফাই করতে হয়
                </Link>
              </li>
              <li className="NastedMenuBar_nested_Link">
                <Link to="/howToLogin">
                  How to Log in and use the user panel - কিভাবে লগ ইন করে
                  সিস্টেম ব্যবহার করতে হয়
                </Link>
              </li>
              <li className="NastedMenuBar_nested_Link">
                <Link to="/howToOpen">
                  How to Open a Support Ticket - কিভাবে একটি সাপোর্ট টিকেট খুলতে
                  হয়
                </Link>
              </li>
              <li className="NastedMenuBar_nested_Link">
                <Link to="/howToRefer">
                  How to refer someone - কিভাবে অন্যদের রেফার করতে হয়
                </Link>
              </li>
            </ul>
          </details>
          <div className="NastedMenuBar_video_icon">
            <FontAwesomeIcon icon={faVideo} />
          </div>
        </div>

        {/*  */}

        <div className="NastedMenuBar_details_div">
          <Link
            to="/understandingTripShipTask"
            className="NastedMenuBar_details "
          >
            Understanding TripShipTask
          </Link>

          <div className="NastedMenuBar_icon ">
            <FontAwesomeIcon icon={faUnderline} />
          </div>
        </div>

        {/*  */}

        <div className="NastedMenuBar_details_div">
          <Link to="/safetyAndSecurity" className="NastedMenuBar_details ">
            Safety And Security
          </Link>

          <div className="NastedMenuBar_icon ">
            <FontAwesomeIcon icon={faShield} />
          </div>
        </div>

        {/*  */}

        <div className="NastedMenuBar_details_div">
          <Link to="/UsingThePlatform" className="NastedMenuBar_details ">
            Using The Platform
          </Link>

          <div className="NastedMenuBar_icon ">
            <FontAwesomeIcon icon={faLayerGroup} />
          </div>
        </div>

        {/*  */}

        <div className="NastedMenuBar_details_div">
          <Link to="/financialAspects" className="NastedMenuBar_details ">
            Financial Aspects
          </Link>

          <div className="NastedMenuBar_icon ">
            <FontAwesomeIcon icon={faCoins} />
          </div>
        </div>

        {/*  */}

        <div className="NastedMenuBar_details_div">
          <Link to="/ServiceSpecifics" className="NastedMenuBar_details ">
            Service Specifics
          </Link>

          <div className="NastedMenuBar_icon ">
            <FontAwesomeIcon icon={faTaxi} />
          </div>
        </div>

        {/*  */}

        <div className="NastedMenuBar_details_div">
          <Link to="/communityAndSupport" className="NastedMenuBar_details ">
            Community And Support
          </Link>

          <div className="NastedMenuBar_icon ">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>

        {/*  */}

        <div className="NastedMenuBar_details_div">
          <Link to="/sideRespectPolice" className="NastedMenuBar_details ">
            Respect Policy
          </Link>

          <div className="NastedMenuBar_icon">
            <FontAwesomeIcon icon={faBuildingShield} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NastedMenuBar;
