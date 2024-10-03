/* eslint-disable react/no-unescaped-entities */
import '../App.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1 className="home-title">
          Hi, I'm <span className="text-white">Luffy</span>
        </h1>
        <div className="home-description">
          <p className="pb-1 pt-3">
            A spirited captain on a quest for the ultimate treasure!
          </p>
          <p>Here to turn dreams into adventures!</p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img
          src="../src/assets/img/luffy.png"
          alt="Luffy"
          className="home-image"
        />
      </div>
    </div>
  );
}
