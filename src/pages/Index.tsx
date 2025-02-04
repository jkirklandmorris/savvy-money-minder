import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Benefits />
      <Pricing />
      <FAQ />
    </div>
  );
};

export default Index;