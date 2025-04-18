import { useEffect } from "react";
import "./InstructionsPage.scss";

export default function InstructionsPage({ setCurrentPage }) {
  useEffect(() => {
    setCurrentPage("instructions");
  }, []);

  return (
    <div className="instructions">
      <div className="instructions__poster-dots-wrapper">
        <div className="instructions__poster-dots">●</div>
        <div className="instructions__poster-dots">●</div>
      </div>
      <h1 className="instructions__title">Instructions</h1>
      <div className="instructions__info-container">
        <ul className="instructions__info-list">
          <li className="instructions__info">
            To play, you first need to select a song from the Song Selection
            page. By clicking on a song, you can see details on tuning, tempo
            and if a capo is required.
          </li>
          <li className="instructions__info">
            Once you have selected your song and clicked the 'Play' button, you
            will be taken to the Play page.
          </li>
          <li className="instructions__info">
            Once started, the chords will move down the fretboard and you will
            need to play the corresponding note on your guitar once it hits the
            line at the bottom.
          </li>
          <li className="instructions__info">
            Check out the library to see diagrams of individual chords and
            filter by songs that contain specific chords.
          </li>
        </ul>
        <p className="instructions__info"></p>
      </div>
    </div>
  );
}
