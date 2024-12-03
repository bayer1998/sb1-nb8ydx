import React from 'react';
import { Play, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat hidden md:block"
          style={{
            backgroundImage: `url('https://i.ibb.co/yPL7CB4/COVERLESKY2.png')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/50 to-dark/90"></div>
        </div>
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat block md:hidden"
          style={{
            backgroundImage: `url('https://i.ibb.co/vzQLbkr/coverlesky-MOBILE.png')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/50 to-dark/90"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl animate-fade-in-up">
          <img 
            src="https://i.ibb.co/Smyj3xW/logo-LESKY.png"
            alt="LESKY Logo"
            className="h-24 mb-6 animate-fade-in"
          />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Concert Événement
            <br />
            <span className="text-primary">8 Février 2025</span>
          </h1>
          <p className="text-xl text-light/80 mb-8 max-w-2xl">
            Rejoignez LESKY pour une soirée exceptionnelle au Palais de la Culture d'Abidjan
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://web.passpro.app/event/126/booking"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-opacity-90 transition-all transform hover:scale-105 font-bold"
            >
              <Calendar size={20} />
              <span>Réserver Mon Ticket</span>
            </a>
            <button 
              onClick={() => document.querySelector('#latest-release')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-tertiary text-tertiary px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-tertiary hover:text-dark transition-all"
            >
              <Play size={20} />
              <span>Voir le Teaser</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}