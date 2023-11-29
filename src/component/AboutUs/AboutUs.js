import React from "react";
import "./AboutUs.css";
import trip from "../../videos/Trip_video.mp4";
import ship from "../../videos/ship_video.mp4";
import task from "../../videos/task_video.mp4";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const AboutUs = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  let data = [
    {
      id: 1,
      videoUrl: "../../videos/Trip_video.mp4",
    },
    {
      id: 2,
      videoUrl: "../../videos/ship_video.mp4",
    },
    {
      id: 3,
      videoUrl: "../../videos/task_video.mp4",
    },
  ];

  return (
    <div>
      <div className="about_video_parent-div">
        <div className="video">
          <ReactPlayer
            className="video"
            controls={true}
            url={trip}
            width="350px"
            height="450px"
          ></ReactPlayer>
        </div>
        <div className="video">
          <ReactPlayer
            controls={true}
            url={ship}
            width="350px"
            height="450px"
          ></ReactPlayer>
        </div>
        <div className="video">
          <ReactPlayer
            controls={true}
            url={task}
            width="350px"
            height="450px"
          ></ReactPlayer>
        </div>
      </div>

      <div className="about_text-div">
        <h1>TripShipTask helps you connect with others</h1>
        <p>-Give or get rides</p>
        <p>-Send or receive any goods</p>
        <p>-Send or receive any goods</p>
        <h2>and make money while you are at it.</h2>
      </div>
      <div className="about_p_text_div">
        <p>
          In the TripShipTask Mobile App, each user will sign up with their
          name, phone number, area of residence - along with ID, educational
          qualification, and profession - all this information. Then they can
          share a trip from one place to another with the user of their choice,
          carry or send each other's things, give some work to another user or
          do some work themselves - etc. It will also benefit others, gain some
          income or reduce expenses.
        </p>
        <p>
          In the TripShipTask Mobile App, each user will sign up with their
          name, phone number, area of residence - along with ID, educational
          qualification, and profession - all this information. Then they can
          share a trip from one place to another with the user of their choice,
          carry or send each other's things, give some work to another user or
          do some work themselves - etc. It will also benefit others, gain some
          income or reduce expenses.
        </p>
        <p>
          Or you'll go somewhere - post the details on the TripShipTask App,
          take a ride with the person you like from among those going the same
          way.
        </p>
        <p>
          Costs are shared and money is saved, traffic jams are reduced, the
          journey is comfortable, someone else is benefited - it's a win win for
          everyone.
        </p>
        <p>
          Say you want to send something to someone. Post in the TripShipTask
          App in the App's Ship section. Anyone who is or will be traveling the
          same route, can get connected and carry uour package.
        </p>
        <p>
          Or you can post on the App before going somewhere that you want to
          carry, someone may get connected with you and have you carry a package
          for them. Must be an open, legal item.
        </p>
        <p>
          Money is saved, time is saved, traffic jams reduced, someone else
          benefits - it's a win win for everyone.
        </p>
        <p>
          Or say you need someone to do something for you - near or far. Just
          post it on the TripShipTask App, and if another member shows interest
          - give the task to whoever you like.
        </p>
        <p>
          Or say you need someone to do something for you - near or far. Just
          post it on the TripShipTask App, and if another member shows interest
          - give the task to whoever you like.
        </p>
        <p>
          Download the TripShipTask App. Ask friends, relatives, neighbors,
          colleagues – everyone to Sign Up on this App.
        </p>
        <p>
          Users of different professions like You and I will Sign Up on
          TripShipTask and perform activities such as giving or taking a ride,
          sending or carrying something or giving a job to another user.
        </p>
        <p>
          Users of different professions like You and I will Sign Up on
          TripShipTask and perform activities such as giving or taking a ride,
          sending or carrying something or giving a job to another user.
        </p>
        <p>
          Sign up with{" "}
          <Link className="TripShipTask_com">TripShipTask.com.</Link> Assist
          each other, earn extra income. Our main purpose of building this
          platform is for you to get connected with people of same stature and
          exchange service among each other and make money while you are at it.
          <br />
          <br />
          Thank you
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
