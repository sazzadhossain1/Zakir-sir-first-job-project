import React from "react";
import "./HowToOpen.css";
import SideBar from "../SideBar/SideBar";
import NastedMenuBar from "../NastedMenuBar/NastedMenuBar";

const HowToOpen = () => {
  return (
    <div className="AboutTripShipTask_parent_div">
      {/* <SideBar></SideBar> */}
      <NastedMenuBar></NastedMenuBar>
      <div>
        <h2 className="AboutTripShipTask_heading">
          How to Open a Support Ticket - কিভাবে একটি সাপোর্ট টিকেট খুলতে হয়
        </h2>

        <iframe
          className="AboutTripShipTask_video"
          src="https://www.youtube.com/embed/FLi9Ingfs2c?si=4C_i0I5yuHYsmsnt"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default HowToOpen;
