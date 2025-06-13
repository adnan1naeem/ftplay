import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f2f4f6] mt-12">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12 py-10">
        <div className="w-full flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-0 mb-10">
          {/* Logo and Description */}
          <div className="flex flex-col items-start text-left mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="relative w-[140px] h-[100px]">
                <Image
                  src="/Logo.png"
                  alt="FT Play Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="max-w-md">
              <p className="text-base font-inter mb-2">
                FTPlay is a football booking marketplace designed to bring players together and make local games more accessible and organized.
              </p>
              <p className="text-base font-inter">
                Whether you're a seasoned player or just starting, FT Play offers a seamless way to join matches, track your performance, and become part of a vibrant football community
              </p>
            </div>
          </div>

          {/* Mobile: Explore + App Download side by side, left-aligned */}
          <div className="flex flex-row gap-8 mt-6 mb-1 w-full md:hidden">
            <div className="flex flex-col items-start w-1/2">
              <h3 className="text-[20px] font-bold text-[#c8e45c] font-dm-sans mb-1">Explore</h3>
              <ul className="space-y-2 font-inter text-base">
                <li><a href="#" className="hover:underline">About us</a></li>
                <li><a href="#" className="hover:underline">How It Works</a></li>
                <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              </ul>
            </div>
            <div className="flex flex-col items-start w-1/2">
              <h3 className="text-[20px] font-bold text-[#c8e45c] font-dm-sans mb-1">Get the App</h3>
              <p className="text-sm font-inter mb-2">Download FT Play for the best experience:</p>
              <div className="flex flex-col gap-2">
                <a href="https://dummy-appstore-link.com" target="_blank" rel="noopener noreferrer">
                  <Image src="/hero-section-app-store-image.png" alt="App Store" width={120} height={36} className="w-[120px] h-auto" />
                </a>
                <a href="https://dummy-googleplay-link.com" target="_blank" rel="noopener noreferrer">
                  <Image src="/hero-section-google-play-image.png" alt="Google Play" width={120} height={36} className="w-[120px] h-auto" />
                </a>
              </div>
            </div>
          </div>

          {/* Desktop: Explore Gorengan and App Download with large gap */}
          <div className="hidden md:flex md:flex-col md:col-span-1 md:pl-[260px]">
            <h3 className="text-[20px] font-bold mb-2 text-[#c8e45c] font-dm-sans">Explore Gorengan</h3>
            <ul className="space-y-2 font-inter text-base">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">How It Works</a></li>
              <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="hidden md:flex md:flex-col md:col-span-1 md:pl-[260px]">
            <h3 className="text-[20px] font-bold mb-2 text-[#c8e45c] font-dm-sans">Get the App</h3>
            <p className="text-sm font-inter mb-2">Download FT Play for the best experience:</p>
            <div className="flex flex-col gap-2">
              <a href="https://dummy-appstore-link.com" target="_blank" rel="noopener noreferrer">
                <Image src="/hero-section-app-store-image.png" alt="App Store" width={120} height={36} className="w-[120px] h-auto" />
              </a>
              <a href="https://dummy-googleplay-link.com" target="_blank" rel="noopener noreferrer">
                <Image src="/hero-section-google-play-image.png" alt="Google Play" width={120} height={36} className="w-[120px] h-auto" />
              </a>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-gray-300 my-6"></div>
        {/* Copyright */}
        <div className="text-center text-base font-inter">
          © 2025 FT Play. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
 