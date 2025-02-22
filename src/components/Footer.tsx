import React from 'react';
import { Brain } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Brain className="h-6 w-6 text-blue-500" />
            <span className="font-bold">HMT Technologies</span>
          </div>
          <p className="text-gray-400">© 2024 HMT Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}