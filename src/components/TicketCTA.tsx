import React from 'react';
import { Calendar, MapPin, Timer } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function TicketCTA() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="fixed bottom-8 left-0 right-0 z-40 p-4" ref={ref}>
      <div className={`max-w-3xl mx-auto bg-gradient-primary rounded-lg shadow-2xl transform ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Calendar className="w-8 h-8 text-white" />
            <div>
              <h3 className="text-xl font-bold text-white">LESKY en Concert inédit</h3>
              <p className="text-white/90">8 Février 2025 • À partir de 5.000 FCFA</p>
            </div>
          </div>
          <a 
            href="https://web.passpro.app/event/126/booking"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Réserver Maintenant
          </a>
        </div>
      </div>
    </div>
  );
}