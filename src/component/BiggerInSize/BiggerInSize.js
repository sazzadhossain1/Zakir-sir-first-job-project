import React from "react";
import "./BiggerInSize.css";
import { Link } from "react-router-dom";
const BiggerInSize = () => {
  return (
    <div>
      <div className="biggerINSize-text-div">
        <div className="biggerInSize-heading-text-div">
          <h1>Download TripShipTask Mobile App from</h1>
        </div>
        <div className="biggerInSize-p-text-div">
          <p></p>
          <Link className="learn-more">learn more</Link>
        </div>
      </div>
    </div>
  );
};

export default BiggerInSize;
