import React from "react";
import "./HowToSignUp.css";
import NastedMenuBar from "../NastedMenuBar/NastedMenuBar";

const HowToSignUp = () => {
  return (
    <div className="AboutTripShipTask_parent_div">
      {/* <SideBar></SideBar> */}
      <NastedMenuBar></NastedMenuBar>
      <div>
        <h2 className="HowToSignUp_heading">
          How to Sign Up and Verify E-Mail - কিভাবে সাইন আপ এবং ইমেইল ভেরিফাই
          করতে হয়
        </h2>
        <iframe
          // width="560"
          // height="315"
          className="HowToSignUp_video"
          src="https://www.youtube.com/embed/fdv5u-mD7Qw?si=496JvlATkDtO0Ceq"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default HowToSignUp;
