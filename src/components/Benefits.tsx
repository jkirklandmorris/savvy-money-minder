import { Calculator, Clock, PiggyBank, Shield } from "lucide-react";

const benefits = [
  {
    title: "Automated Tax Calculations",
    description: "Real-time tax calculations and BTW tracking to always know your obligations.",
    icon: Calculator,
  },
  {
    title: "Time Saving",
    description: "Save hours every month with automated transaction categorization and reporting.",
    icon: Clock,
  },
  {
    title: "Smart Savings",
    description: "Get personalized recommendations for tax-efficient saving strategies.",
    icon: PiggyBank,
  },
  {
    title: "Peace of Mind",
    description: "Bank-level security and compliance with Dutch tax regulations.",
    icon: Shield,
  },
];

export const Benefits = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Why Choose ZZPay?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Built specifically for Dutch freelancers, ZZPay makes tax management simple and stress-free.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="relative animate-float">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                    <benefit.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-primary">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};