import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo55.png";

export default function Header() {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        <img className="header__logo" src={logo} alt="" />
      </Link>
    </header>
  );
}
