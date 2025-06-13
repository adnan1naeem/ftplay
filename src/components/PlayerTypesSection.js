"use client";

import { useState, useEffect } from "react";
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
        <h2 className="font-inter font-semibold text-[22px] sm:text-[26px] md:text-[28px] leading-[140%] tracking-[-0.05em] mb-16 text-center text-black">
          Built for Every Type of Player
        </h2>

        {/* Desktop: Full height section with scroll */}
        {!isMobile && (
          <div 
            className="h-[400px] overflow-y-auto scrollbar-hide" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* CSS to hide scrollbar */}
            <style jsx global>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            <div className="space-y-[400px]">
              {playerTypes.map((type, index) => (
                <div 
                  key={index} 
                  className="h-[400px] flex flex-col items-center justify-center text-center px-4"
                >
                  <div className="flex items-center justify-center mb-6">
                    <span className="text-5xl mr-0">{type.emoji}</span>
                    <h3 className="font-inter font-extrabold text-[32px] sm:text-[40px] md:text-[48px] tracking-[-0.05em]">
                      {type.title}
                    </h3>
                  </div>
                  <p className="font-inter font-normal text-[20px] leading-[160%] tracking-[-0.05em] text-gray-800 max-w-md">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mobile: Show all content stacked */}
        {isMobile && (
          <div className="space-y-12">
            {playerTypes.map((type, index) => (
              <div key={index} className="flex flex-col items-center text-center px-4">
                <div className="flex items-center mb-1 md:mb-4">
                  <span className="text-4xl mr-0">{type.emoji}</span>
                  <h3 className="font-inter font-extrabold text-[24px] sm:text-[28px] md:text-[32px] tracking-[-0.05em]">
                    {type.title}
                  </h3>
                </div>
                <p className="font-inter font-light text-[16px] leading-[160%] tracking-[-0.05em] text-gray-800 max-w-xs">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 