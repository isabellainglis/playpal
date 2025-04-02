import "./Chord.scss";

export default function Chord({ chord }) {
  return (
    <div className="chord">
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
