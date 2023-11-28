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

  // ! function of Music Time Update:-
  function TimeUpdate(e) {
    let { currentTime, duration  } = e.target;

    //! childProgress:-
    let childProgress = document.querySelector('.childProgress');
    if (duration) {
      let progressWidth = (currentTime / duration) * 100;
      childProgress.style.width = `${progressWidth}%`;
    };

    //! startingTime:-
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    let startingTime = document.querySelector('.startTime');
    if (currentSec < 10) {
      startingTime.textContent = `${currentMin}:0${currentSec}`;
    } else {
      startingTime.textContent = `${currentMin}:${currentSec}`;
    };

    //!duration:-
    let endMin = Math.floor(duration / 60);
    let endSec = Math.floor(duration % 60);
    if (String(endSec).length === 1) {
      endSec = `0${endSec}`
    };
    let endingTime = document.querySelector('.endTime');
    if (duration) {
      endingTime.textContent = `${endMin}:${endSec}`;
    };

  };

  // ! function to progressBar:-
  function handleProgressBar(e) {
    let music = document.querySelector('audio');
    let { clientWidth } = e.target;
    let { offsetX } = e.nativeEvent;
    let time = (offsetX / clientWidth) * music.duration;
    music.currentTime = time;
  };

  // ! function to play the song:-
  const handlePlay = () => {
    dispatch({ type: "setPlayIcon" });
    const audio = document.querySelector("audio");
    audio.src = state.selectSong.audio;
    audio.play();
  };

  // ! function to pause the song:-
  const handlePause = () => {
    dispatch({ type: "setPauseIcon" });
    const audio = document.querySelector("audio");
    audio.src = state.selectSong.audio;
    audio.pause();
  };

  // ! function to next play the song:-
  const handleNext = () => {
    dispatch({ type: "setPlayIcon" });
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

  // ! function to previous play the song:-
  const handlePrevious = () => {
    dispatch({ type: "setPlayIcon" });
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

  // ! Jsx part
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
            <audio onTimeUpdate={TimeUpdate} onEnded={() => handleNext()} ></audio>
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
            <div className="parentProgress" onClick={handleProgressBar} >
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