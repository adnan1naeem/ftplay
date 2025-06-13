"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import useIsMobile from "../hooks/useIsMobile";

export default function CoreService() {
  const { isMobile } = useIsMobile();

  return (
    <div className="w-full relative py-16 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/corebg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Image Only */}
        <div className="flex justify-center items-center w-full">
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
            <Image
              src={isMobile ? "/mobWithCardMobile.png" : "/mobWithCard.png"}
              alt="Mobile App with Card"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 