import SectionLyrics from "../SectionLyrics/SectionLyrics";
import "./LyricsDisplay.scss";

export default function LyricsDisplay({
  selectedSongChords,
  section,
  chordIndex,
  sectionId,
}) {
  return (
    <div className="lyrics">
      <div className="lyrics__section">{section}</div>
      <div className="lyrics__container">
        {selectedSongChords.map((singleLyric, index) => {
          return (
            <div key={index}>
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
