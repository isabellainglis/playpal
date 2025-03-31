import { useEffect, useRef, useState } from "react";

import "./PlayPage.scss";
import Fretboard from "../../components/Fretboard/Fretboard";

export default function PlayPage({
  songs,
  setSongs,
  selectedSong,
  setSelectedSong,
  chords,
}) {
  const [playing, setPlaying] = useState(true);

  if (!chords) {
    return <p>Loading...</p>;
  }

  const handlePlayBtnClick = () => {
    playing ? setPlaying(false) : setPlaying(true);
  };

  return (
    <main className="play">
      <div className="play__fretboard-container">
        <button className="play__btn" onClick={handlePlayBtnClick}>
          {playing ? "Pause" : "Play"}
        </button>
        <Fretboard playing={playing} setPlaying={setPlaying} chords={chords} />
      </div>
      <div className="play__lyrics-container"></div>
    </main>
  );
}
