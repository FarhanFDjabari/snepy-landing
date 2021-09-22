import { useState } from "react";
import "./Video.scss";
import MockupBantalTwo from "../../asset/img/Mockup_Bantal_2.jpg";
import PlayIcon from "../../asset/img/play_icon.png";
import styled from "styled-components";

const PlayButton = styled.div`
  width: 560px;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-position: center center;
`;

const TitleVideo = styled.h1`
  color: white;
  text-align: center;
  font-family: Poppins;
  font-style: Medium;
  font-size: 24px;
  line-height: 36px;
`;

const DescriptionVideo = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #faf9fe;
`;

function VideoTest() {
  const [video, setVideo] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [playPauseClass, setPlayPauseClass] = useState(
    "playpause show-visibility"
  );

  function setPlayingStatus() {
    setPlaying(!playing);

    playing ? video.pause() : video.play();
  }

  function setVisibility() {
    if (playPauseClass === "playpause show-visibility") {
      setPlayPauseClass("playpause remove-visibility");
      setPlayingStatus();
    } else {
      setPlayPauseClass("playpause show-visibility");
      setPlayingStatus();
    }
  }

  return (
    <div className="wrapper">
      <div className="video-wrapper">
        <video
          className="video"
          poster={MockupBantalTwo}
          ref={(video) => setVideo(video)}
        >
          {/* <source src={SneepyVideo} type="video/mp4" /> */}
          <source src="https://bit.ly/3mcWXWW" type="video/mp4" />
        </video>
        <div className={playPauseClass} onClick={() => setVisibility()}>
          {/* <div className="playPauseButton"></div> */}
          <PlayButton>
            <img src={PlayIcon} alt="snepy_promotional_video" />
            <TitleVideo>Masih penasaran dengan cara kerja Snepy?!</TitleVideo>
            <DescriptionVideo>
              Tonton video untuk mempelajari lebih lanjut
            </DescriptionVideo>
          </PlayButton>
        </div>
      </div>
    </div>
  );
}

export default VideoTest;
