import React from "react";
import "./RideComford.css";

import trip from "../../images/rideInComfort/trip.jpg";
import ship from "../../images/rideInComfort/ship.jpg";
import task from "../../images/rideInComfort/task.jpg";

const RideComford = () => {
  return (
    <div className="rideComford-parent-div">
      <h1 className="rideInComfort">Ride In Comfort</h1>
      <p className="rodeComfort-p-first-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper <br /> mattis, pulvinar dapibus leo.
      </p>
      <div className="rideInComfort-grid-div">
        <div className="">
          <img src={trip} alt="" />
        </div>
        <div>
          <img src={ship} alt="" />
        </div>
        <div>
          <img src={task} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RideComford;
