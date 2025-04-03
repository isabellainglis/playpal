import "./SectionLyrics.scss";
import { v4 as uuidv4 } from "uuid";

export default function SectionLyrics({ singleLyric, index, chordIndex }) {
  return (
    <span key={uuidv4()} className="section-lyrics">
      <span
        className={`section-lyrics__lyric ${chordIndex - 1 > index ? "" : ""} ${
          index === chordIndex - 1 ? "section-lyrics__lyric--highlight" : ""
        }`}
      >
        {" "}
        {singleLyric.lyrics}
      </span>
      {singleLyric.lyrics === "" ? (
        <span
          className={`section-lyrics__chord section-lyrics__chord--alt ${
            chordIndex - 1 > index ? "" : ""
          } ${
            index === chordIndex - 1
              ? "section-lyrics__chord--highlight section-lyrics__chord--alt"
              : ""
          }`}
        >
          {singleLyric.name}
        </span>
      ) : (
        <span
          className={` ${
            chordIndex - 1 > index ? "" : "section-lyrics__chord"
          } ${
            index === chordIndex - 1 ? "section-lyrics__chord--highlight" : ""
          }`}
        >
          {singleLyric.name}
        </span>
      )}
    </span>
  );
}
