import React from "react";
import "./LeftSideMenue.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBuildingShield,
  faCoins,
  faLayerGroup,
  faShield,
  faTaxi,
  faUnderline,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const LeftSideMenue = () => {
  return (
    <div>
      <div className="LeftSideMenue_Bar">
        <div className="LeftSideMenue_top_section">
          <h1 className="LeftSideMenue_howTos">How tos</h1>
          {/* <div className="LeftSideMenue_bars">
            <FontAwesomeIcon className="LeftSideMenue_bars_icon" icon={faBars} />
          </div> */}
        </div>

        <div className="LeftSideMenue_video_details_div">
          <details className="LeftSideMenue_details" open>
            <summary> Videos</summary>
            <ul>
              <li className="LeftSideMenue_nested_Link">
                <Link to="/aboutTripShipTask">
                  TripShipTask.com কি তা জানেন কি?
                </Link>
              </li>
              <li className="LeftSideMenue_nested_Link">
                <Link to="/howToSignUp">
                  How to Sign Up and Verify E-Mail - কিভাবে সাইন আপ এবং ইমেইল
                  ভেরিফাই করতে হয়
                </Link>
              </li>
              <li className="LeftSideMenue_nested_Link">
                <Link to="/howToLogin">
                  How to Log in and use the user panel - কিভাবে লগ ইন করে
                  সিস্টেম ব্যবহার করতে হয়
                </Link>
              </li>
              <li className="LeftSideMenue_nested_Link">
                <Link to="/howToOpen">
                  How to Open a Support Ticket - কিভাবে একটি সাপোর্ট টিকেট খুলতে
                  হয়
                </Link>
              </li>
              <li className="LeftSideMenue_nested_Link">
                <Link to="/howToRefer">
                  How to refer someone - কিভাবে অন্যদের রেফার করতে হয়
                </Link>
              </li>
            </ul>
          </details>
          <div className="LeftSideMenue_video_icon">
            <FontAwesomeIcon icon={faVideo} />
          </div>
        </div>

        {/*  */}

        <div className="LeftSideMenue_details_div">
          <Link
            to="/understandingTripShipTask"
            className="LeftSideMenue_details "
          >
            Understanding TripShipTask
          </Link>

          <div className="LeftSideMenue_icon ">
            <FontAwesomeIcon icon={faUnderline} />
          </div>
        </div>

        {/*  */}

        <div className="LeftSideMenue_details_div">
          <Link to="/safetyAndSecurity" className="LeftSideMenue_details ">
            Safety And Security
          </Link>

          <div className="LeftSideMenue_icon ">
            <FontAwesomeIcon icon={faShield} />
          </div>
        </div>

        {/*  */}

        <div className="LeftSideMenue_details_div">
          <Link to="/UsingThePlatform" className="LeftSideMenue_details ">
            Using The Platform
          </Link>

          <div className="LeftSideMenue_icon ">
            <FontAwesomeIcon icon={faLayerGroup} />
          </div>
        </div>

        {/*  */}

        <div className="LeftSideMenue_details_div">
          <Link to="/financialAspects" className="LeftSideMenue_details ">
            Financial Aspects
          </Link>

          <div className="LeftSideMenue_icon ">
            <FontAwesomeIcon icon={faCoins} />
          </div>
        </div>

        {/*  */}

        <div className="LeftSideMenue_details_div">
          <Link to="/ServiceSpecifics" className="LeftSideMenue_details ">
            Service Specifics
          </Link>

          <div className="LeftSideMenue_icon ">
            <FontAwesomeIcon icon={faTaxi} />
          </div>
        </div>

        {/*  */}

        <div className="LeftSideMenue_details_div">
          <Link to="/communityAndSupport" className="LeftSideMenue_details ">
            Community And Support
          </Link>

          <div className="LeftSideMenue_icon ">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>

        {/*  */}

        <div className="LeftSideMenue_details_div">
          <Link to="/sideRespectPolice" className="LeftSideMenue_details ">
            Respect Policy
          </Link>

          <div className="LeftSideMenue_icon">
            <FontAwesomeIcon icon={faBuildingShield} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideMenue;
