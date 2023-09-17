import React from "react";
import "./OurAchievment.css";

const OurAchievment = () => {
  return (
    <div className="ourAchievment-parent-div">
      <div>
        <div className="ourAchievement-div">
          <h1 className="ourAchievement-heading">Our Achievement</h1>
          <p className="ourAchievement-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
        <div className="ourAchievment-grid-div">
          <div className="border-div">
            <div className="ourAchievment-logo-div">
              <div className="logo">
                <i className="fa-solid fa-car i"></i>
              </div>
              <p className="ourAchievment-number-k">30K+</p>
            </div>
            <h3 className="ourAchievment-cart-heading">Experience</h3>
            <p className="ourAchievment-cart-p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Pariatur, ad!
            </p>
          </div>
          <div className="border-div">
            <div className="ourAchievment-logo-div">
              <div className="logo">
                <i class="fa-solid fa-users i"></i>
              </div>
              <p className="ourAchievment-number-k">300K+</p>
            </div>
            <h3 className="ourAchievment-cart-heading">Experience</h3>
            <p className="ourAchievment-cart-p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Pariatur, ad!
            </p>
          </div>
          <div className="ourAchievment-cart-div">
            <div className="ourAchievment-logo-div">
              <div className="logo">
                <i class="fa-solid fa-car i"></i>
              </div>
              <p className="ourAchievment-number-k">50K+</p>
            </div>
            <h3 className="ourAchievment-cart-heading">Experience</h3>
            <p className="ourAchievment-cart-p">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Pariatur, ad!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAchievment;
