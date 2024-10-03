/* eslint-disable react/no-unescaped-entities */
import '../App.css';

export default function About() {
  return (
    <div className="max-w-screen-lg mx-auto py-8">
      <div className="mb-4">
        <p className="text-xl text-gray-900">
          Hi, I'm <span className="text-white">Monkey D. Luffy</span>, a
          spirited captain on a quest for the ultimate treasure! As the captain
          of the Straw Hat Pirates, I lead my crew through the Grand Line,
          overcoming challenges and making unforgettable memories.
        </p>
      </div>

      <h2 className="about-subtitle">My Journey</h2>
      <p className="text-lg mb-4 text-gray-900">
        Ever since I was a child, I've dreamed of becoming the Pirate King. My
        journey began when I set sail from my hometown, determined to find the
        One Piece and fulfill my dream. Along the way, I've made incredible
        friends and allies who have become my family.
      </p>

      <h2 className="about-subtitle">My Crew</h2>
      <p className="text-lg mb-4 text-gray-900">
        My crew, the Straw Hat Pirates, is made up of talented individuals, each
        with their own dreams and ambitions. Together, we face powerful enemies,
        explore mysterious islands, and treasure the bonds we share.
      </p>

      <h2 className="about-subtitle">Why Adventure?</h2>
      <p className="text-lg mb-4 text-gray-900">
        Adventure is not just about treasure; it's about the experiences,
        friendships, and challenges that shape us. Every encounter is a chance
        to grow and learn, and I'm always ready to embrace whatever comes next!
      </p>
    </div>
  );
}
