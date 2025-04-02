import { useEffect, useState } from "react";
import {
  fetchAllSongChords,
  fetchSingleSongChords,
} from "../../utils/apiCalls";
import SongDifficulty from "../SongDifficulty/SongDifficulty";
import "./SongLibCard.scss";

export default function SongLibCard({ song, selectedChord }) {
  const [allChords, setAllChords] = useState(null);

  const fetchChords = async () => {
    try {
      const data = await fetchAllSongChords();

      setAllChords(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchChords();
  }, []);

  if (!allChords) {
    return;
  }

  const renderChords = (songId) => {
    const chords = allChords.filter((chord) => {
      return chord.song_id == songId;
    });

    return chords.map((chord) => {
      return (
        <div className="song-card__chord" key={chord.id}>
          {chord.name}
        </div>
      );
    });
  };

  return (
    <div className="song-card">
      <div className="song-card__difficulty">
        <SongDifficulty songDifficultyLevel={song.difficulty} />
      </div>
      <div className="song-card__img-wrapper">
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/images/${song.img}.png`}
          alt={song.img_alt}
          className="song-card__img"
        />
      </div>
      <div className="song-card__song-name">{song.name}</div>
      <div className="song-card__artist-name">{song.artist}</div>
      <div className="song-card__info-wrapper">
        <div className="song-card__length">{song.length}</div>
        <div className="song-card__tempo">{song.tempo}bpm</div>
      </div>
      <div className="song-card__genre">{song.genre}</div>
      <div className="song-card__tuning">{song.tuning} tuning</div>
      <div className="song-card__capo">
        {song.capo === 0 ? "No capo" : `Capo: ${song.capo}th fret`}
      </div>
      <div className="song-card__chords">{renderChords(song.id)}</div>
    </div>
  );
}
