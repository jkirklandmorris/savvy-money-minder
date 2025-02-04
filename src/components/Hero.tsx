import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Hero = () => {
  return (
    <div className="relative isolate min-h-[90vh] flex items-center bg-white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white" />
      
      <div className="container mx-auto px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <Badge className="mb-8 rounded-full px-4 py-2 text-sm font-medium bg-primary/5 text-primary hover:bg-primary/10 cursor-pointer">
            Early Access Now Open
          </Badge>
          
          <h1 className="text-5xl font-medium tracking-tight text-gray-900 sm:text-6xl">
            Never Worry About {' '}
            <span className="text-primary font-medium">Freelance Taxes</span>
            {' '} Again
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Smart tax automation for Dutch freelancers. Save time, reduce stress, and always know exactly how much to set aside for taxes.
          </p>
          
          <div className="mt-10 flex items-center gap-x-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="ghost" size="lg" className="rounded-full">
              See How It Works
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3 lg:pt-2">
            {[
              ['5,000+', 'Active Users'],
              ['€2M+', 'Tax Managed'],
              ['4.9/5', 'User Rating'],
            ].map(([stat, label]) => (
              <div key={label} className="flex flex-col">
                <div className="text-3xl font-medium tracking-tight text-gray-900">
                  {stat}
                </div>
                <div className="text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow relative">
          <div className="relative">
            {/* Dashboard mockup with clean, modern design */}
            <div className="mx-auto w-[22.875rem] max-w-full rounded-3xl bg-white p-6 shadow-[0_0_50px_rgba(0,0,0,0.1)] backdrop-blur-xl">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <div className="h-2 w-20 bg-gray-200 rounded-full"></div>
                    <div className="h-4 w-32 bg-primary rounded-full"></div>
                  </div>
                  <div className="h-8 w-8 bg-gray-100 rounded-full"></div>
                </div>
                
                {/* Main content */}
                <div className="space-y-6 mt-8">
                  <div className="h-24 bg-gray-50 rounded-2xl p-4">
                    <div className="h-3 w-24 bg-gray-200 rounded-full mb-2"></div>
                    <div className="h-6 w-32 bg-primary/10 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-gray-50 rounded-2xl p-4">
                      <div className="h-3 w-16 bg-gray-200 rounded-full mb-2"></div>
                      <div className="h-4 w-20 bg-primary/10 rounded-full"></div>
                    </div>
                    <div className="h-20 bg-gray-50 rounded-2xl p-4">
                      <div className="h-3 w-16 bg-gray-200 rounded-full mb-2"></div>
                      <div className="h-4 w-20 bg-primary/10 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating callouts with Apple-like design */}
            <div className="absolute -left-4 top-4 bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-lg text-sm border border-gray-100">
              <span className="text-primary font-medium">Monthly Tax Bucket</span>
              <br />
              €2,450 saved
            </div>
            <div className="absolute -right-4 top-1/2 bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-lg text-sm border border-gray-100">
              <span className="text-primary font-medium">Auto-Split</span>
              <br />
              21% BTW → Monthly
            </div>
            <div className="absolute -left-4 bottom-4 bg-white/80 backdrop-blur-xl p-4 rounded-2xl shadow-lg text-sm border border-gray-100">
              <span className="text-primary font-medium">Safe to Spend</span>
              <br />
              €3,780 available
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};