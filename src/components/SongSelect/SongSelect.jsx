import "./SongSelect.scss";

export default function SongSelect() {
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__wrapper song__wrapper--left">
          <div className="song__info song__info--name">Song Name</div>
          <div className="song__info song__info--artist">Artist Name</div>
        </div>
        <div className="song__wrapper">
          <div className="song__info">song length</div>
        </div>
      </div>
    </div>
  );
}
