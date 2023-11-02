import React from "react";
import "./ImgCartOne.css";
import imgCartOne from "../../images/img-cart/imgCartOne.jpg";
import imgCartTwo from "../../images/img-cart/imgCartTwo.jpg";

const ImgCartOne = () => {
  return (
    <div>
      <img src={imgCartOne} alt="" />
      <p className="imgCartOne-p">
        To ensure security, users will be required to provide IDs. <br /> This
        way, the users of TripShipTask can safely exchange services
        among themselves.
      </p>
      <img src={imgCartTwo} alt="" />
    </div>
  );
};

export default ImgCartOne;
