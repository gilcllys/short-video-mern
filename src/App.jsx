import React from "react";
import Video from "./components/Video";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.videos}>
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
