"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useIsMobile from "../hooks/useIsMobile";

// Dynamically import Slider to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function HeroSection() {
  const { isMobile, mounted } = useIsMobile();

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '20px'
  };

  // To avoid hydration mismatch, only render the mobile-specific content after mounting
  if (!mounted) {
    return (
      <div className={`w-full max-w-[1400px] mx-auto ${isMobile ? 'px-2' : ''}`}>
        <div className="relative w-full overflow-hidden rounded-[20px]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.png"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-10 h-[600px]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full max-w-[1400px] mx-auto ${isMobile ? 'px-2' : ''}`}>
      <div className="relative w-full overflow-hidden rounded-[20px]">
        
        <div className="absolute inset-0 z-0">
          <Image
            src={isMobile ? "/mobile-hero-bg.png" : "/hero-bg.png"}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center px-2 md:px-8 py-10 md:py-1">
          {/* Left Content */}
          <div className={`${isMobile ? 'w-full' : 'md:w-1/2'} md:mb-0 px-4`}>
            <div className={`flex flex-col ${isMobile ? '' : 'max-w-xl'}`}>
              <p className="text-lg text-white font-medium mb-4 font-inter">Join. Play. Track. Grow.</p>
              
              <div className="flex items-center mb-4">
                <Image 
                  src="/🏟️staduim-emoji.png" 
                  alt="Stadium" 
                  width={isMobile ? 45 : 55} 
                  height={isMobile ? 45 : 55} 
                />
                <h1 className={`${isMobile ? 'text-4xl' : 'text-5xl'} text-white font-bold ml-2 font-dm-sans`}>FT Play</h1>
              </div>
              
              <h2 className={`${isMobile ? 'text-4xl' : 'text-5xl'} text-white font-bold mb-7 font-dm-sans`}>Football, Simplified.</h2>
              
              <p className="mb-10 text-sm md:text-lg  text-white max-w-[500px] font-inter">
                A football booking marketplace designed to connect players, simplify 
                game management, and build a stronger local football community.
              </p>
              
              <div className="flex gap-4 mb-10 md:mb-16">
                <a href="https://dummy-appstore-link.com" aria-label="Download on App Store" target="_blank" rel="noopener noreferrer">
                  <Image 
                    src="/hero-section-app-store-image.png" 
                    alt="App Store" 
                    width={isMobile ? 120 : 150} 
                    height={isMobile ? 36 : 45} 
                  />
                </a>
                <a href="https://dummy-googleplay-link.com" aria-label="Get it on Google Play" target="_blank" rel="noopener noreferrer">
                  <Image 
                    src="/hero-section-google-play-image.png" 
                    alt="Google Play" 
                    width={isMobile ? 120 : 150} 
                    height={isMobile ? 36 : 45} 
                  />
                </a>
              </div>
              
              {/* Stats - Desktop Grid, Mobile Slider */}
              {isMobile ? (
                <div className="w-full mb-10">
                  <Slider {...sliderSettings}>
                    <div className="px-2">
                      <div className="hero-card py-8 px-4 w-[155px] h-[177px] flex flex-col justify-between mx-auto">
                        <div>
                          <h3 className="text-xl font-bold mb-1 font-dm-sans">10,000+</h3>
                          <p className="font-medium mb-2 font-inter text-sm">Users</p>
                        </div>
                        <p className="text-xs font-inter">
                          Join millions who rely on Gerenpia for their daily needs.
                        </p>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="hero-card py-8 px-4 w-[155px] h-[177px] flex flex-col justify-between mx-auto">
                        <div>
                          <h3 className="text-xl font-bold mb-1 font-dm-sans">300+</h3>
                          <p className="font-medium mb-2 font-inter text-sm">Games & Events</p>
                        </div>
                        <p className="text-xs font-inter">
                          Access fast network of trusted Events and Games.
                        </p>
                      </div>
                    </div>
                    <div className="px-2">
                      <div className="hero-card py-8 px-4 w-[155px] h-[177px] flex flex-col justify-between mx-auto">
                        <div>
                          <h3 className="text-xl font-bold mb-1 font-dm-sans">24/7</h3>
                          <p className="font-medium mb-2 font-inter text-sm">Service Availability</p>
                        </div>
                        <p className="text-xs font-inter">
                          Get what you need, anytime, anywhere with our support.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                  <div className="hero-card py-8 px-5 w-[176px] h-[200px] flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 font-dm-sans">10,000+</h3>
                      <p className="font-medium mb-2 font-inter">Users</p>
                    </div>
                    <p className="text-sm font-inter">
                      Join millions who rely on Gerenpia for their daily needs.
                    </p>
                  </div>
                  
                  <div className="hero-card py-8 px-5 w-[176px] h-[200px] flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 font-dm-sans">300+</h3>
                      <p className="font-medium mb-2 font-inter">Games & Events</p>
                    </div>
                    <p className="text-sm font-inter">
                      Access fast network of trusted Events and Games.
                    </p>
                  </div>
                  
                  <div className="hero-card py-8 px-5 w-[176px] h-[200px] flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 font-dm-sans">24/7</h3>
                      <p className="font-medium mb-2 font-inter">Service Availability</p>
                    </div>
                    <p className="text-sm font-inter">
                      Get what you need, anytime, anywhere with our support.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Right Content - Mobile App Screenshots */}
          <div className={`${isMobile ? 'w-full' : 'md:w-1/2'} flex justify-center px-4 ${isMobile ? 'py-10' : 'py-20'}`}>
            <div className={`relative ${isMobile ? 'w-[280px] h-[400px]' : 'w-[600px] h-[600px]'}`}>
              <Image
                src="/hero-section-side-mobiles.png"
                alt="Mobile App Screenshots"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 