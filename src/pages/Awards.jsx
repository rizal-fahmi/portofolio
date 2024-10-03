import '../App.css';

export default function Awards() {
  return (
    <div className="awards-container max-w-screen-lg mx-auto py-8">
      <div className="award-item mb-4">
        <h2 className="award-subtitle">
          Bounty Achievement: 1.5 Billion Berries
        </h2>
        <p className="text-lg text-gray-900">
          Recognized as one of the most wanted pirates on the Grand Line with a
          staggering bounty of 1.5 billion berries.
        </p>
      </div>

      <div className="award-item mb-4">
        <h2 className="award-subtitle">Warlord Slayer</h2>
        <p className="text-lg text-gray-900">
          Awarded for defeating multiple Warlords of the Sea, showcasing my
          strength and leadership.
        </p>
      </div>
    </div>
  );
}
