import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Pricing = () => {
  return (
    <div className="py-24 sm:py-32 bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            One plan that grows with your business. No hidden fees.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-lg bg-white rounded-3xl shadow-xl ring-1 ring-gray-200">
          <div className="p-8 sm:p-10">
            <h3 className="text-2xl font-bold tracking-tight text-primary">Professional</h3>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-gray-900">€19</span>
              <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
            </p>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
              {[
                "Automated tax calculations",
                "Real-time BTW tracking",
                "Bank transaction categorization",
                "Tax savings recommendations",
                "Email support",
                "Secure bank connections",
              ].map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-secondary" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full bg-primary hover:bg-primary/90">
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};