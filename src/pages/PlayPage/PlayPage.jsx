import { useEffect, useRef, useState } from "react";
import "./PlayPage.scss";
import Fretboard from "../../components/Fretboard/Fretboard";
import LyricsDisplay from "../../components/LyricsDisplay/LyricsDisplay";
import StrumPattern from "../../components/StrumPattern/StrumPattern";

export default function PlayPage({
  songs,
  selectedSong,
  chords,
  songSections,
}) {
  const [playing, setPlaying] = useState(true);
  const audioRef = useRef(null);
  const [chordIndex, setChordIndex] = useState(0);
  const [section, setSection] = useState(null);
  const [sectionId, setSectionId] = useState(null);

  if (!chords) {
    return <p>Loading...</p>;
  }

  const setCurrentSection = (sectionId) => {
    for (let i = 0; i < chords.length; i++) {
      const currentSection = songSections[i];
      if (currentSection.section_id === sectionId) {
        const sectionOriginalName = currentSection.name;
        const regex = /[1-9]/;
        const sectionAmendedName = sectionOriginalName.replace(regex, "");

        setSection(sectionAmendedName);
        setSectionId(currentSection.section_id);
        return;
      }
    }
  };

  const handlePlayBtnClick = () => {
    playing ? setPlaying(false) : setPlaying(true);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <main className="play">
      <div>
        <audio ref={audioRef} controls autoPlay className="play__audio">
          <source
            src={`../../../audio/${selectedSong.name}.m4a`}
            type="audio/mp4"
          />
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className="play__fretboard-container">
        <button className="play__btn" onClick={handlePlayBtnClick}>
          {playing ? "Pause" : "Play"}
        </button>
        <Fretboard
          playing={playing}
          setPlaying={setPlaying}
          chords={chords}
          chordIndex={chordIndex}
          setChordIndex={setChordIndex}
          setCurrentSection={setCurrentSection}
        />
      </div>
      <div className="play__wrapper">
        <div className="play__lyrics-container">
          <LyricsDisplay
            chords={chords}
            section={section}
            chordIndex={chordIndex}
            sectionId={sectionId}
          />
        </div>
        <div className="play__strum-pattern-container">
          <StrumPattern
            chords={chords}
            chordIndex={chordIndex}
            playing={playing}
          />
        </div>
      </div>
    </main>
  );
}
