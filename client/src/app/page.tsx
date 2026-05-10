import DonationImpact from "@/components/home/DonationImpact";
import FeaturedPrograms from "@/components/home/FeaturedPrograms";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import SuccessStories from "@/components/home/SuccessStories";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedPrograms />
      <HowItWorks />
      <SuccessStories />
      <DonationImpact />
    </main>
  );
}