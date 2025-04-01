import "./SectionLyrics.scss";
import { v4 as uuidv4 } from "uuid";

export default function SectionLyrics({ singleLyric, index, chordIndex }) {
  return (
    <span key={uuidv4()} className="lyrics__lyric-wrapper">
      <span
        className={`lyrics__lyric ${chordIndex > index ? "" : ""} ${
          index === chordIndex ? "lyrics__lyric--highlight" : ""
        }`}
      >
        {" "}
        {singleLyric.lyrics}
      </span>
      {singleLyric.lyrics === "" ? (
        <span
          className={`lyrics__chord lyrics__chord--alt ${
            chordIndex > index ? "" : ""
          } ${
            index === chordIndex
              ? "lyrics__chord--highlight lyrics__chord--alt"
              : ""
          }`}
        >
          {singleLyric.name}
        </span>
      ) : (
        <span
          className={`lyrics__chord ${chordIndex > index ? "" : ""} ${
            index === chordIndex ? "lyrics__chord--highlight" : ""
          }`}
        >
          {singleLyric.name}
        </span>
      )}
    </span>
  );
}
