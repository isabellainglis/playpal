import { Link } from "react-router-dom";
import "./SongDetailsCard.scss";
import SongDifficulty from "../SongDifficulty/SongDifficulty";

export default function SongDetailsCard({ selectedSong, displaySongChords }) {
  return (
    <section className="song-details">
      <div className="song-details__title"></div>
      {selectedSong && (
        <div className="song-details__content">
          <div className="song-details__details-outer-wrapper">
            <div className="song-details__detail-wrapper--one">
              <SongDifficulty songDifficultyLevel={selectedSong.difficulty} />
              <div className="song-details__song-img">
                <img
                  className="song-details__img"
                  src={`${import.meta.env.VITE_BACKEND_URL}/images/${
                    selectedSong.img
                  }.png`}
                  alt={selectedSong.img_alt}
                />
              </div>
            </div>
          </div>
          <div className="song-details__details-outer-wrapper">
            <div className="song-details__detail-wrapper--two">
              <div className="song-details__song-info--small">
                {selectedSong.length}
              </div>
              <div className="song-details__song-info--small">
                {selectedSong.tempo}bpm
              </div>
            </div>
            <div className="song-details__detail-wrapper--three">
              <div className="song-details__song-info song-details__song-info">
                {selectedSong.name}
              </div>
              <div className="song-details__song-info song-details__song-info">
                {selectedSong.artist}
              </div>
              <div className="song-details__chords">
                {displaySongChords(selectedSong)}
              </div>
              <Link to="/play">
                <button className="song-details__btn">PLAY</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
