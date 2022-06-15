import React from "react";
import styles from "./Video.module.css";
import VideoFooter from "./VideoFooter";
import VideoSideBar from "./VideoSideBar";

const Video = ({url, channel, description,song, likes, shares, messages}) => {
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
        src={url}
        className={styles.videoPlayer}
        loop
        ref={videoRef}
        onClick={handleVideoPress}
      ></video>
      <VideoFooter channel={channel} description={description} song={song}/>
      <VideoSideBar likes={likes} shaares={shares} messages={messages}/>
    </div>
  );
};

export default Video;
