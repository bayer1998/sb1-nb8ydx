import React from 'react';
import { Receipt } from 'lucide-react';
import { Card } from '../../../shared/components';

const TicketsPage: React.FC = () => {
  const tickets = [
    { id: 1, merchant: 'Supermarché Plus', amount: 45.67, date: '2025-10-20' },
    { id: 2, merchant: 'Restaurant Le Bon Goût', amount: 78.50, date: '2025-10-19' },
    { id: 3, merchant: 'Café du Coin', amount: 4.20, date: '2025-10-18' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-secondary-900">Mes Tickets</h2>
        <p className="text-secondary-600">Tous vos tickets dématérialisés</p>
      </div>

      <div className="space-y-3">
        {tickets.map((ticket) => (
          <Card key={ticket.id} hover>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Receipt size={20} className="text-primary-600" />
                </div>
                <div>
                  <p className="font-medium text-secondary-900">{ticket.merchant}</p>
                  <p className="text-sm text-secondary-500">
                    {new Date(ticket.date).toLocaleDateString('fr-FR')}
                  </p>
                </div>
              </div>
              <p className="font-bold text-secondary-900">{ticket.amount.toFixed(2)} €</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
