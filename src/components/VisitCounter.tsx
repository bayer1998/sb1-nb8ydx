import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Users } from 'lucide-react';
import { useVisitorTracking } from '../hooks/useVisitorTracking';
import { formatCount } from '../utils/formatters';

export default function VisitCounter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { visitorCount } = useVisitorTracking();

  return (
    <div 
      ref={ref}
      className={`fixed top-24 right-4 z-40 bg-gradient-primary rounded-lg shadow-lg transform transition-all duration-300 ${
        inView ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className="p-4">
        <div className="flex items-center space-x-3 mb-2">
          <Users className="text-white" size={20} />
          <div>
            <p className="text-xs text-white/80">Total Visiteurs</p>
            <p className="text-lg font-bold text-white">{formatCount(visitorCount.total)}</p>
          </div>
        </div>
        <div className="flex justify-between text-xs text-white/80">
          <div>
            <p>Aujourd'hui</p>
            <p className="font-semibold text-white">{formatCount(visitorCount.today)}</p>
          </div>
          <div>
            <p>Uniques</p>
            <p className="font-semibold text-white">{formatCount(visitorCount.unique)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}