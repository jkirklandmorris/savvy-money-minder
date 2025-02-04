import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return (
    <div className="relative isolate min-h-[90vh] flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="absolute inset-x-0 top-20 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      
      <div className="container mx-auto px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <Badge className="mb-8 rounded-full px-4 py-2 text-sm font-medium bg-blue-50 text-primary hover:bg-blue-100 cursor-pointer">
            Early Access Now Open
          </Badge>
          
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Never Worry About {' '}
            <span className="text-primary">Freelance Taxes</span>
            {' '} Again
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Smart tax automation for Dutch freelancers. Save time, reduce stress, and always know exactly how much to set aside for taxes.
          </p>
          
          <div className="mt-10 flex items-center gap-x-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              See How It Works
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3 lg:pt-2">
            {[
              ['5,000+', 'Active Users'],
              ['€2M+', 'Tax Managed'],
              ['4.9/5', 'User Rating'],
            ].map(([stat, label]) => (
              <div key={label} className="flex flex-col">
                <div className="text-2xl font-bold tracking-tight text-gray-900">
                  {stat}
                </div>
                <div className="text-sm text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <img
            src="/api/placeholder/600/500"
            alt="Dashboard Preview"
            className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};