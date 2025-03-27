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
  const navigate = useNavigate();

  // if (!selectedSong) {
  //   navigate("/");
  // }

  if (!chords) {
    return <p>Loading...</p>;
  }

  useEffect(() => {
    if (chordIndex < chords.length) {
      const duration = chords[chordIndex].duration * 1000;
      const timer = setTimeout(() => {
        setChordIndex(chordIndex + 1);
      }, duration);
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
  }, [chordIndex, chords]);

  return (
    <main>
      <div>
        <p>Chord:</p>
        <div>{currentChord}</div>
        <p>Next chord:</p>
        <div>{nextChord}</div>
      </div>
    </main>
  );
}
