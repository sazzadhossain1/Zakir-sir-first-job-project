import React from "react";
import "./Careers.css";
import { Link } from "react-router-dom";
import CEOPhoto from "../../images/CEO-photo/CEO-Photo.png";
import CareersPhoto from "../../images/CareersPhoto.jpg";

const Careers = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  return (
    <div className="safety-parent-div">
      <div className="safety-grid-div">
        <div className="first-safety-img-div">
          <img src={CareersPhoto} alt="" />
        </div>
        <div className="safety-text-div">
          <h3 className="safety_heading">
            Currently we have the following open positions:
          </h3>

          <p className="careers-text-p">
            1. Customer Service Representative <br /> 2. Marketing
          </p>

          <p className="email">
            Email to send your CV/resume to: support@tripshiptask.com
          </p>
          <p className="pls_wite">
            Please write "Applying for ......(position name)" in the subject
            line. And make sure your CV/resume file contains your name when you
            attach the file.
          </p>
        </div>
        <div className="second-safety-img-div">
          <img src={CareersPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Careers;
