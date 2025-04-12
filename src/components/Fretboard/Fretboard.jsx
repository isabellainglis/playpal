import { useEffect, useRef, useState } from "react";
import "./Fretboard.scss";
import { v4 as uuidv4 } from "uuid";

export default function Fretboard({
  playing,
  selectedSongChords,
  chordIndex,
  setChordIndex,
  setCurrentSection,
}) {
  const [circles, setCircles] = useState([]);
  const [circleIdCounter, setCircleIdCounter] = useState(1);
  const triggerLine = useRef(null);
  const [section, setSection] = useState(null);
  const [lastRenderedChordIndex, setLastRenderedChordIndex] = useState(-1);

  const displayEachChord = () => {
    if (playing && chordIndex < selectedSongChords.length) {
      if (chordIndex !== lastRenderedChordIndex) {
        const currentChord = selectedSongChords[chordIndex];
        const chordDuration = currentChord.duration * 1000;

        setSection(currentChord.section_id);
        if (!currentChord.name) {
          setCurrentSection(1);
        } else {
          setCurrentSection(currentChord.section_id);
        }

        const newCircle = {
          id: circleIdCounter,
          position: 0,
          chord: currentChord.name,
        };

        setCircles((prevCircles) => [...prevCircles, newCircle]);
        setCircleIdCounter(circleIdCounter + 1);
        setLastRenderedChordIndex(chordIndex);

        let timer = setTimeout(() => {
          setChordIndex(chordIndex + 1);
        }, chordDuration);

        return () => clearTimeout(timer);
      }
    }
  };

  useEffect(() => {
    displayEachChord();
  }, [chordIndex, selectedSongChords, playing]);

  const moveCircles = () => {
    let animationFrameId;
    let lastFrameTime = performance.now();

    const animate = (currentTime) => {
      if (playing) {
        const deltaTime = currentTime - lastFrameTime;
        lastFrameTime = currentTime;

        const currentChord = selectedSongChords[chordIndex];
        const chordDuration = currentChord ? currentChord.duration : 1;
        const speedFactor = 550 / (chordDuration * 1000);

        setCircles((prevCircles) =>
          prevCircles
            .map((circle) => ({
              ...circle,
              position: circle.position + speedFactor * deltaTime,
            }))
            .filter((circle) => circle.position < 550)
        );

        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  };

  useEffect(() => {
    const cleanup = moveCircles();
    return cleanup;
  }, [playing, chordIndex, selectedSongChords]);

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
