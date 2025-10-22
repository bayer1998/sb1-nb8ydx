import React from 'react';
import { Star, Gift } from 'lucide-react';
import { Card } from '../../../shared/components';

const LoyaltyPage: React.FC = () => {
  const loyaltyCards = [
    { id: 1, merchant: 'Café du Coin', points: 120, logo: '☕' },
    { id: 2, merchant: 'Restaurant Le Bon Goût', points: 450, logo: '🍽️' },
    { id: 3, merchant: 'Supermarché Plus', points: 890, logo: '🛒' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-secondary-900">Fidélité</h2>
        <p className="text-secondary-600">Vos cartes et récompenses</p>
      </div>

      <div className="space-y-4">
        {loyaltyCards.map((card) => (
          <Card key={card.id} hover className="bg-gradient-card">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{card.logo}</div>
                <div>
                  <p className="font-medium text-secondary-900">{card.merchant}</p>
                  <div className="flex items-center gap-1 text-warning-600">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-medium">{card.points} points</span>
                  </div>
                </div>
              </div>
              <Gift size={24} className="text-primary-600" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LoyaltyPage;
