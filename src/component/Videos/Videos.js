import React from "react";
import "./Videos.css";

import LeftSideMenue from "../LeftSideMenue/LeftSideMenue";

const Videos = () => {
  return (
    <div className="video_flex_div">
      <div className="LeftSideMenue_div">
        {/* <SideBar></SideBar> */}
        <LeftSideMenue></LeftSideMenue>
      </div>

      <div className="video_grid_div">
        <div>
          <h3 className="video_title">TripShipTask.com কি তা জানেন কি?</h3>
          <iframe
            id="video_first"
            className="iframe_video"
            src="https://www.youtube.com/embed/0sde2Bed_DA?si=wqw8vKGMvx2tqA_w"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <h3 className="video_title">
            How to Sign Up and Verify E-Mail - কিভাবে সাইন আপ এবং ইমেইল ভেরিফাই
            করতে হয়
          </h3>
          <iframe
            id="video_second"
            className="iframe_video"
            src="https://www.youtube.com/embed/fdv5u-mD7Qw?si=LxoF_NPSN5FpxKKI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <h3 className="video_title">
            How to Log in and use the user panel - কিভাবে লগ ইন করে সিস্টেম
            ব্যবহার করতে হয়
          </h3>
          <iframe
            id="video_third"
            className="iframe_video"
            src="https://www.youtube.com/embed/M3mwKJj9gXY?si=arvqOwoD7x4xVzEp"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <h3 className="video_title">
            How to Open a Support Ticket - কিভাবে একটি সাপোর্ট টিকেট খুলতে হয়
          </h3>
          <iframe
            id="video_forth"
            className="iframe_video"
            src="https://www.youtube.com/embed/FLi9Ingfs2c?si=I4BRIAwhZSsxLV2O"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <h3 className="video_title">
            How to refer someone - কিভাবে অন্যদের রেফার করতে হয়
          </h3>
          <iframe
            id="video_fifth"
            className="iframe_video"
            src="https://www.youtube.com/embed/5QhPuhTgH2g?si=oon4Ux0e_IjBHcsM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <h3 className="video_title">
            TripShipTask Mobile App- Install, Sign Up, Verify - কিভাবে অ্যাাপ -
            ইন্সটল, সাইন আপ, ভেরিফাই করতে হয়
          </h3>
          <iframe
            id="video_last"
            className="iframe_video"
            src="https://www.youtube.com/embed/dmKi1TMHL2w?si=Tatcc5njT3l5C87g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Videos;
