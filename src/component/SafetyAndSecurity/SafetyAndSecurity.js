import React from "react";
import SideBar from "../SideBar/SideBar";
import "./SafetyAndSecurity.css";

const SafetyAndSecurity = () => {
  return (
    <div className="sideBar_parent_container">
      <SideBar></SideBar>
      <div className="understanding_content_div">
        <h2 className="understanding_heading">Safety and Security</h2>
        <div className="understanding_text">
          <h4 className="understanding_que">1.Is TripShipTask safe to use?</h4>
          <p className="understanding_ans">
            • Safety is a top priority at TripShipTask. We ensure all members of
            our community are vetted for reliability and trustworthiness,
            providing a secure environment for all transactions and
            interactions. All members or users of TripShipTask are id verified.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            2.How does TripShipTask ensure the quality of services offered?
          </h4>
          <p className="understanding_ans">
            • We encourage user ratings and reviews for users to understand and
            gauge other users' service standards. Additionally, regular quality
            checks and community feedback are integral to our process.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            3.What measures does TripShipTask take for COVID-19 safety?
          </h4>
          <p className="understanding_ans">
            • We follow the latest health guidelines and highly encourage our
            users contactless transactions, mask-wearing, and sanitization to
            ensure the safety of all users.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            4.How does TripShipTask ensure privacy and data protection?
          </h4>
          <p className="understanding_ans">
            • We adhere to strict privacy policies and employ robust security
            measures to protect user data. Your personal information is
            encrypted and securely stored.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            5.What should I do if I encounter an issue during a ride or task?
          </h4>
          <p className="understanding_ans">
            • Contact 999 immediately using your phone if you encounter any kind
            of adversity within Bangladesh. Inform our support team through the
            app about the incident. We're here to ensure your experience is safe
            and satisfactory by aiding you with necessary information or support
            where we can.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            6.What should I do if a service provider or customer behaves
            inappropriately?
          </h4>
          <p className="understanding_ans">
            • Inappropriate behavior is taken seriously. Report any such
            incidents immediately through the app or tripshiptask.com website,
            and our team will take appropriate action.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            7.How are service providers vetted on TripShipTask?
          </h4>
          <p className="understanding_ans">
            o We conduct a thorough vetting process, including background checks
            and verification of information on each user to ensure the safety
            and reliability of our users or service providers.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            8.What are the safety protocols for communal travelling on
            TripShipTask?
          </h4>
          <p className="understanding_ans">
            o Safety protocols include identification verification of the users,
            app usage history, and in-app safety features like activity
            tracking. Users are requested to ensure face-match the service
            provides, data check before starting to commute with another user to
            gauge or assess info consistency provided by another user.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            9.What Safety Measure a user should take while sending or receiving
            a package using Ship module?
          </h4>
          <p className="understanding_ans">
            • Each user should do the following before sending or receiving a
            package to deliver –
          </p>
          <div>
            <p>
              o Make sure to physically see the items to ensure that the items
              are open and legal items.
            </p>
            <p>
              o Make sure to physically see the items to check the condition of
              the items, the fragility of the items, the size of the items etc.
            </p>
            <p>o We do not encourage users to carry physical currency.</p>
            <p className="mb-10">
              o Each user should make sure that the person he/she is interacting
              with is the person that is on TripShipTask Mobile App or website.
              In other words, see the photo and ensure that it’s the same person
              in physical form.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyAndSecurity;
