import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import SongSelectPage from "./pages/SongSelectPage/SongSelectPage";
import PlayPage from "./pages/PlayPage/PlayPage";
import { useEffect, useState } from "react";
import ChordLibrary from "./pages/ChordLibrary/ChordLibrary";
import {
  fetchAllSongs,
  fetchSingleSongDetails,
  fetchSingleSongLyrics,
} from "./utils/apiCalls";

function App() {
  const [songs, setSongs] = useState(null);
  const [selectedSong, setSelectedSong] = useState(null);
  const [selectedSongChords, setSelectedSongChords] = useState(null);
  const [songSections, setSongSections] = useState(null);

  const displaySongChords = (song) => {
    const chords = song.chords;
    const chordsArr = chords.split(", ");

    let uniqueChords = [...new Set(chordsArr)];
    return uniqueChords.map((chord) => {
      return (
        <div className="song-card__chord" key={chord}>
          {chord}
        </div>
      );
    });
  };

  const handleSongSelection = async (song) => {
    setSelectedSong(song);
    fetchSongDetails(song);
    fetchSectionsAndLyrics(song);
  };

  const fetchSectionsAndLyrics = async (song) => {
    const songId = song.id;

    try {
      const data = await fetchSingleSongLyrics(songId);
      setSongSections(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSongDetails = async (song) => {
    const songId = song.id;

    try {
      const data = await fetchSingleSongDetails(songId);
      setSelectedSongChords(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSongs = async () => {
    try {
      const data = await fetchAllSongs();

      setSongs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/songselection"
          element={
            <SongSelectPage
              songs={songs}
              selectedSong={selectedSong}
              handleSongSelection={handleSongSelection}
              displaySongChords={displaySongChords}
            />
          }
        />
        <Route
          path="/play"
          element={
            <PlayPage
              selectedSong={selectedSong}
              selectedSongChords={selectedSongChords}
              songSections={songSections}
              displaySongChords={displaySongChords}
            />
          }
        />
        <Route
          path="/chord-library"
          element={
            <ChordLibrary
              songs={songs}
              handleSongSelection={handleSongSelection}
              displaySongChords={displaySongChords}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
