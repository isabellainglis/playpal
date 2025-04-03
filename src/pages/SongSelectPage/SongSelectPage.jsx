import "./SongSelectPage.scss";
import SongSelect from "../../components/SongSelect/SongSelect";
import SongDetailsCard from "../../components/SongDetailsCard/SongDetailsCard";

export default function SongSelectPage({
  songs,
  selectedSong,
  handleSongSelection,
  displaySongChords,
}) {
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
      <SongDetailsCard
        selectedSong={selectedSong}
        displaySongChords={displaySongChords}
      />
    </main>
  );
}
