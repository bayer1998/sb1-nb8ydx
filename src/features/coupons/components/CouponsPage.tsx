import React from 'react';
import { Tag, Clock } from 'lucide-react';
import { Card } from '../../../shared/components';

const CouponsPage: React.FC = () => {
  const coupons = [
    { id: 1, title: '-20% sur tout le magasin', merchant: 'Fashion Store', expires: '2025-11-15' },
    { id: 2, title: '1 acheté = 1 offert', merchant: 'Pizzeria Roma', expires: '2025-11-30' },
    { id: 3, title: '-10€ dès 50€ d\'achat', merchant: 'Électro Plus', expires: '2025-12-01' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-secondary-900">Mes Coupons</h2>
        <p className="text-secondary-600">Utilisez vos réductions</p>
      </div>

      <div className="space-y-4">
        {coupons.map((coupon) => (
          <Card key={coupon.id} hover>
            <div className="flex items-start gap-4">
              <div className="bg-warning-100 p-3 rounded-lg shrink-0">
                <Tag size={24} className="text-warning-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-secondary-900">{coupon.title}</p>
                <p className="text-sm text-secondary-600 mt-1">{coupon.merchant}</p>
                <div className="flex items-center gap-1 text-sm text-secondary-500 mt-2">
                  <Clock size={14} />
                  <span>Expire le {new Date(coupon.expires).toLocaleDateString('fr-FR')}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CouponsPage;
