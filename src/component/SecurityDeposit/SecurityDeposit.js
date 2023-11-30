import React from "react";
import "./SecurityDeposit.css";

const SecurityDeposit = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  return (
    <div className="security-parent-div">
      <div className="security-div">
        <h1 className="security-heading">Security Deposit</h1>
      </div>
      <div className="security-p-div">
        <p className="security-p">
          If you would like to carry packages, you would have to keep a security
          deposit with TripShipTask. Security deposit aount can vary. However
          minimum amount is 500 taka. The Security deposit is your money kept
          with us for a sense of security for the package senders. If you
          deposit 2000 taka, you will be able to carry packages that are valued
          2000 tk or less. You will not be able to carry any package whose value
          is 2500 taka. If you keep a security deposit of 2500 tk or more, only
          then you will be able to catch that package to deliver.
        </p>
        <p className="security-p">
          Likewise, if you want to send a package using TripShipTask platform
          and your package value is say 3000 tk, the person who has a minimum
          deposit of 3000 taka, only that person will be able to express
          interest to carry your package. Those who have secity deposit under
          3000 tk, won't be able to connect with you to carry that package.
        </p>
        <p className="security-p">
          Again, your deposit is your money. If you request to withdraw the
          security deposit, we will instantly return it to you through the
          channel your request - bank account or mobile wallets like bkash or
          nagad or any channel of your choice. Please bear in mind that
          transaction fee is deducted from the transaction.
        </p>
        <p className="security-p">
          Higher the amount of security deposit, higher the chances of getting
          to the 'send a package' posts. So higher the chances to make money.
        </p>
        <p className="security-p">
          If you have any further question, please open a ticket from the panel.
        </p>
        <p className="security-p">Thank you.</p>
      </div>
    </div>
  );
};

export default SecurityDeposit;
