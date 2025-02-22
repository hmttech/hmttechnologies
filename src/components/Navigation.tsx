import React, { useState, useCallback } from 'react';
import { Brain, Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSectionClick = useCallback((section: string) => {
    onSectionChange(section);
    setIsMenuOpen(false);
  }, [onSectionChange]);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-500" />
            <span className="text-xl md:text-2xl font-bold">HMT Technologies</span>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="hidden md:flex space-x-8">
            {['home', 'services', 'products', 'projects', 'about', 'blogs', 'testimonials', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleSectionClick(section)}
                className={`capitalize ${
                  activeSection === section ? 'text-blue-500' : 'text-gray-300 hover:text-blue-400'
                } transition-colors`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>

        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="pt-4 pb-3 space-y-3">
            {['home', 'services', 'products', 'projects', 'about', 'blogs', 'testimonials', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleSectionClick(section)}
                className={`block w-full text-left px-3 py-2 rounded-lg capitalize ${
                  activeSection === section 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                } transition-colors`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}