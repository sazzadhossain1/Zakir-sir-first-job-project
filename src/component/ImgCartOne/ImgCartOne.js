import React from "react";
import "./ImgCartOne.css";
import imgCartOne from "../../images/img-cart/imgCartOne.jpg";
import imgCartTwo from "../../images/img-cart/imgCartTwo.jpg";

const ImgCartOne = () => {
  return (
    <div>
      <img src={imgCartOne} alt="" />
      <img src={imgCartTwo} alt="" />
    </div>
  );
};

export default ImgCartOne;
