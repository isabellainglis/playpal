import axios from "axios";
import "./ChordLibrary.scss";
import { useEffect, useState } from "react";
import Chord from "../../components/Chord/Chord";
import SongLibCard from "../../components/SongLibCard/SongLibCard";
import { fetchAllChords } from "../../utils/apiCalls";

export default function ChordLibrary({ selectedSongChords, songs }) {
  const [chordLib, setChordLib] = useState(null);
  const [selectedChord, setSelectedChord] = useState(null);

  // select chord and it filters the songs in the section below

  const fetchChords = async () => {
    try {
      const data = await fetchAllChords();

      setChordLib(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChordSelection = (chord) => {
    setSelectedChord(chord);
  };

  useEffect(() => {
    fetchChords();
  }, []);

  if (!chordLib || !songs) {
    return;
  }
  console.log(selectedChord);

  return (
    <div className="chord-lib">
      <div className="chord-lib__chords-container">
        <h2 className="chord-lib__title">Chord Library</h2>
        <div className="chord-lib__chords">
          {chordLib.map((chord) => {
            return (
              <Chord
                key={chord.id}
                chord={chord}
                setSelectedChord={setSelectedChord}
                handleChordSelection={handleChordSelection}
              />
            );
          })}
        </div>
      </div>
      <div className="chord-lib__songs-container">
        <h2 className="chord-lib__title">Song Library</h2>
        <div className="chord-lib__songs">
          {songs.map((song) => {
            return (
              <div key={song.id} className="chord-lib__song">
                <SongLibCard song={song} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
