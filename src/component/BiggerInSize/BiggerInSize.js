import React from "react";
import "./BiggerInSize.css";
import { Link } from "react-router-dom";
const BiggerInSize = () => {
  return (
    <div>
      <div className="biggerINSize-text-div">
        <div className="biggerInSize-heading-text-div">
          <h1>BIGGER IN SIZE</h1>
          <h1>BETTER IN COMFORTABILITY</h1>
        </div>
        <div className="biggerInSize-p-text-div">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
            consequatur, earum labore odit debitis ipsa qui tempora!
          </p>
          <Link className="learn-more">
            <button>Learn More</button>
          </Link>
        </div>
      </div>
      <div className="biggerInSiz-background-div">
        <div className="biggerInSiz-cart-div">
          <div className="biggerInSiz-single-cart">
            <div className="text-logo-flex-div">
              <i className="fa-solid fa-car car-icon"></i>
              <h3 className="basic-header">BASIC TAXI FARES</h3>
            </div>
            <p className="biggerInSiz-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              recusandae expedita placeat.
            </p>
            <div>
              <div className="price-flex-div">
                <h4 className="price-title">INITIAL CHARGE</h4>
                <p className="price">$3.50</p>
              </div>
              <hr />
              <div className="biggerInSize-blank-div"></div>
              <div className="price-flex-div">
                <h4 className="price-title">Extra Time</h4>
                <p className="price">$3.50</p>
              </div>
              <hr />
              <div className="biggerInSize-blank-div"></div>
              <div className="price-flex-div">
                <h4 className="price-title">Toll Money</h4>
                <p className="price">$3.50</p>
              </div>
              <hr />
              <div className="biggerInSize-blank-div"></div>
              <div className="price-flex-div">
                <h4 className="price-title">INITIAL CHARGE</h4>
                <p className="price">$3.50</p>
              </div>
              <div className="biggerInSize-blank-div"></div>
            </div>

            <Link className="order-button-one">
              <button className="order-text">Order Taxi Now</button>
            </Link>
          </div>
          {/*  */}
          <div className="biggerInSize-second-single-cart">
            <div className="second-cart-text-logo-flex-div">
              <i class="fa-solid fa-car second-car-logo"></i>
              <h3 className="basic-header">BASIC TAXI FARES</h3>
            </div>
            <p className="biggerInSiz-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              recusandae expedita placeat.
            </p>
            <div>
              <div className="price-flex-div">
                <h4 className="price-title">INITIAL CHARGE</h4>
                <p className="price">$3.50</p>
              </div>
              <hr />
              <div className="biggerInSize-blank-div"></div>
              <div className="price-flex-div">
                <h4 className="price-title">Extra Time</h4>
                <p className="price">$3.50</p>
              </div>
              <hr />
              <div className="biggerInSize-blank-div"></div>
              <div className="price-flex-div">
                <h4 className="price-title">Toll Money</h4>
                <p className="price">$3.50</p>
              </div>
              <hr />
              <div className="biggerInSize-blank-div"></div>
              <div className="price-flex-div">
                <h4 className="price-title">INITIAL CHARGE</h4>
                <p className="price">$3.50</p>
              </div>
              <div className="biggerInSize-blank-div"></div>
            </div>

            <Link className="order-button-two">
              <button className="order-text">Order Taxi Now</button>
            </Link>
          </div>
          {/*  */}
          <div className="last-cart-parent-div">
            <h1 className="last-cart-header">CHECK RATES</h1>
            <h1 className="last-cart-header">FROM TAXITA</h1>
            <p className="last-cart-p-one">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <p className="last-cart-p-two">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <div className="media-parent-div">
              <div>
                <i class="fa-brands fa-facebook"></i>
              </div>
              <div>
                <i class="fa-brands fa-twitter"></i>
              </div>
              <div>
                <i class="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiggerInSize;
