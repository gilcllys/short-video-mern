import React from "react";
import styles from "./Video.module.css";

const Video = () => {
  return (
    <div className={styles.video}>
      <video className={styles.videPlayer} controls>
        <source src="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4" type="video/mp4"/>
      </video>
    </div>
  );
};

export default Video;
