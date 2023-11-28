import "./Home.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useData, useDispatch } from "../ContextFolder/ContextOne";

const Home = () => {
  const state = useData();
  const dispatch = useDispatch();
  const artistpic = (state.allMusicData.map((data) => data.photo));
  const handleArtist = (photo) => {
    dispatch({ type: "setMusic", payload: photo });
    if (state.icons === true) {
      dispatch({ type: "setPauseIcon" });
    };
  };
  const popularSongPlay = (data) => {
    dispatch({ type: "setPlayIcon" });
    const audio = document.querySelector("audio");
    audio.src = data.audio;
    audio.play();
    dispatch({ type: "setMusicPlayerSong", payload: data });
  };
  return (
    <>
      <section className="HomeSection">
        <div className="firstBox">
          <div className="searchBox">
            <AiOutlineSearch className="searchIcon" />
            <input type="text" placeholder="Search" />
          </div>
          {
            state.selectedData.map((data, index) => (
              <div className="textAndPhoto_Section" key={index} >
            <div className="textPart">
              <h2 className="textPartHeading"> {data.artist} </h2>
              <p className="textPartPara">
                {data.about}
              </p>
              <button className="playBtn ">Play</button>
              <button className="followBtn ">Follow</button>
            </div>
            <div className="imagePart">
              <img src={data.artistPhoto} alt="poster" width="100%" height="100%" />
            </div>
          </div>
            ))
          }
          
        </div>
        <div className="secondBox">
          <div className="headingPopular">Popular songs</div>
          <div className="songBox">

            {
              state.popularData.map((data, index) => (

                <div className="popularSongPoster" key={index} onClick={() => popularSongPlay(data)} >
              <img
                src={data.songPoster}
                alt="poster"
                width="100%"
              />
              <p className="songName"> {data.songName} </p>
              <p className="artistName"> {data.artistName} </p>
              <audio src={data.audio}></audio>
            </div>

              ))
            }

          </div>
        </div>
        <div className="thirdBox">
          <p className="headingArtists">Popular Artists</p>
          <div className="artistPoster">

            {
              artistpic.map((photo, index) => (
                <div
                  className="artistPhoto"
                  key={index}
                  onClick={() => handleArtist(photo)}
                >
                    <img
                      src={photo}
                      alt="artist"
                      width="100%"
                    />
                </div>
              ))
            }

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
