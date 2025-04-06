import { useEffect, useRef, useState } from "react";
import "./PlayPage.scss";
import Fretboard from "../../components/Fretboard/Fretboard";
import LyricsDisplay from "../../components/LyricsDisplay/LyricsDisplay";
import StrumPattern from "../../components/StrumPattern/StrumPattern";
import background from "../../assets/images/stage.jpg";

export default function PlayPage({
  selectedSong,
  selectedSongChords,
  songSections,
  displaySongChords,
  setCurrentPage,
}) {
  const [playing, setPlaying] = useState(true);
  const audioRef = useRef(null);
  const [chordIndex, setChordIndex] = useState(0);
  const [section, setSection] = useState(null);
  const [sectionId, setSectionId] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);

  if (!selectedSongChords) {
    return <p className="loading">Loading...</p>;
  }

  const setCurrentSection = (sectionId) => {
    for (let i = 0; i < selectedSongChords.length; i++) {
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
    setCurrentPage("play");

    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Autoplay was prevented:", error);
      });
    }
  }, []);

  const handleStartBtn = () => {
    setGameStarted(true);
  };

  if (!gameStarted) {
    return (
      <div className="play__start-option">
        {/* <div className="play__start-title">Press 'Spacebar' to START</div> */}
        <p className="play__start-info">
          {selectedSong.capo === 0
            ? "Capo: Not required"
            : `Capo: ${selectedSong.capo}`}
        </p>
        <p className="play__start-info">Tuning: {selectedSong.tuning}</p>
        <p className="play__start-info">
          First chord: {selectedSong.chords[0]}
        </p>

        <button className="play__start-btn" onClick={handleStartBtn}>
          START
        </button>
      </div>
    );
  } else {
    setTimeout(() => {
      setAudioStarted(true);
    }, selectedSong.delay);
  }

  return (
    <main className="play">
      <img
        className="song-select__bg"
        src={background}
        alt="backstage of a music show"
      />
      <div>
        {audioStarted && (
          <audio ref={audioRef} controls autoPlay className="play__audio">
            <source
              src={`../../../audio/${selectedSong.name}.m4a`}
              type="audio/mp4"
            />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
      {chordIndex === selectedSongChords.length && (
        <div className="play__pop-up">
          <div className="play__pop-up-options">
            <h2 className="play__pop-up-title">Great job!</h2>
            <p className="play__pop-up-text">Go again?</p>
            <p className="play__pop-up-text">Choose a different song</p>
            <p className="play__pop-up-text">Back to main menu</p>
          </div>
        </div>
      )}
      <div className="play__fretboard-container">
        {/* <button className="play__btn" onClick={handlePlayBtnClick}>
          {playing ? "Pause" : "Play"}
        </button> */}
        <Fretboard
          playing={playing}
          setPlaying={setPlaying}
          selectedSongChords={selectedSongChords}
          chordIndex={chordIndex}
          setChordIndex={setChordIndex}
          setCurrentSection={setCurrentSection}
          selectedSong={selectedSong}
        />
        {/* <div className="play__modal-container">
          <button className="play__modal" onClick={()=> handleModalBtnClick()}>Show All Chords</button>
        </div> */}
      </div>
      <div className="play__wrapper">
        <div className="play__lyrics-container">
          <LyricsDisplay
            selectedSongChords={selectedSongChords}
            section={section}
            chordIndex={chordIndex}
            sectionId={sectionId}
          />
        </div>
        <div className="play__strum-pattern-container">
          <StrumPattern
            selectedSongChords={selectedSongChords}
            chordIndex={chordIndex}
            playing={playing}
          />
        </div>
      </div>
    </main>
  );
}
