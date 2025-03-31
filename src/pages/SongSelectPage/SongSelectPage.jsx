import "./SongSelectPage.scss";
import SongSelect from "../../components/SongSelect/SongSelect";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SongSelectPage({
  songs,
  setSongs,
  selectedSong,
  setSelectedSong,
  fetchChords,
  fetchSectionsAndLyrics,
}) {
  const handleSongSelection = async (song) => {
    setSelectedSong(song);
    fetchChords(song);
    fetchSectionsAndLyrics(song);
  };

  const fetchSongs = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/songs`
      );

      setSongs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  if (!songs) {
    return <p>Loading...</p>;
  }

  return (
    <main className="song-select">
      <section className="song-select__select-container">
        <div className="song-select__header-wrapper">
          <h1 className="song-select__header">SONGS</h1>
        </div>
        <div className="song-select__songs-wrapper">
          {songs.map((song) => {
            return (
              <SongSelect
                handleSongSelection={handleSongSelection}
                key={song.id}
                song={song}
              />
            );
          })}
        </div>
      </section>
      <section className="song-select__details-container">
        <div className="song-select__title"></div>
        {selectedSong && (
          <div className="song-select__song-details">
            <div className="song-select__details-outer-wrapper">
              <div className="song-select__detail-wrapper--one">
                {selectedSong.difficulty === 1 && (
                  <div className="song-select__song-info song-select__song-info--med">
                    ★☆☆☆☆
                  </div>
                )}
                {selectedSong.difficulty === 2 && (
                  <div className="song-select__song-info song-select__song-info--med">
                    ★★☆☆☆
                  </div>
                )}
                {selectedSong.difficulty === 3 && (
                  <div className="song-select__song-info song-select__song-info--med">
                    ★★★☆☆
                  </div>
                )}
                {selectedSong.difficulty === 4 && (
                  <div className="song-select__song-info song-select__song-info--med">
                    ★★★★☆
                  </div>
                )}
                {selectedSong.difficulty === 5 && (
                  <div className="song-select__song-info song-select__song-info--med">
                    ★★★★★
                  </div>
                )}

                <div className="song-select__song-img">
                  <img
                    className="song-select__img"
                    src={`${import.meta.env.VITE_BACKEND_URL}/images/${
                      selectedSong.img
                    }.png`}
                    alt={selectedSong.img_alt}
                  />
                </div>
              </div>
            </div>
            <div className="song-select__details-outer-wrapper">
              <div className="song-select__detail-wrapper--two">
                <div className="song-select__song-info--small">
                  {selectedSong.length}
                </div>
                <div className="song-select__song-info--small">
                  {selectedSong.tempo}bpm
                </div>
              </div>
              <div className="song-select__detail-wrapper--three">
                <div className="song-select__song-info song-select__song-info">
                  {selectedSong.name}
                </div>
                <div className="song-select__song-info song-select__song-info">
                  {selectedSong.artist}
                </div>
                <Link to="/play">
                  <button className="song-select__btn">PLAY</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
