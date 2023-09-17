import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-parent-div">
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
        <div className="footer-grid-div">
          <div className="border-div">
            <div>
              <div>
                <i class="fa-solid fa-car"></i>
              </div>
              <p>30K+</p>
            </div>
            <h3>Experience</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur <br />
              adipisicing elit. Pariatur, ad!
            </p>
          </div>
          <div className="border-div">
            <div>
              <div>
                <i class="fa-solid fa-users"></i>
              </div>
              <p>300K+</p>
            </div>
            <h3>Experience</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur <br />
              adipisicing elit. Pariatur, ad!
            </p>
          </div>
          <div className="footer-cart-div">
            <div>
              <div>
                <i class="fa-solid fa-car"></i>
              </div>
              <p>50K+</p>
            </div>
            <h3>Experience</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur <br />
              adipisicing elit. Pariatur, ad!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
