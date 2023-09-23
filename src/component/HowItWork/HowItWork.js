import React from "react";
import "./HowItWork.css";

const HowItWork = () => {
  return (
    <div>
      <h1 className="howItWork-header">How it work</h1>
      <div className="howItWork-blank-div"></div>
      <div className="howItWork-grid-div">
        <div>
          <div className="howItWork-img-div">
            <img
              className="howItWork-img"
              src="https://carrgohtml.tortoizthemes.com/assets/images/icon/1.webp"
              alt=""
            />
          </div>
          <h1 className="howItWork-title">Book In Just 2 Tabs</h1>
          <p>
            Curabitur ac quam aliquam urna vehicula semper sed vel elit. Sed et
            leo purus. Vivamus vitae sapien.
          </p>
        </div>
        <div>
          <div className="howItWork-img-div">
            <img
              className="howItWork-img"
              src="https://carrgohtml.tortoizthemes.com/assets/images/icon/2.webp"
              alt=""
            />
          </div>
          <h1 className="howItWork-title">Get a Driver</h1>
          <p>
            Curabitur ac quam aliquam urna vehicula semper sed vel elit. Sed et
            leo purus. Vivamus vitae sapien.
          </p>
        </div>

        <div>
          <div className="howItWork-img-div">
            <img
              className="howItWork-img"
              src="https://carrgohtml.tortoizthemes.com/assets/images/icon/3.webp"
              alt=""
            />
          </div>
          <h1 className="howItWork-title">Track your Driver</h1>
          <p>
            Curabitur ac quam aliquam urna vehicula semper sed vel elit. Sed et
            leo purus. Vivamus vitae sapien.
          </p>
        </div>
        <div>
          <div className="howItWork-img-div">
            <img
              className="howItWork-img"
              src="https://carrgohtml.tortoizthemes.com/assets/images/icon/4.webp"
              alt=""
            />
          </div>
          <h1 className="howItWork-title">Arrive Safely</h1>
          <p>
            Curabitur ac quam aliquam urna vehicula semper sed vel elit. Sed et
            leo purus. Vivamus vitae sapien.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
