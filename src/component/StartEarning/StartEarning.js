import React from "react";
import "./StartEarning.css";
import bannerPhoto from "../../images/banner.jpg";

const StartEarning = () => {
  return (
    <div>
      <div className="startEarning-blank-div"></div>
      <h2 className="earning-heading">Earn with your car, bike or bicycle</h2>
      <p className="earning-p">
        Become a captain, rider or foodman on the highest earning platform!
      </p>
      <button className="start-earning-button">Start Earning</button>
      <div className="background-img-div">
        <img className="banner-img" src={bannerPhoto} alt="" />
      </div>
    </div>
  );
};

export default StartEarning;
