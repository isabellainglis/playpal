import { useNavigate } from "react-router-dom";
import "./HomePage.scss";
import githubIcon from "../../assets/icons/github.png";
import linkedinIcon from "../../assets/icons/linkedin.webp";
import { useEffect } from "react";

export default function HomePage({ setCurrentPage }) {
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage("homepage");
  }, []);

  return (
    <section className="homepage">
      <div className="homepage__content">
        <div className="homepage__poster-dots-wrapper">
          <div className="homepage__poster-dots">●</div>
          <div className="homepage__poster-dots">●</div>
        </div>
        <div className="homepage__btn-wrapper">
          <button
            className="homepage__btn"
            onClick={() => navigate("/song-selection")}
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
            onClick={() => navigate("/library")}
          >
            LIBRARY
          </button>
          {/* <button className="homepage__btn">REQUEST NEW SONG</button> */}
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
