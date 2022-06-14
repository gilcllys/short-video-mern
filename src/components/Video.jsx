import React from "react";
import styles from "./Video.module.css";
import VideoFooter from "./VideoFooter";

const Video = () => {
  const [playing, setPlaying] = React.useState(false);
  const videoRef = React.useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.paused;
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.paused;
      videoRef.current.play();
      setPlaying(true);
    }
  };


  return (
    <div className={styles.video}>
      <video
        src="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
        className={styles.videPlayer}
        loop
        ref={videoRef}
        onClick={handleVideoPress}
      ></video>
      <VideoFooter />
    </div>
  );
};

export default Video;
