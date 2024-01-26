import React from "react";
import "./HowToRefer.css";
import SideBar from "../SideBar/SideBar";
import NastedMenuBar from "../NastedMenuBar/NastedMenuBar";

const HowToRefer = () => {
  return (
    <div className="AboutTripShipTask_parent_div">
      {/* <SideBar></SideBar>
       */}
      <NastedMenuBar></NastedMenuBar>
      <div>
        <h2 className="AboutTripShipTask_heading">
          How to refer someone - কিভাবে অন্যদের রেফার করতে হয়
        </h2>

        <iframe
          className="AboutTripShipTask_video"
          src="https://www.youtube.com/embed/5QhPuhTgH2g?si=owVfGidJNr20inHn"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default HowToRefer;
