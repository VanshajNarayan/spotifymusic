import "./Home.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useData, useDispatch } from "../ContextFolder/ContextOne";
import { useState } from "react";
import SearchPage from "../SearchFolder/SearchPage";

const Home = () => {
  const [inputValue, setInputValue ] = useState('');
  const state = useData();
  const dispatch = useDispatch();
  const artistpic = (state.allMusicData.map((data) => data.photo));

  // ! function for artist change
  const handleArtist = (photo) => {
    dispatch({ type: "setMusic", payload: photo });
    if (state.icons === true) {
      dispatch({ type: "setPauseIcon" });
    };
    const audio = document.querySelector("audio");
    audio.pause();
  };

  // ! function for popular song play:-
  const popularSongPlay = (data) => {
    dispatch({ type: "setPlayIcon" });
    const audio = document.querySelector("audio");
    audio.src = data.audio;
    audio.play();
    dispatch({ type: "setMusicPlayerSong", payload: data });
  };

  // ! function to search the songs:-
  function handleSearch(e) {
    setInputValue(e.target.value);
    dispatch({ type: "searchSong", payload: e.target.value });
  };


  // ! jsx part
  return (
    <>
      <section className="HomeSection">
        <div className="firstBox">
          <div className="searchBox">
            <AiOutlineSearch className="searchIcon" />
            <input type="text" placeholder="Search" value={inputValue} onChange={(e) => handleSearch(e)} />
            { inputValue !== '' &&  <SearchPage/>}
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
