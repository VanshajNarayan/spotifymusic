import "./Navbar.css";
import { PiPlaylistBold } from "react-icons/pi";
import { CgPlayListCheck } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul type = "none">
          <li className="active"><NavLink to="/" > <PiPlaylistBold className="icons"/> Playlists </NavLink></li>
          <li><NavLink to="/recentlypage" > <CgPlayListCheck className="icons"/> Recently Played </NavLink></li>
        </ul>
      </nav>
    </>
  )
};
export default Navbar;