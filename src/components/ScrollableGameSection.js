"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import useIsMobile from "../hooks/useIsMobile";

const contentSections = [
  {
    heading: (
      <span style={{ display: 'flex', alignItems: 'baseline' }}>
        <Image src="/⚽football.png" alt="Soccer Ball" width={40} height={40} style={{ marginRight: 12 }} />
        <span>Explore Local Football Games</span>
      </span>
    ),
    text: "• Discover ongoing and upcoming football matches in your area.\n• Browse game types based on skill level, location, or timing.\n• Join solo or with your team – options for all levels.",
    image: "/scrollable-section-mobile-1.png",
  },
  {
    heading: "🧠 Smart Player Profiles (FT Cards)",
    text: "• Build your unique player profile that mirrors your real on-field persona.\n• Use self-assessment or peer ratings for an authentic card.\n• Update stats as you improve and gain match experience.",
    image: "/scrollable-section-mobile-2.png",
  },
  {
    heading: "📊 Stat Tracking & Player Growth",
    text: "• Every game is recorded and verified by match hosts or referees.\n• Ensures fair and accurate stat tracking—no inflated numbers.\n• Builds trust and credibility in your performance history.",
    image: "/scrollable-section-mobile-3.png",
  },
  {
    heading: "🎬 Community Highlights",
    text: "• Compete not just to win, but to shine.\n• Keep pushing your game to make it to the spotlight.\n• Earn bragging rights and build your rep on and off the pitch.",
    image: "/scrollable-section-mobile-4.png",
  },
];

export default function ScrollableGameSection() {
  const { isMobile } = useIsMobile();
  const [activeSection, setActiveSection] = useState(0);
  const sectionContainerRef = useRef(null);

  useEffect(() => {
    // Handle scroll to detect active section
    const handleScroll = () => {
      if (sectionContainerRef.current) {
        const container = sectionContainerRef.current;
        const scrollPosition = container.scrollTop;
        const sectionHeight = container.clientHeight;
        
        // Calculate which section is currently in view based on scroll position
        const newActiveSection = Math.floor(scrollPosition / sectionHeight);
        if (newActiveSection !== activeSection && newActiveSection < contentSections.length) {
          setActiveSection(newActiveSection);
        }
      }
    };
    
    const container = sectionContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeSection]);

  return (
    <div className="w-full relative my-6 md:my-12 overflow-hidden">
      {/* Full width container with fixed height */}
      <div className="relative h-[100vh] w-full">
        {/* Background image - full width */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/scrollable-section-background.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Scrollable content container with hidden scrollbar */}
        <div 
          ref={sectionContainerRef}
          className="absolute inset-0 z-10 overflow-y-auto scrollbar-hide"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {/* CSS to hide scrollbar */}
          <style jsx global>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {contentSections.map((section, index) => (
            <div
              key={index}
              className={`h-[100vh] flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 ${
                activeSection === index ? "opacity-100" : "opacity-70"
              } transition-opacity duration-300`}
            >
              {/* Content wrapper with max-width */}
              <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-center">
                {/* Left side - Text content */}
                <div className={`${isMobile ? "w-full text-left" : "md:w-1/2 md:text-left"} mb-8 md:mb-0 md:ml-[100px] md:pr-8 flex flex-col items-center md:items-start`}>
                  <h2 className="font-inter font-bold text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] leading-none tracking-[-0.05em] mb-4 md:mb-6 text-black">
                    {section.heading}
                  </h2>
                  <div className="font-inter font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[123%] tracking-[-0.05em] text-black max-w-lg whitespace-pre-line">
                    {section.text}
                  </div>
                </div>
                
                {/* Right side - Mobile image */}
                <div className={`${isMobile ? "w-full" : "md:w-1/2"} flex justify-center items-center mt-4 md:mt-0`}>
                  <div className={`relative w-[280px] h-[260px] sm:w-[300px] sm:h-[450px] md:w-[350px] md:h-[500px] lg:w-[550px] lg:h-[650px]`}>
                    <Image
                      src={section.image}
                      alt={`Mobile app screenshot ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 