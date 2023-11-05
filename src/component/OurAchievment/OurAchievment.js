import React from "react";
import "./OurAchievment.css";

const OurAchievment = () => {
  return (
    <div className="ourAchievment-parent-div">
      <div className="ourAchievement-div">
        <h1 className="ourAchievement-heading">Important Information</h1>
      </div>
      <div className="ourAchievment-p-div">
        <p className="ourAchievment-p">
          In the TripShipTask Mobile App, each user will sign up with their
          name, phone number, area of residence - along with ID, educational
          qualification, and profession - all this information. Then they can
          share a trip from one place to another with the user of their choice,
          carry or send each other's things, give some work to another user or
          do some work themselves - etc. It will also benefit others, gain some
          income or reduce expenses.
        </p>
        <p className="ourAchievment-p">
          Please be advised that you will require to pay BDT 35 during Sign Up
          for the purpose of NID verification. <br /> Please be advised that
          TripShipTask platform shall charge a 15% fee on each transaction that
          you carry out on the platform. Also, TripShipTask platform reserves
          the right to levy any cancellation fee or any other fee as described
          in the Terms. By Signing Up with TripShipTask, you agree to our terms
          and all policies.
        </p>
      </div>
    </div>
  );
};

export default OurAchievment;
