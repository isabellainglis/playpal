import "./SectionLyrics.scss";

export default function SectionLyrics({ singleLyric, index, chordIndex }) {
  return (
    <span className="section-lyrics">
      <span
        className={`section-lyrics__lyric ${chordIndex > index ? "" : ""} ${
          index === chordIndex ? "section-lyrics__lyric--highlight" : ""
        }`}
      >
        {" "}
        {singleLyric.lyrics}
      </span>
      {singleLyric.lyrics === "" ? (
        <span
          className={`section-lyrics__chord section-lyrics__chord--alt ${
            chordIndex > index ? "" : ""
          } ${
            index === chordIndex
              ? "section-lyrics__chord--highlight section-lyrics__chord--alt"
              : ""
          }`}
        >
          {singleLyric.name}
        </span>
      ) : (
        <span
          className={` ${chordIndex > index ? "" : "section-lyrics__chord"} ${
            index === chordIndex ? "section-lyrics__chord--highlight" : ""
          }`}
        >
          {singleLyric.name}
        </span>
      )}
    </span>
  );
}
