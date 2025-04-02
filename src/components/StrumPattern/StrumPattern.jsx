import { useEffect, useState } from "react";
import "./StrumPattern.scss";
import { v4 as uuidv4 } from "uuid";

export default function StrumPattern({ chords, chordIndex, playing }) {
  const [strumPattern, setStrumPattern] = useState(null);
  const [bars, setBars] = useState(null);
  const [strumOne, setStrumOne] = useState(null);
  const [strumTwo, setStrumTwo] = useState(null);

  const splitStrumPattern = (str) => {
    if (!str) {
      return;
    }

    if (chordIndex < chords.length) {
      const bar = str.split(" ");
      setBars(bar);

      const strum1 = bar[0].split(",");
      const strum2 = bar[1].split(",");

      setStrumOne(strum1);
      setStrumTwo(strum2);
    }
  };

  const fetchStrumPattern = () => {
    const currentStrumPattern = chords[chordIndex].strum_pattern;

    if (!currentStrumPattern) {
      return;
    }
    setStrumPattern(currentStrumPattern);

    splitStrumPattern(strumPattern);
  };

  useEffect(() => {
    fetchStrumPattern();
  }, [chordIndex]);

  if (!bars) {
    return;
  }
  return (
    <div className="strum-pattern">
      <div className="strum-pattern__wrapper">
        {strumOne.map((strum) => {
          return (
            <div key={uuidv4()} className="strum-pattern__individual-wrapper">
              {strum === "D" ? (
                <img
                  className="strum-pattern__arrow"
                  src="../../../images/down.webp"
                  alt="down arrow"
                />
              ) : (
                <img
                  className="strum-pattern__arrow"
                  src="../../../images/up.webp"
                  alt="up arrow"
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="strum-pattern__wrapper">
        {strumTwo.map((strum) => {
          return (
            <div key={uuidv4()} className="strum-pattern__individual-wrapper">
              {strum === "D" ? (
                <img
                  className="strum-pattern__arrow"
                  src="../../../images/down.webp"
                  alt="down arrow"
                />
              ) : (
                <img
                  className="strum-pattern__arrow"
                  src="../../../images/up.webp"
                  alt="up arrow"
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="background"></div>
      {/* <span className="strum-pattern__bar">{bars[0]}</span>
      <span className="strum-pattern__bar">{bars[1]}</span> */}
    </div>
  );
}
