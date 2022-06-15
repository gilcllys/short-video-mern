import React from "react";
import styles from "./VideoSideBar.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBoderIcon from "@mui/icons-material/FavoriteBorder";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";

const VideoSideBar = () => {
  const [liked, setLiked] = React.useState(false);

  return (
    <div className={styles.VideoSideBar}>
      <div className={styles.sideBarButton}>
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBoderIcon fontSize="large" onClick={(e) => setLiked(true)} />
        )}
        <p>{liked ? 101 : 100}</p>
      </div>

      <div className={styles.sideBarButton}>
        <MessageIcon fontSize="large" />
        <p>345</p>
      </div>

      <div className={styles.sideBarButton}>
        <ShareIcon fontSize="large" />
        <p>109</p>
      </div>
    </div>
  );
};

export default VideoSideBar;
