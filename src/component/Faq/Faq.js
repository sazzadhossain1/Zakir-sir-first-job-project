import React from "react";
import "./Faq.css";
import { Link } from "react-router-dom";
import CEOPhoto from "../../images/CEO-photo/CEO-Photo.png";

const Faq = () => {
  return (
    <div className="safety-parent-div">
      <h1>This is FAQ</h1>
      <div className="safety-grid-div">
        <div className="first-safety-img-div">
          <img src={CEOPhoto} alt="" />
        </div>
        <div className="safety-text-div">
          <h3 className="safety_heading">TEACHER JACK</h3>
          <p className="safety-title-p">Trainer, IT Business Person</p>
          <p className="safety-text-p">
            TESOL Certified, ELT Teacher Jack is experienced and has taught
            English to students from China, South Korea, Mexico, Canada and the
            United States of America over the last 8 years. Teacher Jack is
            friendly, helpful, open minded and affordable. He goes the extra
            mile to ensure student understanding of the lessons. He travels a
            lot and interacts with people from different background. He is
            knowledgeable and knows exactly which student requires what level of
            training. He is easily reachable and is always ready to
            help his students.
          </p>

          <Link to="/">
            <button className="safety-more-btn">Back to HOME</button>
          </Link>
        </div>
        <div className="second-safety-img-div">
          <img src={CEOPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
