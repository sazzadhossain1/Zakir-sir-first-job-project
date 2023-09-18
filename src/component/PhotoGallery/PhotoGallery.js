import React from "react";
import "./PhotoGallery.css";
const PhotoGallery = () => {
  return (
    <div>
      <h2>Keep #MovingSafely With Us!</h2>
      <div className="photo-border-div">
        <div className="photo-gallery">
          <img
            src="https://pathao.com/bn/wp-content/uploads/sites/6/2018/12/safety_a.jpg"
            alt=""
          />
          <img
            src="https://pathao.com/bn/wp-content/uploads/sites/6/2018/12/safety_b.jpg"
            alt=""
          />
          <img
            src="https://pathao.com/bn/wp-content/uploads/sites/6/2018/12/safety_c.jpg"
            alt=""
          />
          <img
            src="https://pathao.com/bn/wp-content/uploads/sites/6/2018/12/safety_d.jpg"
            alt=""
          />
          <img
            src="https://pathao.com/bn/wp-content/uploads/sites/6/2018/12/safety_e.jpg"
            alt=""
          />
          <img
            src="https://pathao.com/bn/wp-content/uploads/sites/6/2018/12/safety_f.jpg"
            alt=""
          />
        </div>
        <img
          className="photo-logo"
          src="https://pathao.com/wp-content/themes/webpathao/assets/images/insure-badge.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
