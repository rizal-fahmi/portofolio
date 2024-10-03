/* eslint-disable react/no-unescaped-entities */
import '../App.css';

export default function Skills() {
  return (
    <div className="skills-container max-w-screen-lg mx-auto py-8">
      <ul className="skills-list grid grid-cols-1 md:grid-cols-2 gap-4">
        <li className="skill-item bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 flex items-center text-green-500">
          <span className="text-2xl mr-3">⚡</span> Rubber
          Manipulation
        </li>
        <li className="skill-item bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 flex items-center text-green-500">
          <span className="text-2xl mr-3">💪</span> Haki Mastery
        </li>
        <li className="skill-item bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 flex items-center text-green-500">
          <span className="text-2xl mr-3">⚔️</span> Swordsmanship
        </li>
        <li className="skill-item bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 flex items-center text-green-500">
          <span className="text-2xl mr-3">🌏</span> Navigation
        </li>
        <li className="skill-item bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 flex items-center text-green-500">
          <span className="text-2xl mr-3">🎯</span> Combat
          Strategy
        </li>
        <li className="skill-item bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 flex items-center text-green-500">
          <span className="text-2xl mr-3">👑</span> Team
          Leadership
        </li>
      </ul>
    </div>
  );
}
