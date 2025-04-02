import "./Chord.scss";

export default function Chord({
  chord,
  setSelectedChord,
  handleChordSelection,
}) {
  return (
    <div
      className="chord"
      name="chord"
      onClick={() => handleChordSelection(chord)}
    >
      <div className="chord__name">{chord.name}</div>
      <img
        className="chord__img"
        src={`../../../images/chords/${chord.img}.png`}
        alt={`${chord.name} chord diagram`}
        onClick={() => setSelectedChord(chord)}
      />
    </div>
  );
}
