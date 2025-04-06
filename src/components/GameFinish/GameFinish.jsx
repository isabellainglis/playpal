import { Link, useNavigate } from "react-router-dom";
import "./GameFinish.scss";

export default function GameFinish() {
  return (
    <div className="game-finish">
      <div className="game-finish__options">
        <h2 className="game-finish__title">Great job!</h2>
        <Link className="game-finish__link" to="/song-selection">
          <p className="game-finish__text">Choose another song?</p>
        </Link>
        <Link className="game-finish__link" to="/">
          <p className="game-finish__text">Back to main menu</p>
        </Link>
      </div>
    </div>
  );
}
