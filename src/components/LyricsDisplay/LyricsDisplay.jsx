import SectionLyrics from "../SectionLyrics/SectionLyrics";
import "./LyricsDisplay.scss";

export default function LyricsDisplay({
  chords,
  section,
  chordIndex,
  sectionId,
}) {
  return (
    <div className="lyrics">
      <div className="lyrics__section">{section}</div>
      <div className="lyrics__container">
        {chords.map((singleLyric, index) => {
          return (
            <div key={singleLyric.id}>
              {sectionId === singleLyric.section_id ? (
                <SectionLyrics
                  singleLyric={singleLyric}
                  index={index}
                  chordIndex={chordIndex}
                  sectionId={sectionId}
                />
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
