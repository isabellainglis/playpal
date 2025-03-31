import { useEffect, useRef, useState } from "react";
import "./Fretboard.scss";

export default function Fretboard({ playing, setPlaying, chords }) {
  const [chordIndex, setChordIndex] = useState(0);
  const [circles, setCircles] = useState([]);
  const [circleIdCounter, setCircleIdCounter] = useState(1);
  const triggerLine = useRef(null);

  const displayEachChord = () => {
    if (playing && chordIndex < chords.length) {
      const chord = chords[chordIndex];
      const duration = chord.duration * 1000;

      const newCircle = {
        id: circleIdCounter,
        position: 0,
        chord: chord.name,
      };

      setCircles((prevCircles) => [...prevCircles, newCircle]);
      setCircleIdCounter((prevId) => prevId + 1);

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
            // key={circle.id}
            className="fretboard__circle circle"
            style={{ top: `${circle.position}px`, left: "50%" }}
          >
            <span>{circle.chord}</span>
          </div>
        ))}
      </div>
      <div className="fretboard__trigger-line" ref={triggerLine} />
    </div>
  );
}
