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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const ImgCartOne = () => {
  return (
    <div className="imgCartOne-parent-div">
      {/*  */}
      <div className="cart_grid_div">
        <div className="cart_flex_div">
          <img src="" alt="" />

          <FontAwesomeIcon icon={faUser} />
          <div className="cart_text_div">
            <h3>Use Digital Payment</h3>
            <p>
              Please avoid contact with <br /> notes & coins. Use Digital <br />{" "}
              payment and stay safe
            </p>
          </div>
        </div>
        <div className="cart_flex_div">
          <img src="" alt="" />

          <FontAwesomeIcon icon={faUser} />
          <div className="cart_text_div">
            <h3>Cofirm & Go</h3>
            <p>
              Confirm on offer. <br /> if you don't confirm, <br /> another user
              may <br /> take your place.
            </p>
          </div>
        </div>
        <div className="cart_flex_div">
          <img src="" alt="" />

          <FontAwesomeIcon icon={faUser} />
          <div className="cart_text_div">
            <h3>Avoid Cancellation Fee</h3>
            <p>
              Cancel at least 3 hours <br /> early to avoid cancellation fee
            </p>
          </div>
        </div>
        <div className="cart_flex_div">
          <img src="" alt="" />

          <FontAwesomeIcon icon={faUser} />
          <div className="cart_text_div">
            <h3>Avoid off-App transaction</h3>
            <p>
              Always connect & transact <br /> within the app to stay protected.{" "}
              <br /> Avoid any contact or transaction <br /> outside the app for
              own safety.
            </p>
          </div>
        </div>
        <div className="cart_flex_div">
          <img src="" alt="" />

          <FontAwesomeIcon icon={faUser} />
          <div className="cart_text_div">
            <h3>Check ShippingContent</h3>
            <p>
              Always check & carry <br /> open items and legal items. <br />{" "}
              Avoid risks & stay safe
            </p>
          </div>
        </div>
        <div className="cart_flex_div">
          <img src="" alt="" />

          <FontAwesomeIcon icon={faUser} />
          <div className="cart_text_div">
            <p>Give Feedback</p>
            <p>
              Tell us your experience on each <br /> transaction. this will
              improve <br /> user experience.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <img className="imgCartOne" src={imgCartOne} alt="" />
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
