"use client";


import useIsMobile from "../hooks/useIsMobile";

const playerTypes = [
  {
    emoji: "🧢",
    title: "Casual Players",
    description: "Join a friendly match without needing a full team."
  },
  {
    emoji: "🏆",
    title: "Competitive Athletes",
    description: "Track performance, climb leaderboards, and be recognized."
  },
  {
    emoji: "📈",
    title: "Newcomers",
    description: "Learn the game, find teammates, and grow in a structured environment."
  },
  {
    emoji: "🎯",
    title: "Team Builders",
    description: "Use FT Cards to scout and build balanced, skilled squads."
  }
];

export default function PlayerTypesSection() {
  const { isMobile } = useIsMobile();

  return (
    <div className="w-full bg-[#f5f5f5] py-16 md:py-24">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Fixed heading */}
        <h2 className="font-inter font-semibold text-[24px] md:text-[56px] leading-[140%] tracking-[-0.05em] mb-28 text-center text-black">
          Built for Every Type of Player
        </h2>

        {/* Cards: Responsive grid for desktop, stacked for mobile */}
        <div className={
          isMobile
            ? "flex flex-col gap-8"
            : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        }>
          {playerTypes.map((type, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4 bg-white rounded-xl shadow-md p-8 transition-transform hover:scale-105 border border-gray-100"
              style={{ minHeight: 200 }}
            >
              <span className={isMobile ? "text-5xl mb-4" : "text-6xl mb-6"}>{type.emoji}</span>
              <h3 className={
                isMobile
                  ? "font-inter font-extrabold text-[20px] md:text-[24px] tracking-[-0.05em] mb-2"
                  : "font-inter font-extrabold text-[20px] md:text-[24px] tracking-[-0.05em] mb-3"
              }>
                {type.title}
              </h3>
              <p className={
                isMobile
                  ? "font-inter font-light text-[16px] leading-[160%] tracking-[-0.05em] text-gray-800 max-w-xs"
                  : "font-inter font-normal text-[18px] leading-[160%] tracking-[-0.05em] text-gray-700 max-w-xs mx-auto"
              }>
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 