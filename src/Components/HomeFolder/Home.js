import "./Home.css";
import { AiOutlineSearch } from "react-icons/ai";
import arijitsingh from "../ArtistPhoto/without back Arijit singh.png";

const Home = () => {
  return (
    <>
      <section className="HomeSection">
        <div className="firstBox">
          <div className="searchBox">
            <AiOutlineSearch className="searchIcon" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="textAndPhoto_Section">
            <div className="textPart">
              <h2 className="textPartHeading">Vanshaj Narayan</h2>
              <p className="textPartPara">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                eligendi nobis molestias aspernatur at nam quis itaque et
                reiciendis deserunt.
              </p>
              <button className="playBtn ">Play</button>
              <button className="followBtn ">Follow</button>
            </div>
            <div className="imagePart">
              <img src={arijitsingh} alt="poster" width="100%" height="100%" />
            </div>
          </div>
        </div>
        <div className="secondBox">
          <div className="headingPopular">Popular songs</div>
          <div className="songBox">

            <div className="popularSongPoster">
              <img
                src="https://c.saavncdn.com/487/Ruaan-From-Tiger-3-Hindi-2023-20231106115814-500x500.jpg"
                alt="poster"
                width="100%"
              />
              <p className="songName">Ruaan</p>
              <p className="artistName">Arijit singh</p>
            </div>
            <div className="popularSongPoster">
              <img
                src="https://c.saavncdn.com/487/Ruaan-From-Tiger-3-Hindi-2023-20231106115814-500x500.jpg"
                alt="poster"
                width="100%"
              />
              <p className="songName">Ruaan</p>
              <p className="artistName">Arijit singh</p>
            </div>
            <div className="popularSongPoster">
              <img
                src="https://c.saavncdn.com/487/Ruaan-From-Tiger-3-Hindi-2023-20231106115814-500x500.jpg"
                alt="poster"
                width="100%"
              />
              <p className="songName">Ruaan</p>
              <p className="artistName">Arijit singh</p>
            </div>
            <div className="popularSongPoster">
              <img
                src="https://c.saavncdn.com/487/Ruaan-From-Tiger-3-Hindi-2023-20231106115814-500x500.jpg"
                alt="poster"
                width="100%"
              />
              <p className="songName">Ruaan</p>
              <p className="artistName">Arijit singh</p>
            </div>
            <div className="popularSongPoster">
              <img
                src="https://c.saavncdn.com/487/Ruaan-From-Tiger-3-Hindi-2023-20231106115814-500x500.jpg"
                alt="poster"
                width="100%"
              />
              <p className="songName">Ruaan</p>
              <p className="artistName">Arijit singh</p>
            </div>
            <div className="popularSongPoster">
              <img
                src="https://c.saavncdn.com/487/Ruaan-From-Tiger-3-Hindi-2023-20231106115814-500x500.jpg"
                alt="poster"
                width="100%"
              />
              <p className="songName">Ruaan</p>
              <p className="artistName">Arijit singh</p>
            </div>
            <div className="popularSongPoster">
              <img
                src="https://c.saavncdn.com/487/Ruaan-From-Tiger-3-Hindi-2023-20231106115814-500x500.jpg"
                alt="poster"
                width="100%"
              />
              <p className="songName">Ruaan</p>
              <p className="artistName">Arijit singh</p>
            </div>
            <div className="popularSongPoster">
              <img
                src="https://c.saavncdn.com/487/Ruaan-From-Tiger-3-Hindi-2023-20231106115814-500x500.jpg"
                alt="poster"
                width="100%"
              />
              <p className="songName">Ruaan</p>
              <p className="artistName">Arijit singh</p>
            </div>
            <div className="popularSongPoster">
              <img
                src="https://c.saavncdn.com/487/Ruaan-From-Tiger-3-Hindi-2023-20231106115814-500x500.jpg"
                alt="poster"
                width="100%"
              />
              <p className="songName">Ruaan</p>
              <p className="artistName">Arijit singh</p>
            </div>
            <div className="popularSongPoster">
              <img
                src="https://c.saavncdn.com/487/Ruaan-From-Tiger-3-Hindi-2023-20231106115814-500x500.jpg"
                alt="poster"
                width="100%"
              />
              <p className="songName">Ruaan</p>
              <p className="artistName">Arijit singh</p>
            </div>

          </div>
        </div>
        <div className="thirdBox">
          <p className="headingArtists">Popular Artists</p>
          <div className="artistPoster">

            <div className="artistPhoto" >
              <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/why_arijit_singh_wears_a_turban_now-three_four.jpg?VersionId=PnsTxetmptNahDbosI8zsCxbox2qgojI"
                alt="artist"
                width="100%"
              />
            </div>
            <div className="artistPhoto" >
              <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/why_arijit_singh_wears_a_turban_now-three_four.jpg?VersionId=PnsTxetmptNahDbosI8zsCxbox2qgojI"
                alt="artist "
                width="100%"
              />
            </div>
            <div className="artistPhoto" >
              <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/why_arijit_singh_wears_a_turban_now-three_four.jpg?VersionId=PnsTxetmptNahDbosI8zsCxbox2qgojI"
                alt="artist "
                width="100%"
              />
            </div>
            <div className="artistPhoto" >
              <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/why_arijit_singh_wears_a_turban_now-three_four.jpg?VersionId=PnsTxetmptNahDbosI8zsCxbox2qgojI"
                alt="artist "
                width="100%"
              />
            </div>
            <div className="artistPhoto" >
              <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/why_arijit_singh_wears_a_turban_now-three_four.jpg?VersionId=PnsTxetmptNahDbosI8zsCxbox2qgojI"
                alt="artist"
                width="100%"
              />
            </div>
            <div className="artistPhoto" >
              <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/why_arijit_singh_wears_a_turban_now-three_four.jpg?VersionId=PnsTxetmptNahDbosI8zsCxbox2qgojI"
                alt="artist"
                width="100%"
              />
            </div>
            <div className="artistPhoto" >
              <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/why_arijit_singh_wears_a_turban_now-three_four.jpg?VersionId=PnsTxetmptNahDbosI8zsCxbox2qgojI"
                alt="artist"
                width="100%"
              />
            </div>
            <div className="artistPhoto" >
              <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/why_arijit_singh_wears_a_turban_now-three_four.jpg?VersionId=PnsTxetmptNahDbosI8zsCxbox2qgojI"
                alt="artist"
                width="100%"
              />
            </div>
            <div className="artistPhoto" >
              <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/why_arijit_singh_wears_a_turban_now-three_four.jpg?VersionId=PnsTxetmptNahDbosI8zsCxbox2qgojI"
                alt="artist"
                width="100%"
              />
            </div>
            <div className="artistPhoto" >
              <img
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/why_arijit_singh_wears_a_turban_now-three_four.jpg?VersionId=PnsTxetmptNahDbosI8zsCxbox2qgojI"
                alt="artist"
                width="100%"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
