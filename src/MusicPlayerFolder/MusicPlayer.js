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
  const handlePlay = () => {
    dispatch({ type: "setPlayIcon" });
    const audio = document.querySelector("audio");
    audio.play();
  };
  const handlePause = () => {
    dispatch({ type: "setPauseIcon" });
    const audio = document.querySelector("audio");
    audio.pause();
  };
  const handleNext = () => {
    dispatch({ type: "playNextSong", payload: state.selectSong });
    let newData = null;
    if (state.playListData.includes(state.selectSong)) {
      let indexNum = state.playListData.indexOf(state.selectSong);
      if (indexNum !== 9) {
        newData = state.playListData[indexNum + 1];
      };
    } else if (state.popularData.includes(state.selectSong)) {
      let indexNum = state.popularData.indexOf(state.selectSong);
      if (indexNum !== 19) {
        newData = state.popularData[indexNum + 1];
      };
    };
    if (newData !== null) {
      const audio = document.querySelector("audio");
      audio.src = newData.audio;
      audio.play();
    };
  };
  const handlePrevious = () => {
    dispatch({ type: "playPreviousSong", payload: state.selectSong });
    let newData = null;
    if (state.playListData.includes(state.selectSong)) {
      let indexNum = state.playListData.indexOf(state.selectSong);
      if (indexNum > 0) {
        newData = state.playListData[indexNum - 1];
      };
    } else if (state.popularData.includes(state.selectSong)) {
      let indexNum = state.popularData.indexOf(state.selectSong);
      if (indexNum > 0) {
        newData = state.popularData[indexNum - 1];
      };
    };
    if (newData !== null) {
      const audio = document.querySelector("audio");
      audio.src = newData.audio;
      audio.play();
    };
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
            <MdSkipPrevious className="prevIcon" onClick={() => handlePrevious()} />
            {
              state.icons === true ? <MdOutlinePause className="playIcon" onClick={handlePause} /> : <MdPlayArrow className="playIcon" onClick={handlePlay} />
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