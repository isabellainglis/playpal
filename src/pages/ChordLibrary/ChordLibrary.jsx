import axios from "axios";
import "./ChordLibrary.scss";
import { useEffect, useState } from "react";
import Chord from "../../components/Chord/Chord";
import SongDetailsCard from "../../components/SongDetailsCard/SongDetailsCard";

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

  if (!chordLib || !songs) {
    return;
  }

  return (
    <div className="chord-lib">
      <div className="chord-lib__chords-container">
        <h2 className="chord-lib__title">Chord Library</h2>
        <div className="chord-lib__chords">
          {chordLib.map((chord) => {
            return <Chord key={chord.id} chord={chord} />;
          })}
        </div>
      </div>
      <div className="chord-lib__songs-container">
        <h2 className="chord-lib__title">Songs Library</h2>
        <div className="chord-lib__songs">
          {songs.map((song) => {
            return (
              <div className="chord-lib__song">
                <SongDetailsCard selectedSong={song} />;
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
