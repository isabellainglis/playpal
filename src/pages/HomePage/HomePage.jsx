import "./HomePage.scss";

export default function HomePage() {
  return (
    <section className="homepage">
      <div className="homepage__container">
        <div className="homepage__btn-wrapper">
          <button className="homepage__btn">PLAY</button>
          <button className="homepage__btn">HOW TO PLAY</button>
          <button className="homepage__btn">REQUEST NEW SONG</button>
        </div>
      </div>
    </section>
  );
}
