import React from "react";
import Video from "./components/Video";
import styles from "./App.module.css";

//

function App() {
  const [videos, setVideos] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "https://short-video-mern-app.herokuapp.com/v2/posts"
      );
      const json = await data.json();
      setVideos(json);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.videos}>
        {videos.map(
          ({ url, channel, description, songs, likes, shares, messages }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={songs}
              likes={likes}
              shares={shares}
              messages={messages}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
