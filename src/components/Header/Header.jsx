import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        <h1 className="header__title">PlayPal</h1>
      </Link>
    </header>
  );
}
