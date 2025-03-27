import { useEffect, useState } from "react";
import "./PlayPage.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PlayPage({
  songs,
  setSongs,
  selectedSong,
  setSelectedSong,
  chords,
}) {
  const [chordIndex, setChordIndex] = useState(0);
  const [currentChord, setCurrentChord] = useState(null);
  const [nextChord, setNextChord] = useState(null);
  const [playing, setPlaying] = useState(true);
  const navigate = useNavigate();

  // if (!selectedSong) {
  //   navigate("/");
  // }

  if (!chords) {
    return <p>Loading...</p>;
  }

  const handlePlayBtnClick = () => {
    playing ? setPlaying(false) : setPlaying(true);
  };

  const displayEachChord = () => {
    const duration = chords[chordIndex].duration * 1000;
    const timer = setTimeout(() => {
      setChordIndex(chordIndex + 1);
    }, duration);

    if (playing) {
      if (chordIndex < chords.length) {
        setCurrentChord(chords[chordIndex].name);
        if (chordIndex < chords.length - 1) {
          setNextChord(chords[chordIndex + 1].name);
        } else {
          setNextChord(null);
        }
        return () => clearTimeout(timer);
      } else {
        setCurrentChord(null);
      }
    }
  };

  useEffect(() => {
    displayEachChord();
  }, [chordIndex, chords]);

  return (
    <main className="play">
      <div className="play__fretboard-container">
        <div className="play__current-chord">{currentChord}</div>
        <p className="play__next-chord-text">Next chord:</p>
        <div className="play__next-chord">{nextChord}</div>
        <button className="play__btn" onClick={handlePlayBtnClick}>
          {playing ? "Pause" : "Play"}
        </button>
      </div>
      <div className="play__lyrics-container"></div>
    </main>
  );
}
