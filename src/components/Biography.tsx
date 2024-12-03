import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Music2, Youtube, Users, Heart } from 'lucide-react';
import { useCounter } from '../hooks/useCounter';

export default function Biography() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [displayedText, setDisplayedText] = useState('');
  const [currentParagraph, setCurrentParagraph] = useState(0);

  const subscribersCount = useCounter({ end: 2000000, suffix: 'M+' });
  const viewsCount = useCounter({ end: 15000000, suffix: 'M+' });
  const careerCount = useCounter({ end: 2017, duration: 1000 });
  const likesCount = useCounter({ end: 4000000, suffix: 'M+' });

  const stats = [
    { 
      icon: Users, 
      value: subscribersCount.formattedCount, 
      label: 'Abonnés'
    },
    { 
      icon: Youtube, 
      value: viewsCount.formattedCount, 
      label: 'Vues YouTube'
    },
    { 
      icon: Music2, 
      value: careerCount.formattedCount, 
      label: 'Début de carrière'
    },
    { 
      icon: Heart, 
      value: likesCount.formattedCount, 
      label: 'Likes TikTok'
    }
  ];

  const biographyText = [
    `Véritable phénomène du rap ivoirien, LESKY s'est imposé comme une figure incontournable 
    de la scène musicale africaine. Originaire des quartiers vibrants d'Abidjan, il incarne 
    la nouvelle génération d'artistes qui redéfinissent les codes du rap en Côte d'Ivoire.`,
    
    `Son ascension fulgurante depuis 2017 témoigne d'un talent brut et d'une authenticité rare. 
    Des titres comme « Jeux de rein » et « Les pehi filles ont pehi cui » ont marqué ses débuts, 
    mais c'est avec « Djinzin » et « Tout est loué » qu'il a véritablement explosé, devenant 
    viral sur TikTok et les réseaux sociaux.`,
    
    `Poursuivant sur sa lancée, LESKY enchaine les succès avec ses dernières sorties : 
    « PLACALI », « SON CUI », et son dernier titre « 8 FEVRIER », un teaser explosif 
    annonçant son prochain concert événement au Palais de la Culture. Son style unique mêle 
    le Nouchi (argot ivoirien) à des productions modernes, créant une signature sonore distinctive.`,
    
    `Reconnu pour son charisme et son franc-parler, LESKY s'est construit une image de 
    "bad boy" assumée qui résonne auprès d'une génération en quête d'authenticité. Son prochain 
    concert au Palais de la Culture d'Abidjan le 8 février 2025 promet d'être un événement historique, 
    marquant une nouvelle étape dans sa conquête de la scène musicale africaine.`
  ];

  useEffect(() => {
    if (inView && currentParagraph < biographyText.length) {
      const text = biographyText[currentParagraph];
      let index = 0;
      
      const typingInterval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index));
          index++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setCurrentParagraph(prev => prev + 1);
            setDisplayedText('');
          }, 1000);
        }
      }, 30);

      return () => clearInterval(typingInterval);
    }
  }, [inView, currentParagraph]);

  return (
    <section className="py-20 bg-gradient-dark relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={inView ? 'animate-fade-in-up' : 'opacity-0'}>
            <h2 className="text-3xl font-bold mb-6 text-primary">L'Histoire de LESKY</h2>
            <div className="prose prose-invert">
              {biographyText.slice(0, currentParagraph).map((text, index) => (
                <p key={index} className="text-light/80 mb-6">{text}</p>
              ))}
              {currentParagraph < biographyText.length && (
                <p className="text-light/80 mb-6">
                  {displayedText}
                  <span className="animate-blink">|</span>
                </p>
              )}
              <blockquote className="border-l-4 border-tertiary pl-4 my-6">
                <p className="text-tertiary italic">
                  "Je suis le nouveau visage du rap ivoirien, celui qui brise les codes et repousse les limites."
                </p>
              </blockquote>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className={`bg-dark/50 backdrop-blur-sm rounded-lg p-6 border border-light/10 transform hover:scale-105 transition-all ${
                    inView ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Icon className="text-tertiary mb-2" size={24} />
                  <div className="text-3xl font-bold text-primary mb-1 transition-all">
                    {stat.value}
                  </div>
                  <div className="text-light/60">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}