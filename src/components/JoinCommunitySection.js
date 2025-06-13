"use client";

import Image from "next/image";
import useIsMobile from "../hooks/useIsMobile";

export default function JoinCommunitySection() {
  const { isMobile } = useIsMobile();

  return (
    <div className="w-full bg-transparent py-4 md:py-8">
      <div className="relative w-full max-w-[1400px] mx-auto rounded-2xl overflow-hidden min-h-[340px] md:min-h-[160px] flex items-center justify-center px-2 md:px-0">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={isMobile ? "/joinMobileBg.png" : "/JoinDesktopBg.png"}
            alt="Join FT Community Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Content */}
        <div className={`relative z-10 w-full flex ${isMobile ? 'flex-col items-start justify-center py-10 px-6' : 'flex-row items-center justify-between py-0 px-12'} h-full`}>
          <div className={`flex flex-col items-start text-left gap-2 md:gap-3 w-full`}>
            <h2 className="text-white font-bold text-[32px] md:text-[32px] lg:text-[40px] leading-[110%] mb-1 md:mb-2 drop-shadow">Join the FT Community</h2>
            <p className="text-white text-[15px] md:text-[16px] font-medium mb-4 md:mb-0 drop-shadow">One App. Multiple Services. Maximum Convenience.</p>
          </div>
          <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-3 md:gap-4 mt-4 md:mt-0 items-start w-full max-w-[220px]`}>
            <a href="https://dummy-appstore-link.com" aria-label="Download on App Store" target="_blank" rel="noopener noreferrer">
              <Image
                src="/hero-section-app-store-image.png"
                alt="App Store"
                width={isMobile ? 200 : 120}
                height={isMobile ? 60 : 36}
                className="w-[180px] md:w-[120px] h-auto"
              />
            </a>
            <a href="https://dummy-googleplay-link.com" aria-label="Get it on Google Play" target="_blank" rel="noopener noreferrer">
              <Image
                src="/hero-section-google-play-image.png"
                alt="Google Play"
                width={isMobile ? 200 : 120}
                height={isMobile ? 60 : 36}
                className="w-[180px] md:w-[120px] h-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 