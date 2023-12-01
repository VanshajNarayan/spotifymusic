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
import { CiVolumeMute } from "react-icons/ci";
import { TfiLoop } from "react-icons/tfi";
import { IoMdShuffle  } from "react-icons/io";
import { useData, useDispatch } from "../Components/ContextFolder/ContextOne";
import { useRef, useState } from "react";

const MusicPlayer = () => {

  const [range, setRange] = useState(75);

  const [show, setShow] = useState(false);

  let songSelectionIcon = useRef("looplist");

  let [selectionIcon, setSelectionIcon] = useState(songSelectionIcon.current);

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
    let x = Math.floor(Math.random() * 8) + 1;
    let y = Math.floor(Math.random() * 18) + 1;
    dispatch({ type: "setPlayIcon" });
    dispatch({ type: "playNextSong", payload: {selectSong: state.selectSong, selectionIcon:selectionIcon, x:x, y:y} });
    let newData = null;
    if (state.playListData.includes(state.selectSong)) {
      let indexNum = state.playListData.indexOf(state.selectSong);
      if (indexNum !== 9) {
        if (selectionIcon === "shuffle") {
          newData = state.playListData[x];
        } else {
          newData = state.playListData[indexNum + 1];
        };
      };
    } else if (state.popularData.includes(state.selectSong)) {
      let indexNum = state.popularData.indexOf(state.selectSong);
      if (indexNum !== 19) {
        if (selectionIcon === "shuffle") {
          newData = state.popularData[y];
        } else {
          newData = state.popularData[indexNum + 1];
        };
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
    let x = Math.floor(Math.random() * 8) + 1;
    let y = Math.floor(Math.random() * 18) + 1;
    dispatch({ type: "setPlayIcon" });
    dispatch({ type: "playPreviousSong", payload: {selectSong: state.selectSong, selectionIcon:selectionIcon, x:x, y:y} });
    let newData = null;
    if (state.playListData.includes(state.selectSong)) {
      let indexNum = state.playListData.indexOf(state.selectSong);
      if (indexNum > 0) {
        if (selectionIcon === "shuffle") {
          newData = state.playListData[x];
        } else {
          newData = state.playListData[indexNum - 1];
        };
      };
    } else if (state.popularData.includes(state.selectSong)) {
      let indexNum = state.popularData.indexOf(state.selectSong);
      if (indexNum > 0) {
        if (selectionIcon === "shuffle") {
          newData = state.popularData[y];
        } else {
          newData = state.popularData[indexNum - 1];
        };
      };
    };
    if (newData !== null) {
      const audio = document.querySelector("audio");
      audio.src = newData.audio;
      audio.play();
    };
  };

  const handleLoop = () => {
    setSelectionIcon('loop');
  };

  const handleLoopList = () => {
    setSelectionIcon('looplist');
  };

  const handleShuffle = () => {
    setSelectionIcon('shuffle');
  };

  // ! function to sound volume:-
  function handleSoundVolume(e) {
    const audio = document.querySelector("audio");
    setRange(e.target.value);
    if (show === false) {
      audio.volume = e.target.value / 100;
    };
  };

  // ! function to put sound:-
  function handleLoudSound() {
    setShow(!show);
    const audio = document.querySelector("audio");
    audio.volume = 0;
  };

  // ! function mute sound:-
  function handleMute() {
    setShow(!show);
    const audio = document.querySelector("audio");
    const inputRange = document.querySelector("#range");
    audio.volume = inputRange.value / 100;
  };

  // ! function to loop and ended song:-
  const handleEnded = () => {
    if (selectionIcon === "loop") {
      const audio = document.querySelector("audio");
      audio.src = state.selectSong.audio;
      audio.play();
    } else {
      handleNext();
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
            <audio onTimeUpdate={TimeUpdate} onEnded={handleEnded} ></audio>
          </div>

          <div className="musicIons music_box">

            {
              selectionIcon === "looplist" ?
              (<TfiLoop className="loopIcons" title="Loop List" onClick={handleLoop} />) :
              selectionIcon === "loop" ?
              (<MdLoop className="loopIcons" title="Loop" onClick={handleShuffle} />) :
              (<IoMdShuffle  className="loopIcons" title="shuffle" onClick={handleLoopList} />)
            }
            
            <a href = {state.selectSong.audio} download={state.selectSong.audio}> <MdCloudDownload className="downloadIcon" /> </a>
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
            {
              show === true ? <CiVolumeMute className="soundIcon" onClick={handleMute} /> : <AiOutlineSound className="soundIcon" onClick={handleLoudSound} />
            }
            <input type="range" id="range" min="0" max="100" value={range} onChange={handleSoundVolume} />
          </div>
        </div>
      </section>
    </>
  )
};

export default MusicPlayer;