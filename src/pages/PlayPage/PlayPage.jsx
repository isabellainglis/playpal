import { useEffect, useRef, useState } from "react";
import "./PlayPage.scss";
import Fretboard from "../../components/Fretboard/Fretboard";
import LyricsDisplay from "../../components/LyricsDisplay/LyricsDisplay";

export default function PlayPage({ songs, selectedSong, chords }) {
  const [playing, setPlaying] = useState(true);
  const audioRef = useRef(null);

  if (!chords) {
    return <p>Loading...</p>;
  }

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
        <Fretboard playing={playing} setPlaying={setPlaying} chords={chords} />
      </div>
      <div className="play__lyrics-container">
        <LyricsDisplay chords={chords} />
      </div>
    </main>
  );
}
