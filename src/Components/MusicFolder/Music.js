import { useState } from "react";
import "./Music.css";
import {
  MdSkipPrevious,
  MdPlayArrow,
  MdSkipNext,
  MdOutlinePause,
} from "react-icons/md";


const Music = () => {
  const [show, setShow] = useState(false);

  const handlePlayButton = () => {
    const Music = document.querySelector(".audio");
    Music.play();
    setShow(!show);
  };

  const handlePauseButton = () => {
    const Musics = document.querySelector(".audio");
    Musics.pause();
    setShow(!show);
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
          <audio src="Audios/Audio9.mp3" className="audio" ></audio>
          <div className="buttons_Box">
            <MdSkipPrevious className="icons" />
            {show === true ? (
              <MdOutlinePause
                className="icons"
                onClick={handlePauseButton}
              />
            ) : (
                <MdPlayArrow className="icons" onClick={handlePlayButton} />
            )}
            <MdSkipNext className="icons" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Music;
