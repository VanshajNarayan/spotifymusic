import { useEffect, useState } from "react";
import "./Music.css";
import {
  MdSkipPrevious,
  MdPlayArrow,
  MdSkipNext,
  MdOutlinePause,
} from "react-icons/md";


const Music = () => {
  const [show, setShow] = useState(false);
  let [audioNum, setAudioNum] = useState(0);

  const audioArr = [
    "Audios/Audio1.mp3", "Audios/Audio2.mp3", "Audios/Audio3.mp3", "Audios/Audio4.mp3", "Audios/Audio5.mp3",
    "Audios/Audio6.mp3", "Audios/Audio7.mp3", "Audios/Audio8.mp3", "Audios/Audio9.mp3"
  ];

  useEffect(() => {
    const Music = document.querySelector(".audio");
    if (audioNum === 0 && show === true) {
      Music.play();
    };
    if (audioNum !== 0 && audioNum < 9) {
      Music.play();
    };
    // eslint-disable-next-line
  }, [audioNum]);

  const handlePlayButton = () => {
    const Music = document.querySelector(".audio");
    Music.play();
    setShow(!show);
  };

  const handlePauseButton = () => {
    const Music = document.querySelector(".audio");
    Music.pause();
    setShow(!show);
  };

  const handleNextButton = () => {
    if (audioNum <= 7) {
      setAudioNum(++audioNum);
      if (show === false) {
        setShow(!show);
      };
    };
  };

  const handlePreviousButton = () => {
    if (audioNum > 0) {
      setAudioNum(--audioNum);
      if (show === false) {
        setShow(!show);
      };
    };
  };

  return (
    <>
      <section className="Music_section">
        <div className="music_box">
          <img
            src="https://images.pexels.com/photos/18503093/pexels-photo-18503093/free-photo-of-rural-life-15.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Album"
            width="100%"
          />
          <audio src={audioArr[audioNum]} className="audio" ></audio>
          <div className="buttons_Box">
            <MdSkipPrevious className="icons" onClick={handlePreviousButton} />
            {show === true ? (
              <MdOutlinePause
                className="icons"
                onClick={handlePauseButton}
              />
            ) : (
                <MdPlayArrow className="icons" onClick={handlePlayButton} />
            )}
            <MdSkipNext className="icons" onClick={handleNextButton} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Music;
