import React from "react";
import "./ServiceSpecifics.css";
import SideBar from "../SideBar/SideBar";
import "./ServiceSpecifics.css";
import { Link } from "react-router-dom";

const ServiceSpecifics = () => {
  return (
    <div className="service_specifics_parent_div">
      <SideBar></SideBar>
      <div className="understanding_content_div">
        <h2 className="understanding_heading">Service Specifics</h2>
        <div className="understanding_text">
          <h4 className="understanding_que">
            1. What kind of vehicles are allowed for communal travel services?
          </h4>
          <p className="understanding_ans">
            • Users can use their own or can use rental vehicles to offer a ride
            to other users on the platform. Vehicles must be reliable and safe
            and legally registered and insured. Users can use Sedan Car, Minivan
            or MicroBus, Motor Cycle, Scooter, CNG or tuk tuk and Rickshaw.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            2. Are there any items prohibited from being sent through
            TripShipTask?
          </h4>
          <p className="understanding_ans">
            • Yes, there are restrictions on certain items, such as illegal
            substances, dangerous goods, any controlled substances according to
            the law of the land.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            3. How does TripShipTask handle lost or missing items?
          </h4>
          <p className="understanding_ans">
            • TripShipTask verifies each user’s national id as well as validate
            data provided by the user. Any user carrying any goods deposit the
            same amount of money as the product is worth with TripShipTask for
            security purpose. In case of any missing item or non-delivery of the
            good, sender is compensated after a thorough investigation is done
            and if found that the carrier is responsible for the missing item.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            4. What happens when the recipient is absent when I reach the
            specified destination to deliver a shipment?
          </h4>
          <p className="understanding_ans">
            • If you pick up a package to deliver, please call the recipient at
            least 30 minutes before you project to arrive at the spot. Take a
            screenshot on your phone showing the call time. If the recipient is
            not present at the specified location to pick up the package when
            you arrive at the spot, you try to contact the person over the phone
            who is supposed to receive the goods. Take a screenshot on your
            phone showing the call time. If you fail to reach, try to call the
            person who posted it. Take a screenshot on your phone showing the
            call time. Allow a reaction time for 10-15 minutes. Call the
            recipient again - take a screenshot on your phone showing the call
            time. At this point, if the wait time is longer or the recipient
            fails to arrive within 10-15 minutes from your last call to the
            recipient, feel free to go on about your way with the package. The
            sender will be charged a penalty and you will be credited for the
            trouble. At this point, the sender or the recipient will have to
            come to a location you specify at a later date or time (must be
            within 3 business days) and pick up the goods.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            5. Can I use TripShipTask for specialized or professional tasks?
          </h4>
          <p className="understanding_ans">
            • Yes, the platform caters to a range of tasks, including
            specialized and professional services, depending on the skills of
            our members or users.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            6. Is there insurance coverage for services provided or availed
            through TripShipTask?
          </h4>
          <p className="understanding_ans">
            • Details on insurance coverage for different services is specified
            in our policy section.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            7. Can I use TripShipTask for large or bulky item deliveries?
          </h4>
          <p className="understanding_ans">
            • Yes, our platform accommodates various delivery sizes, including
            large or bulky items given that any user is equipped for such tasks
            and agrees to carry it.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            8. How does TripShipTask handle sensitive or confidential tasks?
          </h4>
          <p className="understanding_ans">
            • We maintain strict confidentiality protocols, and users can
            specify if a task requires extra discretion. Users can specify the
            level of damage it would cause beforehand while posting a task, and
            then if any mishandling occurs, the service provider may be
            penalized for the damage after a thorough investigation or proof
            from the provided elements.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            9. Can I offer or request pet-related services on TripShipTask?
          </h4>
          <p className="understanding_ans">
            • Yes, pet-related services like pet sitting or dog walking are
            popular on our platform.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            10. Can I get same-day service through TripShipTask?
          </h4>
          <p className="understanding_ans">
            • Yes, given that any user agrees to it.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            11. What happens if a delivered item is damaged during transit?
          </h4>
          <p className="understanding_ans">
            • In the rare event of damage, we ensure a fair outcome for all
            parties involved. To avoid any financial or intangible loss, we
            recommend all users to document every step of the way – using photo
            or video taking with cell phone and hold on to them for at least 3
            days after the deal is concluded. After 3 business days, if no claim
            is made, you can erase or delete the record. Meaning, no claim shall
            be deemed valid after 3 business days. After a thorough
            investigation, a fair judgment will be given by TripShipTask team.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            12. Can I schedule a service at odd hours through TripShipTask?
          </h4>
          <p className="understanding_ans">
            • Yes you can, given that the user you are connecting with is
            comfortable with it.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            13. Does TripShipTask offer services in rural or remote areas?
          </h4>
          <p className="understanding_ans">
            • Yes, any user from any part of the country can use the
            system/platform.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            14. Can I use TripShipTask for moving or relocation services?
          </h4>
          <p className="understanding_ans">
            • Yes you can, given that any user agrees to it.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            15. How does TripShipTask ensure punctuality in its services?
          </h4>
          <p className="understanding_ans">
            • TripShipTask does not ensure punctuality of any user. However,
            there is a penalty system in place. You can find it on the
            cancellation policy page -
            <Link>https://app.tripshiptask.com/pages/cancellation</Link>. This
            policy is likely to encourage users maintain punctuality.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            16. What are the safety protocols for communal travelling on
            TripShipTask?
          </h4>
          <p className="understanding_ans">
            • Safety protocols include user/driver national id verification,
            in-app safety features like ride tracking, other information and
            verification process to authenticate users’ data so we can legally
            hold the person responsible.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            17. Can I block or report a user on TripShipTask?
          </h4>
          <p className="understanding_ans">
            • Yes, for your safety and comfort, you can report a user using the
            support ticket system from your panel that violates our community
            standards.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            18. How do I handle a dispute with a service provider?
          </h4>
          <p className="understanding_ans">
            • If there's a dispute, you can open a support ticket from your
            panel and our customer service team will mediate and help find a
            resolution in accordance with our policies.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            19. What kind of background checks are performed on service
            providers?
          </h4>
          <p className="understanding_ans">
            • We conduct a thorough background check, including national
            identification verification, professional validation, references for
            all service providers.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            20. How is TripShipTask addressing environmental concerns?
          </h4>
          <p className="understanding_ans">
            • We're constantly innovating to reduce our environmental footprint,
            including promoting carpooling and sustainable practices.
          </p>
        </div>
        <div className="understanding_text">
          <h4 className="understanding_que">
            21. Can I share my TripShipTask experience on social media?
          </h4>
          <p className="understanding_ans">
            • Absolutely! We encourage you to share your experiences on social
            media and tag us to help grow our community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSpecifics;
