import "./SongSelect.scss";

export default function SongSelect({ handleSongSelection, song }) {
  return (
    <div className="song" onClick={() => handleSongSelection(song)}>
      <div className="song__container">
        <div className="song__wrapper song__wrapper--left">
          <div className="song__info song__info--name">{song.name}</div>
          <div className="song__info song__info--artist">{song.artist}</div>
        </div>
        <div className="song__wrapper">
          <div className="song__info">{song.length}</div>
        </div>
      </div>
    </div>
  );
}
