import "./SongSelectPage.scss";
import SongSelect from "../../components/SongSelect/SongSelect";

export default function SongSelectPage() {
  return (
    <main className="song-select">
      <section className="song-select__select-container">
        <div className="song-select__header-wrapper">
          <h1 className="song-select__header">SONGS</h1>
        </div>
        <div className="song-select__songs-wrapper">
          <SongSelect />
          <SongSelect />
          <SongSelect />
          <SongSelect />
          <SongSelect />
          <SongSelect />
          <SongSelect />
          <SongSelect />
          <SongSelect />
          <SongSelect />
        </div>
      </section>
      <section className="song-select__details-container">
        <div className="song-select__title"></div>
        <div className="song-select__song-details">
          <div className="song-select__details-outer-wrapper">
            <div className="song-select__detail-wrapper--one">
              <div className="song-select__song-info song-select__song-info--med">
                ★★★★★
              </div>
              <div className="song-select__song-img">
                <img className="song-select__img" src="" alt="" />
              </div>
            </div>
          </div>
          <div className="song-select__details-outer-wrapper">
            <div className="song-select__detail-wrapper--two">
              <div className="song-select__song-info--small">Length: </div>
              <div className="song-select__song-info--small">Tempo: </div>
            </div>
            <div className="song-select__detail-wrapper--three">
              <div className="song-select__song-info song-select__song-info">
                Song name
              </div>
              <div className="song-select__song-info song-select__song-info">
                Artist name
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
