import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import SongSelectPage from "./pages/SongSelectPage/SongSelectPage";
import PlayPage from "./pages/PlayPage/PlayPage";
import { useState } from "react";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState(null);
  const [selectedSong, setSelectedSong] = useState(null);
  const [chords, setChords] = useState(null);
  const [songSections, setSongSections] = useState(null);

  const fetchSectionsAndLyrics = async (song) => {
    const songId = song.id;

    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/songs/${songId}/sections`
      );
      setSongSections(data);
    } catch (error) {}
  };

  const fetchChords = async (song) => {
    const songId = song.id;

    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/songs/${songId}/chords`
      );
      setChords(data);
    } catch (error) {
      console.log(error);
    }
  };

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
              setSongs={setSongs}
              selectedSong={selectedSong}
              setSelectedSong={setSelectedSong}
              fetchChords={fetchChords}
              fetchSectionsAndLyrics={fetchSectionsAndLyrics}
            />
          }
        />
        <Route
          path="/play"
          element={
            <PlayPage
              songs={songs}
              setSongs={setSongs}
              selectedSong={selectedSong}
              setSelectedSong={setSelectedSong}
              chords={chords}
              songSections={songSections}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
