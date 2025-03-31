import "./LyricsDisplay.scss";
import { v4 as uuidv4 } from "uuid";

export default function LyricsDisplay({ chords, section }) {
  return (
    <div className="lyrics">
      <div>{section}</div>
      {chords.map((singleLyric) => {
        return (
          <span key={uuidv4()} className="lyrics__lyric-container">
            {singleLyric.lyrics}
            <span className="lyrics__chord">{singleLyric.name}</span>
          </span>
        );
      })}
    </div>
  );
}
