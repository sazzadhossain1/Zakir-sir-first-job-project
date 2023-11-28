import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
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
      {/* <div className="gallery">
        {data.map((items) => {
          // console.log(items);
          return (
            <div key={items.id}>
              <div>
                <Video
                  className="video"
                  style={{ width: "100%" }}
                  controls={[
                    "playPause",
                    "Seek",
                    "Time",
                    "Volume",
                    "Fullscreen",
                  ]}
                  poster={items.poster}
                >
                  <source src={items.videoUrl} type="video/webm"></source>
                </Video>
                <p className="video-index">Video - {items.id}</p>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default AboutUs;
