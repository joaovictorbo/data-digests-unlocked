import { HeroSection } from "@/components/HeroSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { HashingAnimation } from "@/components/HashingAnimation";
import { TimelineSection } from "@/components/TimelineSection";
import { PerformanceSection } from "@/components/PerformanceSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ArchitectureSection />
      <HashingAnimation />
      <TimelineSection />
      <PerformanceSection />
    </div>
  );
};

export default Index;
