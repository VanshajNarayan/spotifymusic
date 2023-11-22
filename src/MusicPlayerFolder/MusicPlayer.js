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

const MusicPlayer = () => {
  const [show, setShow] = useState(false);
  const handlePlay = () => {
    setShow(!show);
  };
  const handlePause = () => {
    setShow(!show);
  };
  return (
    <>
      <section className="musicPlayer_Section">
        <div className="musicplayer_box">
          <div className=" imgSongNameAndArtistName music_box">
            <img
              src="https://images.pexels.com/photos/1885213/pexels-photo-1885213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="poster"
              width="100%"
            />
            <div className="songAndartistName">
              <p className="songName">oo sanam re</p>
              <p className="artistName">Vanshaj narayan</p>
            </div>
          </div>
          <div className="musicIons music_box">
            <MdLoop className="loopIcons" />
            <MdCloudDownload className="downloadIcon" />
            <MdSkipPrevious className="prevIcon" />
            {
              show === true ? <MdOutlinePause className="playIcon" onClick={handlePause} /> : <MdPlayArrow className="playIcon" onClick={handlePlay} />
            }
            <MdSkipNext className="nextIcon"/>
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