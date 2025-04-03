import { useNavigate } from "react-router-dom";
import "./HomePage.scss";
import githubIcon from "../../../public/icons/github.png";
import linkedinIcon from "../../../public/icons/linkedin.webp";

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
          <button
            className="homepage__btn"
            onClick={() => navigate("/how-to-play")}
          >
            HOW TO PLAY
          </button>
          <button
            className="homepage__btn"
            onClick={() => navigate("/chord-library")}
          >
            LIBRARY
          </button>
          <button className="homepage__btn">REQUEST NEW SONG</button>
        </div>
      </div>
      <div className="homepage__links">
        <a href="https://github.com/isabellainglis" target="_blank">
          <img
            className="homepage__icon homepage__icon--github"
            src={githubIcon}
            alt="github icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/isabellainglis/" target="_blank">
          <img
            className="homepage__icon"
            src={linkedinIcon}
            alt="linkedin icon"
          />
        </a>
      </div>
    </section>
  );
}

// button animation - change shape and go skewed/change colour on hover
