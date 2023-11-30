import { useData, useDispatch } from "../ContextFolder/ContextOne";
import "./SearchPage.css";

const SearchPage = () => {
  const state = useData();
  const dispatch = useDispatch();

  // ! function to play search song:-
  const playSearchSong = (data) => {
    dispatch({ type: "setPlayIcon" });
    const audio = document.querySelector("audio");
    audio.src = data.audio;
    audio.play();
    dispatch({ type: "setMusicPlayerSong", payload: data });
  };
  return (
    <>
      <section className="search_section">
        <h3 className="searchHeading">PlayList Songs</h3>
        {
          state.playlistSearchSong.map((data, index) => (

            <div className="search_box" key={index} onClick={() => playSearchSong(data)} >
          <img
            src={data.songPoster}
            alt="poster"
          />
          <div className="songNameAndartistName">
            <p className="songName"> {data.songName} </p>
            <p className="artistName"> {data.artistName} </p>
          </div>
        </div>
          ))
        }
        <h3 className="searchHeading">popular Song</h3>
        {
          state.popularSearchSong.map((data, index) => (

            <div className="search_box" key={index} onClick={() => playSearchSong(data)} >
          <img
            src={data.songPoster}
            alt="poster"
          />
          <div className="songNameAndartistName">
            <p className="songName"> {data.songName} </p>
            <p className="artistName"> {data.artistName} </p>
          </div>
        </div>
          ))
        }
      </section>
    </>
  )
};

export default SearchPage;