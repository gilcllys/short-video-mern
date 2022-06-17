import React from "react";
import styles from "./VideoSideBar.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBoderIcon from "@mui/icons-material/FavoriteBorder";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";

const VideoSideBar = ({likes, shares, messages}) => {
  const [liked, setLiked] = React.useState(false);

  return (
    <div className={styles.VideoSideBar}>
      <div className={styles.sideBarButton}>
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBoderIcon fontSize="large" onClick={(e) => setLiked(true)} />
        )}
        <p>{liked ? +likes + 1 : likes}</p>
      </div>

      <div className={styles.sideBarButton}>
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>

      <div className={styles.sideBarButton}>
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSideBar;
