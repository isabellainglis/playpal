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
      <div className="lyrics__section-title">{section}</div>
      <div className="lyrics__container">
        {selectedSongChords.map((singleLyric, index) => {
          return (
            <div className="lyrics__section-lyrics" key={index}>
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
