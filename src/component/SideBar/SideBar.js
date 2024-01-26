import React, { useState } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
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

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const menueItem = [
    {
      path: "/videos",
      name: "Videos",
      icon: <FontAwesomeIcon icon={faVideo} />,
    },
    {
      path: "/understandingTripShipTask",
      name: "Understanding TripShipTask",
      icon: <FontAwesomeIcon icon={faUnderline} />,
    },
    {
      path: "/safetyAndSecurity",
      name: "Safety And Security",
      icon: <FontAwesomeIcon icon={faShield} />,
    },
    {
      path: "/usingThePlatform",
      name: "Using The Platform",
      icon: <FontAwesomeIcon icon={faLayerGroup} />,
    },
    {
      path: "/financialAspects",
      name: "Financial Aspects",
      icon: <FontAwesomeIcon icon={faCoins} />,
    },
    {
      path: "/serviceSpecifics",
      name: "Service Specifics",
      icon: <FontAwesomeIcon icon={faTaxi} />,
    },
    {
      path: "/communityAndSupport",
      name: "Community And Support",
      icon: <FontAwesomeIcon icon={faEnvelope} />,
    },
    {
      path: "/sideRespectPolice",
      name: "Respect Policy",
      icon: <FontAwesomeIcon icon={faBuildingShield} />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: open ? "400px" : "70px" }} className="sideBar">
        <div className="top_section">
          <h1 style={{ display: open ? "block" : "none" }} className="howTos">
            How tos
          </h1>
          <div style={{ marginLeft: open ? "100px" : "0" }} className="bars">
            <FontAwesomeIcon
              className="bars_icon"
              icon={faBars}
              onClick={toggle}
            />
          </div>
        </div>

        <div className="details_div">
          <details
            className="details"
            open
            style={{ display: open ? "block" : "none" }}
          >
            <summary> Videos</summary>
            <ul>
              <li className="nested_Link">
                <Link to="/aboutTripShipTask">
                  TripShipTask.com কি তা জানেন কি?
                </Link>
              </li>
              <li className="nested_Link">
                <Link to="/howToSignUp">
                  How to Sign Up and Verify E-Mail - কিভাবে সাইন আপ এবং ইমেইল
                  ভেরিফাই করতে হয়
                </Link>
              </li>
              <li className="nested_Link">
                <Link to="/howToLogin">
                  How to Log in and use the user panel - কিভাবে লগ ইন করে
                  সিস্টেম ব্যবহার করতে হয়
                </Link>
              </li>
              <li className="nested_Link">
                <Link to="/howToOpen">
                  How to Open a Support Ticket - কিভাবে একটি সাপোর্ট টিকেট খুলতে
                  হয়
                </Link>
              </li>
              <li className="nested_Link">
                <Link to="/howToRefer">
                  How to refer someone - কিভাবে অন্যদের রেফার করতে হয়
                </Link>
              </li>
            </ul>
          </details>
          <div className="icon">
            <FontAwesomeIcon icon={faVideo} />
          </div>
        </div>

        {/*  */}

        <div className="details_div">
          <Link
            to="/understandingTripShipTask"
            className="details"
            style={{ display: open ? "block" : "none" }}
          >
            Understanding TripShipTask
          </Link>

          <div className="icon">
            <FontAwesomeIcon icon={faUnderline} />
          </div>
        </div>

        {/*  */}

        <div className="details_div">
          <Link
            to="/safetyAndSecurity"
            className="details"
            style={{ display: open ? "block" : "none" }}
          >
            Safety And Security
          </Link>

          <div className="icon">
            <FontAwesomeIcon icon={faShield} />
          </div>
        </div>

        {/*  */}

        <div className="details_div">
          <Link
            to="/UsingThePlatform"
            className="details"
            style={{ display: open ? "block" : "none" }}
          >
            Using The Platform
          </Link>

          <div className="icon">
            <FontAwesomeIcon icon={faLayerGroup} />
          </div>
        </div>

        {/*  */}

        <div className="details_div">
          <Link
            to="/financialAspects"
            className="details"
            style={{ display: open ? "block" : "none" }}
          >
            Financial Aspects
          </Link>

          <div className="icon">
            <FontAwesomeIcon icon={faCoins} />
          </div>
        </div>

        {/*  */}

        <div className="details_div">
          <Link
            to="/ServiceSpecifics"
            className="details"
            style={{ display: open ? "block" : "none" }}
          >
            Service Specifics
          </Link>

          <div className="icon">
            <FontAwesomeIcon icon={faTaxi} />
          </div>
        </div>

        {/*  */}

        <div className="details_div">
          <Link
            to="/communityAndSupport"
            className="details"
            style={{ display: open ? "block" : "none" }}
          >
            Community And Support
          </Link>

          <div className="icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>

        {/*  */}

        <div className="details_div">
          <Link
            to="/sideRespectPolice"
            className="details"
            style={{ display: open ? "block" : "none" }}
          >
            Respect Policy
          </Link>

          <div className="icon">
            <FontAwesomeIcon icon={faBuildingShield} />
          </div>
        </div>

        {/*  */}

        {/* <div className="details_div">
          <details
            className="details"
            open
            style={{ display: open ? "block" : "none" }}
          >
            <summary> Respect Policy</summary>

            <ul>
              <li>
                <Link>Submenu 1</Link>
              </li>
            </ul>
          </details>
          <div className="icon">
            <FontAwesomeIcon icon={faBuildingShield} />
          </div>
        </div> */}

        {/* {menueItem.map((item, index) => (
          <div key={index}>
            <Link to={item.path} key={index} className="link">
              <div
                className="link_text"
                style={{ display: open ? "block" : "none" }}
              >
                {item.name}
              </div>
              <div className="icon">{item.icon}</div>
            </Link>

            <div className="details_div">
              <details
                className="details"
                open
                style={{ display: open ? "block" : "none" }}
              >
                <summary> {item.name}</summary>
                <ul>
                  <li>
                    <Link>Submenu 1</Link>
                  </li>
                </ul>
              </details>
              <div className="icon">{item.icon}</div>
            </div>

            
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default SideBar;
