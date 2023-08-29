import ReactPlayer from "react-player";
import React from "react";
import "./index.css"

const videos = () => {
  return (
    <div className="video-player-container">
      <div className="video-player">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=K36xPk7bNdw"
          width="100%"
        />
      </div>
      <div className="video-player">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=b9eMGE7QtTk"
          width="100%"
        />
      </div>
    </div>
  );
};

export default videos;
