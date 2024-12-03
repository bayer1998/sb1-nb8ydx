import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black py-6 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-gray-400 text-sm">Produit par</span>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src="https://i.ibb.co/kmzkzkG/starfcatory.png" 
                  alt="Star Factory Logo" 
                  className="h-8 w-auto"
                />
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-gray-400 text-sm">Propulsé par</span>
              <a 
                href="https://passpro.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <svg width="120" height="55" viewBox="0 0 359 164" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto">
                  <rect width="359" height="164" fill="white"/>
                  <path d="M120.5 82C120.5 127.84 93.8396 164 60.5 164C27.1604 164 0.5 127.84 0.5 82C0.5 36.1604 27.1604 0 60.5 0C93.8396 0 120.5 36.1604 120.5 82Z" fill="#FF4B55"/>
                  <path d="M358.5 82C358.5 127.84 331.84 164 298.5 164C265.16 164 238.5 127.84 238.5 82C238.5 36.1604 265.16 0 298.5 0C331.84 0 358.5 36.1604 358.5 82Z" fill="#FF4B55"/>
                  <rect x="60" y="0" width="239" height="164" fill="#FF4B55"/>
                  <path d="M179.5 82C179.5 127.84 152.84 164 119.5 164C86.1604 164 59.5 127.84 59.5 82C59.5 36.1604 86.1604 0 119.5 0C152.84 0 179.5 36.1604 179.5 82Z" fill="white"/>
                  <path d="M299.5 82C299.5 127.84 272.84 164 239.5 164C206.16 164 179.5 127.84 179.5 82C179.5 36.1604 206.16 0 239.5 0C272.84 0 299.5 36.1604 299.5 82Z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} LESKY. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}