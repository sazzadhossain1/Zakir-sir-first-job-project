import React from "react";
import "./Home.css";
import RideComford from "../RideComford/RideComford";
import OurAchievment from "../OurAchievment/OurAchievment";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import BiggerInSize from "../BiggerInSize/BiggerInSize";
import HowItWork from "../HowItWork/HowItWork";
import TrustedRideServices from "../TrustedRideServices/TrustedRideServices";
import ConnectAssistEarn from "../ConnectAssistEarn/ConnectAssistEarn";
import ImgCartOne from "../ImgCartOne/ImgCartOne";
import bannerPhoto from "../../images/bannerPhoto/bannerPhoto.png";
import PaymentMethod from "../PaymentMethod/PaymentMethod";

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
        </div>

        <div className="home-child-img-div">
          <img className="home-banner-photo" src={bannerPhoto} alt="" />
        </div>
      </div>

      {/*  */}
      <ConnectAssistEarn></ConnectAssistEarn>
      <RideComford></RideComford>
      <TrustedRideServices></TrustedRideServices>
      <ImgCartOne></ImgCartOne>
      <OurAchievment></OurAchievment>
      <PhotoGallery></PhotoGallery>

      <BiggerInSize></BiggerInSize>
      <HowItWork></HowItWork>

      <PaymentMethod></PaymentMethod>
    </div>
  );
};

export default Home;
