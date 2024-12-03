import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function Store() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const products = [
    { name: 'T-Shirt LESKY', price: '25.000 FCFA' },
    { name: 'Hoodie Tour 2024', price: '45.000 FCFA' },
    { name: 'Casquette Logo', price: '15.000 FCFA' },
    { name: 'Album Dédicacé', price: '20.000 FCFA' }
  ];

  return (
    <section className="py-20 bg-gradient-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className={`text-3xl font-bold mb-12 text-primary ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          Boutique
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`group ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt={product.name}
                  className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <button className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center">
                  <ShoppingBag className="text-light" />
                </button>
              </div>
              <h3 className="font-bold text-light">{product.name}</h3>
              <p className="text-tertiary">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}