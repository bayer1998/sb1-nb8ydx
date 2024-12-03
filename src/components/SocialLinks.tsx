import React from 'react';
import { Instagram, Twitter, Youtube } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function SocialLinks() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const socialLinks = [
    { icon: Instagram, url: '#' },
    { icon: Twitter, url: '#' },
    { icon: Youtube, url: '#' }
  ];

  return (
    <section className="py-20 bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className={`text-3xl font-bold mb-12 text-primary ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          Suivez LESKY
        </h2>
        <div className={`flex justify-center space-x-8 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                className="text-light/60 hover:text-tertiary transition-colors transform hover:scale-110"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon size={32} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}