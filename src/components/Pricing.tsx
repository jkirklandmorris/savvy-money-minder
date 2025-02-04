import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRightCircle, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Pricing = () => {
  const features = [
    'Automated tax calculations',
    'Real-time BTW tracking',
    'Bank transaction categorization',
    'Tax savings recommendations',
    'Priority email support',
    'Secure bank connections',
  ];

  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Start free for 30 days. No credit card required.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-lg">
          <Card className="relative bg-white rounded-3xl border-2 border-primary/10 overflow-hidden">
            <div className="absolute top-0 right-0">
              <Badge className="m-4 bg-primary/10 text-primary hover:bg-primary/20 rounded-full">
                Most Popular
              </Badge>
            </div>
            
            <CardContent className="p-8">
              <div className="flex items-baseline gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-gray-900">€19</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
              </div>
              
              <p className="mt-4 text-sm text-gray-600">
                Everything you need to manage your freelance taxes
              </p>

              <div className="mt-8">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Start Free Trial <ArrowRightCircle className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <ul role="list" className="mt-8 space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 text-sm text-gray-600">
                    <CheckCircle2 className="h-5 w-5 flex-none text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};