import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          <img 
            src="https://i.ibb.co/Smyj3xW/logo-LESKY.png" 
            alt="LESKY Logo" 
            className="h-14 w-auto hover:opacity-80 transition-opacity cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>
      </div>
    </nav>
  );
}