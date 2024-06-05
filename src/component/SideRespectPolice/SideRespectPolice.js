import React from "react";
import "./SideRespectPolice.css";
import SideBar from "../SideBar/SideBar";
const SideRespectPolice = () => {
  return (
    <div className="side_respect_police_parent_div">
      <SideBar></SideBar>
      <div className="understanding_content_div">
        <h2 className="understanding_heading">Respect Policy</h2>
        <div className="understanding_text">
          <p className="understanding_ans">
            Please understand that TripShipTask platform connects you with other
            users who may hold a different profession than what he/she is
            helping you with. The user you are interacting with or locking a
            deal with may even be a person of higher stature than yourself, so
            keeping that in perspective, always use polite and polished language
            with soft approach when interacting with other users of the
            platform. TripShipTask is altogether a unique application where
            users can choose who they are interacting with so each user can have
            an experience of lifetime after using the platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideRespectPolice;
