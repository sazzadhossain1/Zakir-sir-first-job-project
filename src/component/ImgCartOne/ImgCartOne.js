import React from "react";
import "./ImgCartOne.css";
import imgCartOne from "../../images/img-cart/imgCartOne.jpg";
// import imgCartTwo from "../../images/img-cart/imgCartTwo.jpg";

import imgCartOne1 from "../../images/imgCartPhoto/imgCartOne.jpg";
import imgCartTwo from "../../images/imgCartPhoto/imgCartTwo.jpg";
import imgCartThree from "../../images/imgCartPhoto/imgCartThree.jpg";
import imgCartFour from "../../images/imgCartPhoto/imgCartFour.jpg";
import imgCartFive from "../../images/imgCartPhoto/imgCartFive.jpg";
import imgCartSix from "../../images/imgCartPhoto/imgCartSix.jpg";

const ImgCartOne = () => {
  return (
    <div className="imgCartOne-parent-div">
      <img src={imgCartOne} alt="" />
      <p className="imgCartOne-p">
        To ensure security, users will be required to provide IDs. <br /> This
        way, the users of TripShipTask can safely exchange services
        among themselves.
      </p>
      {/* <img src={imgCartTwo} alt="" /> */}
      <div className="cartWithImg-parent-div">
        <img className="cartWithImg" src={imgCartOne1} alt="" />
        <img className="cartWithImg" src={imgCartTwo} alt="" />
        <img className="cartWithImg" src={imgCartThree} alt="" />
        <img className="cartWithImg" src={imgCartFour} alt="" />
        <img className="cartWithImg" src={imgCartFive} alt="" />
        <img className="cartWithImg" src={imgCartSix} alt="" />
      </div>
    </div>
  );
};

export default ImgCartOne;
