import React from "react";
import styles from "./VideoFooter.module.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";

const VideoFooter = ({channel, description, song}) => {
  return (
    <div className={styles.VideoFooter}>
      <div className={styles.videoFooterText}>
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className={styles.videoFooterTicker}>
          <MusicNoteIcon className={styles.videoFooterIcon} />
          <div className={styles.ticker}>
            <p>{song}</p>
          </div>
        </div>
      </div>
      <img
        className={styles.videoFooterRecord}
        src="./src/Assets/disk.png"
        alt="video Footer"
      />
    </div>
  );
};

export default VideoFooter;
