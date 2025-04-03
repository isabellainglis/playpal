import { useEffect, useRef, useState } from "react";
import "./Fretboard.scss";
import { v4 as uuidv4 } from "uuid";

export default function Fretboard({
  playing,
  setPlaying,
  selectedSongChords,
  chordIndex,
  setChordIndex,
  setCurrentSection,
  selectedSong,
}) {
  const [circles, setCircles] = useState([]);
  const [circleIdCounter, setCircleIdCounter] = useState(1);
  const triggerLine = useRef(null);
  const [section, setSection] = useState(null);

  const displayEachChord = () => {
    if (playing && chordIndex < selectedSongChords.length) {
      const chord = selectedSongChords[chordIndex];
      const duration = chord.duration * 1000;

      setSection(chord.section_id);
      if (!chord.name) {
        setCurrentSection(1);
      } else {
        setCurrentSection(chord.section_id);
      }

      let position = 0;

      const newCircle = {
        id: circleIdCounter,
        position: position,
        chord: chord.name,
      };

      setCircles((prevCircles) => [...prevCircles, newCircle]);
      setCircleIdCounter(circleIdCounter + 1);

      let timer = setTimeout(() => {
        setChordIndex(chordIndex + 1);
      }, duration);

      return () => clearTimeout(timer);
    }
  };

  useEffect(() => {
    displayEachChord();
  }, [chordIndex, selectedSongChords, playing]);

  const moveCircles = () => {
    if (playing) {
      const moveInterval = setInterval(() => {
        if (selectedSong.name === "The Only Exception") {
          setCircles((prevCircles) =>
            prevCircles
              .map((circle) => ({ ...circle, position: circle.position + 2.5 }))
              .filter((circle) => circle.position < 550)
          );
        } else {
          setCircles((prevCircles) =>
            prevCircles
              .map((circle) => ({ ...circle, position: circle.position + 2 }))
              .filter((circle) => circle.position < 550)
          );
        }
      }, 16);
      return () => clearInterval(moveInterval);
    }
  };

  useEffect(() => {
    moveCircles();
  }, [playing]);

  return (
    <div className="fretboard" id="content">
      <div className="fretboard__content" id="board">
        <div className="fretboard__string string"></div>
        <div className="fretboard__col col"></div>
        <div className="fretboard__string string"></div>
        <div className="fretboard__col col"></div>
        <div className="fretboard__string string"></div>
        <div className="fretboard__col col"></div>
        <div className="fretboard__string string"></div>
        <div className="fretboard__col col"></div>
        <div className="fretboard__string string"></div>
        <div className="fretboard__col col"></div>
        <div className="fretboard__string string"></div>

        {circles.map((circle) => (
          <div
            key={uuidv4()}
            className={`fretboard__circle ${
              circleIdCounter === 2 ? "fretboard__circle--first" : ""
            }`}
            style={{ top: `${circle.position}px`, left: "50%" }}
          >
            <span className="fretboard__circle-chord">{circle.chord}</span>
          </div>
        ))}
      </div>
      <div className="fretboard__trigger-line" ref={triggerLine} />
    </div>
  );
}
