import React from "react";
import "./HowToLogin.css";
import NastedMenuBar from "../NastedMenuBar/NastedMenuBar";

const HowToLogin = () => {
  return (
    <div className="AboutTripShipTask_parent_div">
      {/* <SideBar></SideBar> */}
      <NastedMenuBar></NastedMenuBar>
      <div>
        <h2 className="HowToLogin_heading">
          How to Log in and use the user panel - কিভাবে লগ ইন করে সিস্টেম
          ব্যবহার করতে হয়{" "}
        </h2>
        <iframe
          className="HowToLogin_video"
          src="https://www.youtube.com/embed/M3mwKJj9gXY?si=kUOml5YbCw9uRJl3"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default HowToLogin;
