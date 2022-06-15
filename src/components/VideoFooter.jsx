import React from 'react'
import styles from './VideoFooter.module.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote'

const VideoFooter = () => {
  return (
    <div className={styles.VideoFooter}>
      <div className={styles.videoFooterText}>
        <h3>@nabendu82</h3>
        <p>Macbook Air to new Windows editing beast</p>
        <div className={styles.videoFooterTicker}>
          <MusicNoteIcon className={styles.videoFooterIcon} />
        </div>
      </div>
    </div>
  )
}

export default VideoFooter