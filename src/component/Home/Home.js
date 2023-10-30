import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import RideComford from "../RideComford/RideComford";
import OurAchievment from "../OurAchievment/OurAchievment";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import StartEarning from "../StartEarning/StartEarning";
import BiggerInSize from "../BiggerInSize/BiggerInSize";
import HowItWork from "../HowItWork/HowItWork";
import TrustedRideServices from "../TrustedRideServices/TrustedRideServices";
import QrCode from "../QrCode/QrCode";
import ConnectAssistEarn from "../ConnectAssistEarn/ConnectAssistEarn";
import ImgCartOne from "../ImgCartOne/ImgCartOne";

const Home = () => {
  return (
    <div>
      <div className="home-parent-div">
        <div className="home-child-dvi">
          <h2 className=" TripShipTask-heading">
            TripShipTask helps you connect with others
          </h2>

          <div>
            <p className="TripShipTask-p">- Give or get rides</p>
            <p className="TripShipTask-p">- Send or receive any goods</p>
            <p className="TripShipTask-p">- Give or get tasks</p>
          </div>
          <p className="andMakeMoney-p">and make money while you are at it.</p>
          <div>
            <Link className="earn">
              <button>Earn With Us</button>
            </Link>
            <br />
            <Link className="download">
              <button>Download App</button>
            </Link>
          </div>
        </div>
      </div>
      <ConnectAssistEarn></ConnectAssistEarn>
      <RideComford></RideComford>
      <TrustedRideServices></TrustedRideServices>
      <ImgCartOne></ImgCartOne>
      <OurAchievment></OurAchievment>
      <PhotoGallery></PhotoGallery>
      <StartEarning></StartEarning>
      <BiggerInSize></BiggerInSize>
      <HowItWork></HowItWork>
      <QrCode></QrCode>
    </div>
  );
};

export default Home;
