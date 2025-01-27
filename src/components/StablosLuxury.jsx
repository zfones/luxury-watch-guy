import React, { useState } from 'react';
import { Menu, Search, ShoppingBag } from 'lucide-react';

const StablosLuxury = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-black text-neutral-100">
      {/* Navigation */}
      <nav className="bg-black border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-6 w-6 text-neutral-300" />
              </button>
              <span className="ml-4 text-2xl font-thin tracking-wider">STABLOS</span>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-neutral-300" />
              <ShoppingBag className="h-5 w-5 text-neutral-300" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-black border-t border-neutral-800 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="space-y-4">
              <a href="#watches" className="block text-lg">Watches</a>
              <a href="#jewelry" className="block text-lg">Jewelry</a>
              <a href="#collections" className="block text-lg">Collections</a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src="/api/placeholder/1920/1080"
          alt="Luxury Watch"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-center text-center">
            <div>
              <h1 className="text-5xl font-thin tracking-wider mb-4">TIMELESS ELEGANCE</h1>
              <p className="text-lg text-neutral-300 mb-8">
                Discover our curated collection of fine jewelry and luxury timepieces
              </p>
              <button className="bg-[#d4c4a7] text-black px-8 py-3 text-sm tracking-wider">
                EXPLORE COLLECTION
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StablosLuxury;