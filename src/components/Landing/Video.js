import { useState } from 'react'
import './Video.scss'
import MockupBantalTwo from '../../asset/img/Mockup_Bantal_2.jpg'

function VideoTest() {
  const [video, setVideo] = useState(null)
  const [playing, setPlaying] = useState(false)
  const [playPauseClass, setPlayPauseClass] = useState("playpause show-visibility")

  function setPlayingStatus() {
    setPlaying(!playing)
    
    playing ? video.pause() : video.play()
  }

  function setVisibility() {
    if (playPauseClass == "playpause show-visibility") {
      setPlayPauseClass("playpause remove-visibility")
      setPlayingStatus()
    }
    else {
      setPlayPauseClass("playpause show-visibility")
      setPlayingStatus()
    }
  }

  return(
    <div className="wrapper">
      <div className="video-wrapper">
        <video className="video" poster={MockupBantalTwo} ref={(video) => setVideo(video)}>
          <source src="http://e14aaeb709f7cde1ae68-a1d0a134a31b545b257b15f8a8ba5726.r70.cf3.rackcdn.com/projects/31432/1427815464209-bf74131a7528d0ea5ce8c0710f530bb5/1280x720.mp4" type="video/mp4" />
        </video>
        <div className={playPauseClass} onClick={() => setVisibility()}>
          <div className="playPauseButton"></div>
        </div>
      </div>
    </div>
  )
}

export default VideoTest