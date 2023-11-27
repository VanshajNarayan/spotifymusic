import { useState } from "react";
import "./MusicPlayer.css";
import {
  MdSkipPrevious,
  MdPlayArrow,
  MdOutlinePause,
  MdSkipNext,
  MdCloudDownload,
  MdLoop,
} from "react-icons/md";
import { AiOutlineSound } from "react-icons/ai";
import { useData, useDispatch } from "../Components/ContextFolder/ContextOne";

const MusicPlayer = () => {
  const state = useData();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handlePlay = () => {
    const audio = document.querySelector("audio");
    audio.play();
    setShow(!show);
  };
  const handlePause = () => {
    const audio = document.querySelector("audio");
    audio.pause();
    setShow(!show);
  };
  const handleNext = () => {
    dispatch({ type: "playNextSong", payload: state.selectSong });
    const audio = document.querySelector("audio");
    audio.src = state.selectSong.audio;
    audio.play();
    console.log(state.selectSong, audio);
  };
  return (
    <>
      <section className="musicPlayer_Section">
        <div className="musicplayer_box">

          
          <div className=" imgSongNameAndArtistName music_box">
            <img
              src={state.selectSong.songPoster}
              alt="poster"
              width="100%"
            />
            <div className="songAndartistName">
              <p className="songName"> {state.selectSong.songName} </p>
              <p className="artistName"> {state.selectSong.artistName} </p>
            </div>
            <audio src={state.selectSong.audio}></audio>
          </div>

          <div className="musicIons music_box">
            <MdLoop className="loopIcons" />
            <MdCloudDownload className="downloadIcon" />
            <MdSkipPrevious className="prevIcon" />
            {
              show === true ? <MdOutlinePause className="playIcon" onClick={handlePause} /> : <MdPlayArrow className="playIcon" onClick={handlePlay} />
            }
            <MdSkipNext className="nextIcon" onClick={() => handleNext()} />
          </div>
          <div className="progressBar music_box">
            <div className="startTime">0:00</div>
            <div className="parentProgress">
              <div className="childProgress"></div>
            </div>
            <div className="endTime">0:00</div>
          </div>
          <div className="soundBox music_box progressBar">
            <AiOutlineSound className="soundIcon"/>
            <div className="parentProgress">
              <div className="childProgress"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default MusicPlayer;