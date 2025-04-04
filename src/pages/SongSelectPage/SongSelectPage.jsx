import "./SongSelectPage.scss";
import SongSelect from "../../components/SongSelect/SongSelect";
import SongDetailsCard from "../../components/SongDetailsCard/SongDetailsCard";
import background from "../../assets/images/backstage2.jpg";

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
      <img
        className="song-select__bg"
        src={background}
        alt="backstage of a music show"
      />
      <section className="song-select__select-container">
        <div className="song-select__title-wrapper">
          <h1 className="song-select__title">SONGS</h1>
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
