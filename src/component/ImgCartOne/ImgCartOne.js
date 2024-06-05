import React from "react";
import "./ImgCartOne.css";
// import imgCartTwo from "../../images/img-cart/imgCartTwo.jpg";

import logoOne from "../../images/img-cart/logo_One.png";
import logoTwo from "../../images/img-cart/logoTwo.png";
import logoThree from "../../images/img-cart/logoThree.png";
import logoFour from "../../images/img-cart/logoFour.png";
import logoFive from "../../images/img-cart/logoFive.png";
import logoSix from "../../images/img-cart/logoSix.png";

import imgCartOne1 from "../../images/imgCartPhoto/imgCartOne.jpg";
import imgCartTwo from "../../images/imgCartPhoto/imgCartTwo.jpg";
import imgCartThree from "../../images/imgCartPhoto/imgCartThree.jpg";
import imgCartFour from "../../images/imgCartPhoto/imgCartFour.jpg";
import imgCartFive from "../../images/imgCartPhoto/imgCartFive.jpg";
import imgCartSix from "../../images/imgCartPhoto/imgCartSix.jpg";

const ImgCartOne = () => {
  return (
    <div className="imgCartOne-parent-div">
      {/*  */}
      <div className="cart_grid_div">
        <div className="cart_flex_div" data-aos="fade-right">
          <img className="img_cart_logo" src={logoOne} alt="" />

          {/* <FontAwesomeIcon icon={faUser} /> */}
          <div className="cart_text_div">
            <h3>Use Digital Payment</h3>
            <p>
              Please avoid contact with notes & coins. Use Digital payment and
              stay safe
            </p>
          </div>
        </div>
        <div className="cart_flex_div" data-aos="fade-down">
          <img className="img_cart_logo" src={logoTwo} alt="" />

          {/* <FontAwesomeIcon icon={faUser} /> */}
          <div className="cart_text_div">
            <h3>Cofirm & Go</h3>
            <p>
              Confirm on offer. If you don't confirm, another user may take your
              place.
            </p>
          </div>
        </div>
        <div className="cart_flex_div" data-aos="fade-left">
          <img className="img_cart_logo" src={logoThree} alt="" />

          {/* <FontAwesomeIcon icon={faUser} /> */}
          <div className="cart_text_div">
            <h3>Avoid Cancellation Fee</h3>
            <p>Cancel at least 3 hours early to avoid cancellation fee</p>
          </div>
        </div>
        <div className="cart_flex_div" data-aos="fade-right">
          <img className="img_cart_logo" src={logoFour} alt="" />

          {/* <FontAwesomeIcon icon={faUser} /> */}
          <div className="cart_text_div">
            <h3>Avoid off-App transaction</h3>
            <p>
              Always connect & transact within the app to stay protected. Avoid
              any contact or transaction outside the app for own safety.
            </p>
          </div>
        </div>
        <div className="cart_flex_div" data-aos="fade-up">
          <img className="img_cart_logo" src={logoFive} alt="" />

          {/* <FontAwesomeIcon icon={faUser} /> */}
          <div className="cart_text_div">
            <h3>Check ShippingContent</h3>
            <p>
              Always check & carry open items and legal items. Avoid risks &
              stay safe
            </p>
          </div>
        </div>
        <div className="cart_flex_div" data-aos="fade-left">
          <img className="img_cart_logo" src={logoSix} alt="" />

          {/* <FontAwesomeIcon icon={faUser} /> */}
          <div className="cart_text_div">
            <h3>Give Feedback</h3>
            <p>
              Tell us your experience on each transaction. This will improve
              user experience.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      {/* <img className="imgCartOne" src={imgCartOne} alt="" /> */}
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
