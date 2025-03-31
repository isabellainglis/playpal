import "./LyricsDisplay.scss";

export default function LyricsDisplay({ chords }) {
  return (
    <div>
      {chords.map((singleLyric) => {
        return (
          <span>
            <span className="lyrics__lyric">{singleLyric.lyrics}</span>
            <span className="lyrics__chord">{singleLyric.name}</span>
          </span>
        );
      })}
    </div>
  );
}
