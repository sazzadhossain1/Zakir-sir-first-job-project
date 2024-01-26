import React from "react";
import SideBar from "../SideBar/SideBar";
import "./FinancialAspects.css";
import { Link } from "react-router-dom";
const FinancialAspects = () => {
  return (
    <div className="financial_aspects_parent_div">
      <SideBar></SideBar>
      <div className="understanding_content_div">
        <h2 className="understanding_heading">Financial Aspects</h2>
        <div className="understanding_text">
          <h4 className="understanding_que">
            1. How is the pricing determined for services on TripShipTask?
          </h4>
          <p className="understanding_ans">
            • TripShipTask platform does not fix any amount for any deal posted
            by its users. Users are requested to use their discretion and post
            logical amounts while offering or asking for any deal on the
            platform. Our respected users can take into consideration factors
            like distance, time, nature of the task, current economic condition
            and set an amount on each post. Users also have the option to
            negotiate and set a deal with another user.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            2. What happens in case of a cancellation by a service provider?
          </h4>
          <p className="understanding_ans">
            • TripShipTask cancellation policies are designed to be fair to both
            parties using its penalty and compensation structure. Find out more
            on <Link>https://app.tripshiptask.com/pages/cancellation</Link>
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            3. Does TripShipTask offer any reward or referral program?
          </h4>
          <p className="understanding_ans">
            • Yes, we offer an excellent and exceptional loyalty rewards for our
            users. It’s called a ‘one-step referral program” where if you refer
            someone and he/she uses TripShipTask, on every earning he/she
            generates using TripShipTask, you get a small percentage from it
            indefinitely for your lifetime. Even when you do not use the
            platform, you will be getting referral earnings automatically
            whenever your referral uses the platform. You can refer unlimited
            number of people and can earn bonus from each earning transaction
            made by them – sky is the limit. However, if your referral refers
            someone, you do not get any bonus from that referral.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            4. Can service providers set their own rates on TripShipTask?
          </h4>
          <p className="understanding_ans">
            • Users have the flexibility to set their own rates using their
            discretion and post logical amounts for the services offered. The
            amount is negotiable.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            5. How does TripShipTask handle tips or gratuities for services?
          </h4>
          <p className="understanding_ans">
            • TripShipTask does not track tips or any additional money given to
            another user for the service/services rendered. TripShipTask shall
            only take into account the exact amount set and agreed upon by the
            users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinancialAspects;
