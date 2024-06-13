import React from "react";
import "./TrustedRideServices.css";

import photoOne from "../../images/trustedRideService/TaskImage.jpg";
import photoTwo from "../../images/trustedRideService/TripImage.jpg";
import photoThree from "../../images/trustedRideService/roseboxBFdSCxmqvYcunsplash.jpg";

const TrustedRideServices = () => {
  return (
    <div>
      <div className="trustedRideService-grid-div">
        <img className="first-car-img" src={photoTwo} alt="" />
        <div
          className="trustedRideService-text-parent-div"
          // data-aos="fade-right"
        >
          <h1 className="trust_heading"> Give a Ride, Get a Ride</h1>
          <div className="trustedRide_blank_div"></div>

          <p className="trustedRideService-first-p">
            Say you are going somewhere - be it your own car or a rented one
            (car, minivan, bike, three-wheeler, rickshaw) and one or two or a
            few seats are vacant. You post the details on the TripShipTask App,
            those interested will bid on your post. You accept the one you like
            and give a ride.
          </p>
          <p className="trustedRideService-first-p">
            Or you'll go somewhere - post the details on the TripShipTask App,
            take a ride with the person you like from among those going the same
            way. Costs are shared and money is saved, traffic jams are reduced,
            the journey is comfortable, someone else is benefited - it's a win
            win for everyone.
          </p>
        </div>
        <img
          className="second-car-img"
          src={photoTwo}
          alt=""
          // data-aos="fade-left"
        />
      </div>

      {/*  */}
      <div className="trustedRideService-grid-div-two">
        <img
          className="secondCart-first-car-img"
          src={photoThree}
          alt=""
          // data-aos="fade-right"
        />
        <div
          className="trustedRideService-text-secondCart-parent-div"
          // data-aos="fade-left"
        >
          <h1 className="trust_heading">Send a Package, Carry a Package</h1>
          <div className="trustedRide_blank_div"></div>

          <p className="trustedRideService-first-p">
            Say you want to send something to someone. Post in the TripShipTask
            App in the App's Ship section. Anyone who is or will be traveling
            the same route, can get connected and carry uour package.
          </p>
          <p className="trustedRideService-first-p">
            Or you can post on the App before going somewhere that you want to
            carry, someone may get connected with you and have you carry a
            package for them. Must be an open, legal item. Money is saved, time
            is saved, traffic jams reduced, someone else benefits - it's a win
            win for everyone.
          </p>
        </div>
        <img className="secondCart-second-car-img" src={photoThree} alt="" />
      </div>
      {/*  */}
      <div className="trustedRideService-grid-div">
        <img className="first-car-img" src={photoOne} alt="" />
        <div
          className="trustedRideService-text-parent-div"
          // data-aos="fade-right"
        >
          <h1 className="trust_heading">Give a Tsk, Get a Task</h1>
          <div className="trustedRide_blank_div"></div>

          <p className="trustedRideService-first-p">
            Or say you need someone to do something for you - near or far. Just
            post it on the TripShipTask App, and if another member shows
            interest - give the task to whoever you like.
          </p>
          <p className="trustedRideService-first-p">
            Or you are good at something yourself. Then you post your
            availability and go to the Task section of the App. If someone needs
            to do the work in that category, they can contact you and request
            you to do the work. You do the job. Make proper use of your time,
            and you make money as well.
          </p>
        </div>
        <img
          className="second-car-img"
          src={photoOne}
          alt=""
          // data-aos="fade-left"
        />
      </div>
    </div>
  );
};

export default TrustedRideServices;
