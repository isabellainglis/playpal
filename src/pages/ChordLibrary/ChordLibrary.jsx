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

  const filteredSongs = songs.filter((song) => {
    if (!selectedChord) {
      return song;
    } else {
      if (song.chords.includes(selectedChord.name)) {
        return song;
      }
    }
  });

  return (
    <div className="chord-lib">
      <div className="chord-lib__chords-container">
        <div className="chord-lib__title-wrapper">
          <h2 className="chord-lib__title">Chords </h2>
          {selectedChord ? (
            <button
              className="chord-lib__unfilter-btn"
              onClick={() => setSelectedChord(null)}
            >
              CLEAR FILTER
            </button>
          ) : (
            ""
          )}
        </div>
        {!selectedChord ? (
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
        ) : (
          <div className="chord-lib__chords">
            <Chord
              key={selectedChord.id}
              chord={selectedChord}
              setSelectedChord={setSelectedChord}
              handleChordSelection={handleChordSelection}
            />
          </div>
        )}
      </div>
      <div className="chord-lib__songs-container">
        <h2 className="chord-lib__title">Songs</h2>
        <div className="chord-lib__songs">
          {filteredSongs.map((song) => {
            return (
              <div key={song.id} className="chord-lib__song">
                <SongLibCard song={song} selectedChord={selectedChord} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
