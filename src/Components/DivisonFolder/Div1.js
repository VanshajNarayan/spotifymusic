import Navbar from "../NavbarFolder/Navbar";
import "./Div1.css";
import Home from "../HomeFolder/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Playlist from "../PlaylistFolder/Playlist";
import MusicPlayer from "../../MusicPlayerFolder/MusicPlayer";

const Div1 = () => {
  return (
    <>
      <Router>
        <section className="main_section">
          <div className="thoda_main_Section">
            <div className="box box1">
              <h4 className="playlist_title">Playlists</h4>
              <Navbar />
              <Playlist/>
            </div>
            <div className="box box2">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
            <div className="box box3">
              <MusicPlayer/>
            </div>
          </div>
        </section>
      </Router>
    </>
  );
};

export default Div1;
