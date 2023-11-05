import React from "react";
import "./RideComford.css";

// import trip from "../../images/rideInComfort/trip.jpg";
// import ship from "../../images/rideInComfort/ship.jpg";
// import task from "../../images/rideInComfort/task.jpg";
import TSTPhoto from "../../images/rideInComfort/TSTPhoto.png";

const RideComford = () => {
  return (
    <div className="rideComford-parent-div">
      <h1 className="rideInComfort">
        TripShipTask is your solution to multiple problems
      </h1>
      <p className="rideInComford-P">
        When safety is ensured, who wouldn’t like to save money when there is a
        chance?
      </p>
      <p className="rideInComford-P">
        Save money when traveling, shipping or having someone get
        something done for you.
      </p>

      <div className="rideInComfort-grid-div">
        <img className="cart-img" src={TSTPhoto} alt="" />
      </div>
    </div>
  );
};

export default RideComford;
