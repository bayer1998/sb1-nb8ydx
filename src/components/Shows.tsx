import React from 'react';
import { Calendar, MapPin, Music, Crown, Star, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function Shows() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const ticketCategories = [
    {
      name: 'VVIP',
      price: '20.000 FCFA',
      icon: Crown,
      features: [
        'Place assise premium',
        'Vue privilégiée',
        'Accès Parking'
      ]
    },
    {
      name: 'VIP',
      price: '10.000 FCFA',
      icon: Star,
      features: [
        'Place assise confort',
        'Vue privilégiée',
        'Accès Parking'
      ]
    },
    {
      name: 'GP',
      price: '5.000 FCFA',
      icon: Users,
      features: [
        'Place standard',
        'Ambiance garantie'
      ]
    }
  ];

  return (
    <section id="shows" className="py-20 bg-gradient-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 text-primary ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Concert Événement
          </h2>
          <p className={`text-light/80 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Ne manquez pas l'événement de l'année 🔥
          </p>
        </div>

        <div className="mb-12">
          <div className={`bg-gradient-card backdrop-blur-sm rounded-lg p-8 border-2 border-primary ${
            inView ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Calendar className="text-primary-light flex-shrink-0 w-8 h-8" />
                  <div>
                    <p className="font-bold text-2xl text-light">8 Février 2025</p>
                    <p className="text-xl text-light/60">Palais de la Culture</p>
                    <div className="flex items-center space-x-1 text-light/40 mt-1">
                      <MapPin size={16} />
                      <span>Abidjan</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Music size={20} className="text-primary-light" />
                  <span className="text-light/60 text-lg">LESKY en Concert inédit</span>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-sm text-light/60 mb-2">À partir de</p>
                <p className="text-4xl font-bold text-primary-light">5.000 FCFA</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {ticketCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={index}
                    className={`bg-dark/40 rounded-lg p-6 border border-light/10 hover:border-primary-light transition-all ${
                      category.name === 'VVIP' ? 'transform hover:scale-105' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Icon className={`w-6 h-6 ${
                          category.name === 'VVIP' ? 'text-primary-light' : 'text-light/60'
                        }`} />
                        <h3 className="text-xl font-bold text-light">{category.name}</h3>
                      </div>
                      <p className="text-xl font-bold text-primary-light">{category.price}</p>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="text-light/60 flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-primary-light rounded-full"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href="https://web.passpro.app/event/126/booking"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 rounded-full transition-all inline-block text-center ${
                        category.name === 'VVIP'
                          ? 'bg-white text-primary font-bold hover:bg-opacity-90'
                          : 'border border-light/20 text-light hover:border-primary-light hover:text-primary-light'
                      }`}
                    >
                      Réserver en {category.name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={`text-center ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-light/60">
            Places limitées disponibles • Réservez dès maintenant pour ne pas manquer cet événement unique
          </p>
        </div>
      </div>
    </section>
  );
}