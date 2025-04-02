import "./SongDifficulty.scss";

export default function SongDifficulty({ songDifficultyLevel }) {
  return (
    <div className="song-difficulty">
      {songDifficultyLevel === 1 && (
        <div className="song-difficulty__level">★☆☆☆☆</div>
      )}
      {songDifficultyLevel === 2 && (
        <div className="song-difficulty__level">★★☆☆☆</div>
      )}
      {songDifficultyLevel === 3 && (
        <div className="song-difficulty__level">★★★☆☆</div>
      )}
      {songDifficultyLevel === 4 && (
        <div className="song-difficulty__level">★★★★☆</div>
      )}
      {songDifficultyLevel === 5 && (
        <div className="song-difficulty__level">★★★★★</div>
      )}
    </div>
  );
}
