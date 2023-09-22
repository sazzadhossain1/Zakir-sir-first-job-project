import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Million from "../Million/Million";
import RideComford from "../RideComford/RideComford";
import OurAchievment from "../OurAchievment/OurAchievment";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import StartEarning from "../StartEarning/StartEarning";
import BiggerInSize from "../BiggerInSize/BiggerInSize";

const Home = () => {
  return (
    <div>
      <div className="home-parent-div">
        <div className="home-child-dvi">
          <h2 className="platform">
            Platform <br />
            <span>for all Services</span>
          </h2>

          <p className="oneApp">One app, all services at your fingertips</p>
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
      <Million></Million>
      <RideComford></RideComford>
      <OurAchievment></OurAchievment>
      <PhotoGallery></PhotoGallery>
      <StartEarning></StartEarning>
      <BiggerInSize></BiggerInSize>
    </div>
  );
};

export default Home;
