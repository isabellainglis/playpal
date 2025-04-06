import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo.png";

export default function Header({ currentPage }) {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        <img className="header__logo" src={logo} alt="" />
      </Link>
      <ul className="header__list">
        <li className="header__list-item">
          <NavLink
            className={`header__list-link ${
              currentPage === "song-selection" || currentPage === "play"
                ? "header__list-link--light"
                : ""
            }`}
            to="/"
          >
            Menu
          </NavLink>
          <span
            className={`header__divider ${
              currentPage === "song-selection" || currentPage === "play"
                ? "header__divider--light"
                : ""
            }`}
          >
            {" "}
            |
          </span>
        </li>
        <li className="header__list-item">
          <NavLink
            className={`header__list-link ${
              currentPage === "song-selection" || currentPage === "play"
                ? "header__list-link--light"
                : ""
            }`}
            to="/how-to-play"
          >
            Instructions
          </NavLink>
          <span
            className={`header__divider ${
              currentPage === "song-selection" || currentPage === "play"
                ? "header__divider--light"
                : ""
            }`}
          >
            {" "}
            |
          </span>
        </li>
        <li className="header__list-item">
          <NavLink
            className={`header__list-link ${
              currentPage === "song-selection" || currentPage === "play"
                ? "header__list-link--light"
                : ""
            }`}
            to="/song-selection"
          >
            Song Selection
          </NavLink>
          <span
            className={`header__divider ${
              currentPage === "song-selection" || currentPage === "play"
                ? "header__divider--light"
                : ""
            }`}
          >
            {" "}
            |
          </span>
        </li>
        <li className="header__list-item">
          <NavLink
            className={`header__list-link ${
              currentPage === "song-selection" || currentPage === "play"
                ? "header__list-link--light"
                : ""
            }`}
            to="/library"
          >
            Library
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
