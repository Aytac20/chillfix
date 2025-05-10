import { NavLink } from "react-router-dom";
import { PiFilmSlate } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { CiHeart, CiBookmarkCheck } from "react-icons/ci";
import "./Navbar.css";
import Logout from "../Auth/Logout";
import { FiLogOut } from "react-icons/fi";

function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>
              <IoHomeOutline />
            </span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/films"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>
              <PiFilmSlate />
            </span>
            Films
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>
              <CiHeart />
            </span>
            Favorite
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/watchlist"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <span>
              <CiBookmarkCheck />
            </span>
            Watchlist
          </NavLink>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
