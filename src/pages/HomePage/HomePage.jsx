import { useNavigate } from "react-router-dom";
import "./HomePage.scss";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <section className="homepage">
      <div className="homepage__container">
        <div className="homepage__title-wrapper">
          <h1 className="homepage__title">PLAYPAL</h1>
        </div>
        <div className="homepage__btn-wrapper">
          <button
            className="homepage__btn"
            onClick={() => navigate("/songselection")}
          >
            PLAY
          </button>
          <button className="homepage__btn">HOW TO PLAY</button>
          <button
            className="homepage__btn"
            onClick={() => navigate("/chord-library")}
          >
            LIBRARY
          </button>
          <button className="homepage__btn">REQUEST NEW SONG</button>
        </div>
      </div>
    </section>
  );
}

// button animation - change shape and go skewed/change colour on hover
