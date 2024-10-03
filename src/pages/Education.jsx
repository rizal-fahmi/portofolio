/* eslint-disable react/no-unescaped-entities */
import '../App.css';

export default function Education() {
  return (
    <div className="education-container max-w-screen-lg mx-auto py-8">
      <div className="education-item">
        <h2 className="education-subtitle">Marineford Academy</h2>
        <p className="text-lg mb-4 text-gray-900">
          Studied the fundamentals of navigation, combat strategies, and pirate
          history. Developed strong leadership skills and learned the principles
          of the Grand Line.
        </p>
      </div>

      <div className="education-item">
        <h2 className="education-subtitle">Straw Hat University</h2>
        <p className="text-lg mb-4 text-gray-900">
          Gained hands-on experience in sailing, swordsmanship, and devil fruit
          mastery. Graduated with honors in "Piracy and Adventure."
        </p>
      </div>
    </div>
  );
}
