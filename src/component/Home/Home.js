import React from "react";
import "./Home.css";
import RideComford from "../RideComford/RideComford";

import PhotoGallery from "../PhotoGallery/PhotoGallery";
import BiggerInSize from "../BiggerInSize/BiggerInSize";
import HowItWork from "../HowItWork/HowItWork";
import TrustedRideServices from "../TrustedRideServices/TrustedRideServices";
import ConnectAssistEarn from "../ConnectAssistEarn/ConnectAssistEarn";
import ImgCartOne from "../ImgCartOne/ImgCartOne";
import PaymentMethod from "../PaymentMethod/PaymentMethod";

import trip from "../../images/bannerPhoto/trip.png";
import ship from "../../images/bannerPhoto/ship.png";
import task from "../../images/bannerPhoto/task.png";

const Home = () => {
  return (
    <div>
      <div className="home-parent-div">
        <div className="child_parent_div">
          <div className="home-child-dvi">
            <h2 className=" TripShipTask-heading">
              TripShipTask helps you connect with others to
            </h2>

            <div>
              <p className="TripShipTask-p">- Give or get rides</p>
              <p className="TripShipTask-p">- Send or receive any goods</p>
              <p className="TripShipTask-p">- Give or get tasks</p>
            </div>
            <p className="andMakeMoney-p">
              and make money while you are at it.
            </p>
          </div>
        </div>

        {/* <div className="home-child-img-div">
          <img className="home-banner-photo" src={bannerPhoto} alt="" />
        </div> */}

        <div className="carousel_div carousel w-full ">
          <div
            id="slide1"
            className="carousel_child_div carousel-item  relative w-full"
          >
            <img className="home-banner-photo" src={trip} alt="" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img className="home-banner-photo" src={ship} alt="" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img className="home-banner-photo" src={task} alt="" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <ConnectAssistEarn></ConnectAssistEarn>
      <BiggerInSize></BiggerInSize>
      <RideComford></RideComford>
      <TrustedRideServices></TrustedRideServices>
      <ImgCartOne></ImgCartOne>
      {/* <OurAchievment></OurAchievment> */}
      <PhotoGallery></PhotoGallery>

      <HowItWork></HowItWork>

      <PaymentMethod></PaymentMethod>
    </div>
  );
};

export default Home;
