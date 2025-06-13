import HeroSection from "@/components/HeroSection";
import ScrollableGameSection from "@/components/ScrollableGameSection";
import PlayerTypesSection from "@/components/PlayerTypesSection";
import CoreService from "@/components/CoreService";
import FAQSection from "@/components/FAQSection";
import JoinCommunitySection from "@/components/JoinCommunitySection";
import DownloadSection from "@/components/DownloadSection";

export default function Home() {
  return (
    <div className="w-full min-h-screen ">
      <HeroSection />
      <ScrollableGameSection />
      <PlayerTypesSection />
      <CoreService />
      <FAQSection />
      <JoinCommunitySection />
      <DownloadSection />
    </div>
  );
}
