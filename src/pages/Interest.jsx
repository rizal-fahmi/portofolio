/* eslint-disable react/no-unescaped-entities */
import '../App.css';

export default function Interests() {
  return (
    <div className="interests-container max-w-screen-lg mx-auto pt-8 pb-4">
      <div className="text-lg mb-4 text-gray-900">
        <p className="mb-4">
          When I'm not on an adventure, I immerse myself in various activities
          that fuel my passion for exploration, growth, and enjoyment:
        </p>
      </div>

      <ul className="interest-list list-none grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
        <li className="interest-item bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h2 className="interest-item">
            🌴 Exploring New Islands
          </h2>
          <p className="interest-item-paragraph">
            Meeting new people, learning their stories, and discovering hidden
            treasures along the way.
          </p>
        </li>
        <li className="interest-item bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h2 className="interest-item">
            🗡️ Mastering Combat Skills
          </h2>
          <p className="interest-item-paragraph">
            Sharpening my fighting abilities and developing new techniques to
            face any challenge head-on.
          </p>
        </li>
        <li className="interest-item bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h2 className="interest-item">
            🍖 Culinary Adventures
          </h2>
          <p className="interest-item-paragraph">
            Savoring different cuisines, especially meat dishes, and exploring
            unique flavors from every corner of the world.
          </p>
        </li>
        <li className="interest-item bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h2 className="interest-item">
            🌏 Embracing Cultures
          </h2>
          <p className="interest-item-paragraph">
            Learning about diverse cultures, traditions, and customs, gaining
            insights that broaden my horizons.
          </p>
        </li>
        <li className="interest-item bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <h2 className="interest-item">
            💰 Collecting Treasures
          </h2>
          <p className="interest-item-paragraph">
            Gathering mementos from my travels as symbols of the adventures and
            experiences that have shaped me.
          </p>
        </li>
      </ul>
    </div>
  );
}
