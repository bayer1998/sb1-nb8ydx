import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function Gallery() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const images = [
    {
      url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&auto=format&fit=crop&q=60",
      caption: "Concert à Abidjan"
    },
    {
      url: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=800&auto=format&fit=crop&q=60",
      caption: "Festival des Musiques Urbaines"
    },
    {
      url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop&q=60",
      caption: "Palais de la Culture"
    },
    {
      url: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&auto=format&fit=crop&q=60",
      caption: "Studio Session"
    }
  ];

  return (
    <section className="py-20 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-12 text-primary ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          Galerie
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative aspect-square overflow-hidden rounded-lg ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-light text-sm font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}