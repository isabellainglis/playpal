import "./LyricsDisplay.scss";

export default function LyricsDisplay({ chords, section }) {
  return (
    <div>
      <div>{section}</div>
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
