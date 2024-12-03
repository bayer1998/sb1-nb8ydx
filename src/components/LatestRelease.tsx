import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function LatestRelease() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="latest-release" className="py-20 bg-gradient-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-12 text-primary ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          Dernière Sortie
        </h2>
        <div className={`space-y-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="aspect-video w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/54ltegkLyFM" 
              title="Lesky - 8 FEVRIER" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-light">8 FEVRIER</h3>
            <p className="text-light/80 mb-6 max-w-2xl mx-auto">
              Découvrez le dernier chef-d'œuvre de LESKY, annonçant son prochain concert 
              événement au Palais de la Culture.
            </p>
            <button className="bg-gradient-primary text-light px-6 py-2 rounded-full hover:opacity-90 transition-all transform hover:scale-105">
              Écouter sur YouTube
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}