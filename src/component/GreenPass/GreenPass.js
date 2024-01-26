import React from "react";
import "./GreenPass.css";

const GreenPass = () => {
  return (
    <div className="green_pass_div">
      <h1 className="green_pass">GREEN PASS</h1>
      <p>We will offer GREEN PASS only to our ID Verified users.</p>
      <p>
        If you are a GREEN PASS user, you do not get charged for any of your
        transactions with other users. Usually users get a 15% charge on every
        transaction made on the platform.
      </p>
      <p>
        GREEN PASS is a great way to save money. With GREEN PASS, you can do
        unlimited transactions.
      </p>
      <p>
        You can get a GREEN PASS for a flat fee of 220 tk. It is valid for 30
        days.
      </p>
      <p>
        To get a GREEN PASS, please log into your account and click on the GREEN
        PASS icon on the Menu Bar.
      </p>
      <p>Thank you.</p>

      <button className="green_pass_click_here_btn">Click Here</button>
    </div>
  );
};

export default GreenPass;
