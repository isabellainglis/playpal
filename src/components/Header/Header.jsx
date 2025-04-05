import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        <img className="header__logo" src={logo} alt="" />
      </Link>
      <ul className="header__list">
        <li className="header__list-item">
          <Link className="header__list-link" to="/">
            Menu
          </Link>
        </li>
        <li className="header__list-item">
          <Link className="header__list-link" to="/how-to-play">
            Instructions
          </Link>
        </li>
      </ul>
    </header>
  );
}
