import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            Automated Tax Management for
            <span className="text-secondary"> Dutch Freelancers</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Stop worrying about taxes. ZZPay automatically calculates your tax obligations, 
            recommends savings, and helps you focus on what matters - growing your business.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Join Early Access <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};