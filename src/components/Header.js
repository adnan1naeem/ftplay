"use client";

import Image from "next/image";
import useIsMobile from "../hooks/useIsMobile";
import Link from "next/link";
import { FiShield } from "react-icons/fi";

export default function Header() {
  const { isMobile, mounted } = useIsMobile();

  if (!mounted) {
    return <header className="w-full px-12 py-5 max-w-[1400px] mx-auto"></header>;
  }

  return (
    <header className={`w-full ${isMobile ? 'px-6 py-4' : 'px-12 py-5'} flex justify-between items-center max-w-[1400px] mx-auto`}>
      <div className="flex items-center">
        <Link href="/" aria-label="Go to home page">
          <div className={`relative ${isMobile ? 'w-[120px] h-[50px]' : 'w-[200px] h-[80px]'}`}>
            <Image
              src="/Logo.png"
              alt="FT Play Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/privacy-policy" className="flex items-center gap-2 text-[16px] md:text-[18px] font-inter font-semibold text-[#c8e45c] hover:bg-[#eaf7c2] hover:text-black px-4 py-2 rounded transition-colors duration-200">
          <FiShield className="text-[20px] md:text-[22px]" />
          Privacy Policy
        </Link>
      </div>
      {/*
      <div className="flex items-center gap-7">
        <a href="#" aria-label="X (Twitter)">
          <Image src="/x-logo.png" alt="X Logo" width={isMobile ? 16 : 20} height={isMobile ? 16 : 20} />
        </a>
        <a href="#" aria-label="Instagram">
          <Image src="/insta-logo.png" alt="Instagram Logo" width={isMobile ? 16 : 20} height={isMobile ? 16 : 20} />
        </a>
        <a href="#" aria-label="Facebook">
          <Image src="/fb-logo.png" alt="Facebook Logo" width={isMobile ? 16 : 20} height={isMobile ? 16 : 20} />
        </a>
        <a href="#" aria-label="TikTok">
          <Image src="/tiktok-logo.png" alt="TikTok Logo" width={isMobile ? 16 : 20} height={isMobile ? 16 : 20} />
        </a>
      </div>
      */}
    </header>
  );
} 