import "./Navbar.css";
import { PiPlaylistBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul type = "none">
          <li className="active"><NavLink to="/" > <PiPlaylistBold className="icons"/> Playlists </NavLink></li>
        </ul>
      </nav>
    </>
  )
};
export default Navbar;