import SongDifficulty from "../SongDifficulty/SongDifficulty";
import "./SongLibCard.scss";
import { Link } from "react-router-dom";

export default function SongLibCard({ song, handleSongSelection }) {
  const displaySongChords = () => {
    const chords = song.chords;
    const chordsArr = chords.split(", ");

    let uniqueChords = [...new Set(chordsArr)];

    return uniqueChords.map((chord) => {
      return (
        <div className="song-card__chord" key={chord.id}>
          {chord}
        </div>
      );
    });
  };

  return (
    <div className="song-card" onClick={() => handleSongSelection(song)}>
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
      <div className="song-card__chords">{displaySongChords()}</div>
      <Link to="/play">
        <button>play</button>
      </Link>
    </div>
  );
}
