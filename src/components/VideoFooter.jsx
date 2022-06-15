import React from 'react'
import styles from './VideoFooter.module.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import  Ticker from 'react-ticker'


const VideoFooter = () => {
  return (
    <div className={styles.VideoFooter}>
      <div className={styles.videoFooterText}>
        <h3>@nabendu82</h3>
        <p>Macbook Air to new Windows editing beast</p>
        <div className={styles.videoFooterTicker}>
          <MusicNoteIcon className={styles.videoFooterIcon} />
          <Ticker mode='smooth'>
              {() =>(
                <>
                  <p>I am a Windows PC</p>
                </>
              )}
          </Ticker>
        </div>
      </div>
      <img src='../Assets/noun-vinyl-477519.png' alt="video Footer" />
    </div>
  )
}

export default VideoFooter