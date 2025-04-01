import axios from "axios";
import "./ChordLibrary.scss";
import { useEffect, useState } from "react";

export default function ChordLibrary({ chords, songs }) {
  const [chordLib, setChordLib] = useState(null);
  const [selectedChord, setSelectedChord] = useState(null);

  // select chord and it filters the songs in the section below

  const fetchAllChords = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/chords`
      );

      setChordLib(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllChords();
  }, []);

  if (!chordLib) {
    return;
  }

  return (
    <div className="chord-lib">
      <h1 className="chord-lib__title">Chord Library</h1>
      <div className="chord-lib__wrapper">
        {chordLib.map((chord) => {
          return (
            <div key={chord.id} className="chord-lib__chord-container">
              <div className="chord-lib__chord">{chord.name}</div>
              <img
                className="chord-lib__img"
                src={`../../../images/chords/${chord.img}.png`}
                alt={`${chord.name} chord diagram`}
                onClick={() => setSelectedChord(chord)}
              />
            </div>
          );
        })}
      </div>
      <div className="chord-lib__chord-details">
        <div className="chord-lib__chord-name"></div>
      </div>
    </div>
  );
}
