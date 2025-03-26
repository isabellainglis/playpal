import "./SongSelectPage.scss";

export default function SongSelectPage() {
  return (
    <main className="song-select">
      <section className="song-select__details-container">
        <div className="song-select__title"></div>
        <div className="song-select__song-details">
          <div className="song-select__detail-wrapper">
            <div className="song-select__song-info">Length: </div>
            <div className="song-select__song-info">Tempo: </div>
          </div>
          <div className="song-select__detail-wrapper">
            <div className="song-select__song-info song-select__song-info--small">
              Song name
            </div>
            <div className="song-select__song-info song-select__song-info--small">
              Artist name
            </div>
          </div>
          <div className="song-select__detail-wrapper">
            <div className="song-select__song-info">★★★★★</div>
            <div className="song-select__song-img">
              <img className="song-select__img" src="" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="song-select__select-container">
        <div className="song-select__header">
          <h1>SONGS</h1>
        </div>
        <div className="song-select__songs-wrapper"></div>
      </section>
    </main>
  );
}
