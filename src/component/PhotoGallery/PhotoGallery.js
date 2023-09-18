import React from "react";
import "./PhotoGallery.css";
import { Link } from "react-router-dom";
const PhotoGallery = () => {
  return (
    <div>
      <h2 className="keep-heading">Keep #MovingSafely With Us!</h2>
      <div className="photo-parent-gallery-div">
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
        <div className="photo-cart-grid-div">
          <div>
            <h1 className="photo-cart-heading">The Safest Platform</h1>
            <p className="photo-cart-p">
              We care about your safety. And to ensure it, we’ve introduced
              insurance for all of our users, rides & captains. Your safety is
              our first priority.
            </p>
            <Link className="read-more">
              <button>Read MOre</button>
            </Link>
          </div>
          <div>
            <h1 className="photo-cart-heading">We Care About You</h1>
            <p className="photo-cart-p">
              We believe in #MovingSafely. Pathao is the only platform with a
              rapid response team, call centre support, insurance coverage, live
              location share and more!
            </p>
            <Link className="read-more">
              <button>Read MOre</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
