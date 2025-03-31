import { useEffect, useRef, useState } from "react";
import "./Fretboard.scss";
import { v4 as uuidv4 } from "uuid";

export default function Fretboard({
  playing,
  setPlaying,
  chords,
  chordIndex,
  setChordIndex,
  setCurrentSection,
}) {
  const [circles, setCircles] = useState([]);
  const [circleIdCounter, setCircleIdCounter] = useState(1);
  const triggerLine = useRef(null);
  const [section, setSection] = useState(null);

  const displayEachChord = () => {
    if (playing && chordIndex < chords.length) {
      const chord = chords[chordIndex];
      const duration = chord.duration * 1000;
      setSection(chord.section_id);
      setCurrentSection(chord.section_id);

      let position = () => {
        if (chordIndex !== 0) {
          return 0;
        } else {
          return 300;
        }
      };

      const newCircle = {
        id: circleIdCounter,
        position: position(),
        chord: chord.name,
      };

      setCircles((prevCircles) => [...prevCircles, newCircle]);
      setCircleIdCounter(circleIdCounter + 1);

      const timer = setTimeout(() => {
        setChordIndex(chordIndex + 1);
      }, duration);

      return () => clearTimeout(timer);
    }
  };

  useEffect(() => {
    displayEachChord();
  }, [chordIndex, chords, playing]);

  const moveCircles = () => {
    if (playing) {
      const moveInterval = setInterval(() => {
        setCircles((prevCircles) =>
          prevCircles
            .map((circle) => ({ ...circle, position: circle.position + 2 }))
            .filter((circle) => circle.position < 700)
            .slice(-2)
        );
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
            className="fretboard__circle circle"
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
