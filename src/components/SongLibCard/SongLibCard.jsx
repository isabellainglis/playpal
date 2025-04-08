import SongDifficulty from "../SongDifficulty/SongDifficulty";
import "./SongLibCard.scss";
import { Link } from "react-router-dom";

export default function SongLibCard({
  song,
  handleSongSelection,
  displaySongChords,
}) {
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
        {song.capo === 0 && "No capo"}
        {song.capo === 1 && `Capo: ${song.capo}st fret`}
        {song.capo === 2 && `Capo: ${song.capo}nd fret`}
        {song.capo === 3 && `Capo: ${song.capo}rd fret`}
        {song.capo >= 4 && `Capo: ${song.capo}th fret`}
      </div>
      <div className="song-card__chords">{displaySongChords(song)}</div>
      <Link to="/play">
        <button>play</button>
      </Link>
    </div>
  );
}
