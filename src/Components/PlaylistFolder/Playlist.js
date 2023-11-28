import { useState } from "react";
import "./Playlist.css";
import { MdPlayArrow, MdOutlinePause } from "react-icons/md";
import { useData, useDispatch } from "../ContextFolder/ContextOne";

const Playlist = () => {
  const state = useData();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handlePause = () => {
    setShow(!show);
  };
  const handleplay = () => {
    setShow(!show);
  };
  const playlistSongPlay = (data) => {
    dispatch({ type: "setPlayIcon" });
    const audio = document.querySelector("audio");
    audio.src = data.audio;
    audio.play();
    dispatch({ type: "setMusicPlayerSong", payload: data });
  };
  return (
    <>
      <section className="playlist_section">
        <div className="playlist_box">

          {
            state.playListData.map((data, index) => (

              <div className="songs_box" key={index} onClick={() => playlistSongPlay(data)} >
            <div className="imageAndTextPart">
              <img
                src={data.songPoster}
                alt="poster"
                width="100%"
              />
              <div className="songNameAndArtist">
                <p className="songName"> {data.songName} </p>
                <p className="artistName"> {data.artistName} </p>
              </div>
            </div>
            <div className="play_icons">
              {show === true ? (
                <MdOutlinePause className="icons" onClick={handlePause} />
              ) : (
                <MdPlayArrow className="icons" onClick={handleplay} />
              )}
            </div>
            <audio src={data.audio}></audio>
          </div>

            ))
          }
          
        </div>
      </section>
    </>
  );
};

export default Playlist;
