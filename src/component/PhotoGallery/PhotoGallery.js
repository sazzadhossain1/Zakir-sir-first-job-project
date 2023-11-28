import React from "react";
import "./PhotoGallery.css";
import { Link } from "react-router-dom";
const PhotoGallery = () => {
  return (
    <div className="PhotoGallery_parent_div">
      <h2 className="keep-heading">Refer others to make Lifetime Money</h2>
      <div className="photo-parent-gallery-div">
        <div className="photo-gallery">
          <p className="photo-gallery-p">
            Download the TripShipTask App. Ask friends, relatives, neighbors,
            colleagues – everyone to Sign Up on this App.
          </p>
          <p className="photo-gallery-p mt-6">
            Users of different professions like You and I will Sign Up on
            TripShipTask and perform activities such as giving or taking a ride,
            sending or carrying something or giving a job to another user.
            TripShipTask will give you reward on every transaction made by the
            person you referred for life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
