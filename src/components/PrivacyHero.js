import React from "react";
import Image from "next/image";

const PrivacyHero = () => {
  return (
    <section className="relative bg-[#F7F8FA] min-h-[300px] flex items-center justify-center overflow-hidden font-inter">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Image
          src="/privacy-page-heading-bg-desktop.png"
          alt="Privacy Background"
          fill
          className="hidden sm:block object-cover"
          priority
        />
        <Image
          src="/privacy-page-heading-bg-mobile.png"
          alt="Privacy Background Mobile"
          fill
          className="sm:hidden object-cover"
          priority
        />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center w-full flex items-center justify-center font-inter">
        <h1 className="text-[42px] md:text-[56px] font-[700] text-black">
          Privacy Policy
        </h1>
      </div>
    </section>
  );
};

export default PrivacyHero;
