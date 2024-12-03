import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Music, Heart, Star } from 'lucide-react';

export default function IvorianCulture() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const culturalElements = [
    {
      title: "Coupé-Décalé",
      description: "L'influence du Coupé-Décalé, genre musical emblématique de la Côte d'Ivoire, se retrouve dans les productions de LESKY.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Nouchi",
      description: "LESKY utilise le Nouchi, l'argot ivoirien, créant une connexion authentique avec son public.",
      image: "https://images.unsplash.com/photo-1518799175676-a0fed7996acb?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Abidjan",
      description: "La vie nocturne vibrante d'Abidjan et sa culture urbaine inspirent profondément son art.",
      image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?w=800&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFA500]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#009B77]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <h2 className={`text-3xl font-bold mb-12 text-primary ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          L'Héritage Ivoirien
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {culturalElements.map((element, index) => (
            <div
              key={index}
              className={`bg-dark/40 backdrop-blur-sm rounded-lg overflow-hidden ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48">
                <img
                  src={element.image}
                  alt={element.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-tertiary">{element.title}</h3>
                <p className="text-light/80">{element.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 text-tertiary">
            <span className="text-xl font-bold">Fiers de nos racines 🇨🇮</span>
          </div>
        </div>
      </div>
    </section>
  );
}