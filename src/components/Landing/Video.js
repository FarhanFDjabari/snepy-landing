import styled from "styled-components";
import './Video.scss'


function Video() {
  return(
    <div className="video-wrapper">
      <iframe src="https://www.youtube.com/embed/9nQurjU-Ky0" allowfullscreen></iframe>
    </div>
  )
}
export default Video;