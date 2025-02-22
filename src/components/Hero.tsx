import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Powering the Future with
            <span className="text-blue-500"> AI Innovation</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 px-4">
            Transforming businesses through cutting-edge AI solutions, MLOps excellence, 
            and enterprise-grade DevOps practices.
          </p>
          <button
            onClick={onGetStarted}
            className="bg-blue-500 hover:bg-blue-600 px-6 md:px-8 py-3 rounded-full flex items-center space-x-2 transition-colors text-base md:text-lg"
          >
            <span>Get Started</span>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}