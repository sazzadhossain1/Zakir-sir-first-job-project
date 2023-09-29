import React from "react";
import "./TrustedRideServices.css";
import { Link } from "react-router-dom";

const TrustedRideServices = () => {
  return (
    <div className="trustedRideService-grid-div">
      <img
        className="first-car-img"
        src="https://png.pngtree.com/png-clipart/20230426/original/pngtree-fashion-car-private-car-orange-red-car-simulation-illustration-picture-image_4484916.png"
        alt=""
      />
      <div className="trustedRideService-text-parent-div">
        <h1 className="trustedRideService-heading">
          Trusted Ride Service in the World
        </h1>
        <p className="trustedRideService-first-p">
          Curabitur placerat cursus nisi nec pharetra. Proin quis tortor
          fringilla, placerat nisi nec, auctor ex. Donec commodo orci ac lectus
          mattis, sed interdum sem scelerisque.
        </p>
        <div className="trustedRideService-icon-parent-div">
          <div className="trustedRideService-icon-flex-div">
            <i class="fa-solid fa-circle-check"></i>
            <p>Cars justo odio</p>
          </div>
          <div className="trustedRideService-icon-flex-div">
            <i class="fa-solid fa-circle-check"></i>
            <p>Dapibus ac facilisis in</p>
          </div>
          <div className="trustedRideService-icon-flex-div">
            <i class="fa-solid fa-circle-check"></i>
            <p>Morbi leo risus</p>
          </div>
        </div>
        <Link className="trustedRideService-read-more">
          <button>READ MORE</button>
        </Link>
      </div>
      <img
        className="second-car-img"
        src="https://png.pngtree.com/png-clipart/20230426/original/pngtree-fashion-car-private-car-orange-red-car-simulation-illustration-picture-image_4484916.png"
        alt=""
      />
    </div>
  );
};

export default TrustedRideServices;
