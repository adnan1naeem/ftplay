"use client";

import Image from "next/image";

export default function DownloadSection() {
  return (
    <div className="w-full bg-[#f5f7fa] py-10 md:py-20">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-center px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full">
          {/* Left: Mobile Mockup (desktop: larger, visually prominent) */}
          <div className="relative w-[260px] h-[320px] md:w-[420px] md:h-[480px]">
            <Image
              src="/downloadMobileImage.png"
              alt="FT Play Mobile App Mockup"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* Right: Text and Buttons (desktop: vertically centered, left-aligned) */}
          <div className="flex flex-col items-start text-left justify-center max-w-[420px] mt-8 md:mt-0">
            <h2 className="text-[26px] md:text-[32px] font-bold text-black mb-3 leading-tight">Download FT Play &<br className="hidden md:block" /> Get on the Field</h2>
            <p className="text-gray-700 text-[15px] md:text-[16px] mb-6 max-w-md">Your game. Your stats. Your story.<br />Be part of the fastest-growing football community in your city.</p>
            <div className="flex gap-3 md:gap-4 justify-start mb-8 md:mb-0">
              <a href="https://dummy-appstore-link.com" aria-label="Download on App Store" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/hero-section-app-store-image.png"
                  alt="App Store"
                  width={120}
                  height={36}
                  className="w-[120px] h-auto"
                />
              </a>
              <a href="https://dummy-googleplay-link.com" aria-label="Get it on Google Play" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/hero-section-google-play-image.png"
                  alt="Google Play"
                  width={120}
                  height={36}
                  className="w-[120px] h-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 