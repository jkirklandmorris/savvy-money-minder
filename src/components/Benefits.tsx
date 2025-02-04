import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Clock, PiggyBank, Shield } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      name: 'Smart Tax Calculation',
      description: 'Real-time tax calculations and BTW estimates that adapt to your business activity.',
      icon: Calculator,
      color: 'bg-blue-50 text-primary',
    },
    {
      name: 'Save Hours Monthly',
      description: 'Automated transaction categorization and reporting saves you valuable time.',
      icon: Clock,
      color: 'bg-teal-50 text-teal-700',
    },
    {
      name: 'Intelligent Savings',
      description: 'Get personalized recommendations to optimize your tax savings.',
      icon: PiggyBank,
      color: 'bg-orange-50 text-orange-700',
    },
    {
      name: 'Bank-Grade Security',
      description: 'Your data is protected with enterprise-level security and encryption.',
      icon: Shield,
      color: 'bg-green-50 text-green-700',
    },
  ];

  return (
    <div className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need to Manage Your Taxes
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-gray-600">
            Purpose-built for Dutch freelancers, ZZPay combines powerful tax automation with intuitive design.
          </p>
        </div>

        <div className="mx-auto mt-12 sm:mt-16 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.name} className="bg-white border-none shadow-none">
                <CardContent className="pt-6">
                  <div className={`rounded-2xl p-2 w-12 h-12 flex items-center justify-center ${benefit.color}`}>
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {benefit.name}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};