import React from "react";
import "./AboutTripShipTask.css";

import NastedMenuBar from "../NastedMenuBar/NastedMenuBar";

const AboutTripShipTask = () => {
  return (
    <div className="AboutTripShipTask_parent_div">
      {/* <SideBar></SideBar> */}
      <NastedMenuBar></NastedMenuBar>
      <div>
        <h2 className="AboutTripShipTask_heading">
          TripShipTask.com কি তা জানেন কি?
        </h2>
        <iframe
          // width="560"
          // height="315"
          className="AboutTripShipTask_video"
          src="https://www.youtube.com/embed/0sde2Bed_DA?si=_Y2fOjEGkCT6qJj9"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default AboutTripShipTask;
