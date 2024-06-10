import React from "react";
import "./PaymentMethod.css";
import paymentMethodImg from "../../images/paymentMethod-img/paymentMethodImg.jpg";
const PaymentMethod = () => {
  return (
    <div className="paymentMethod_main_div">
      <div className="paymentMethod-parent-div">
        <img className="paymentMethod-img" src={paymentMethodImg} alt="" />
      </div>
    </div>
  );
};

export default PaymentMethod;
