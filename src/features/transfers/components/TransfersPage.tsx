import React from 'react';
import { Send, Users } from 'lucide-react';
import { Card } from '../../../shared/components';

const TransfersPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-secondary-900">Transferts</h2>
        <p className="text-secondary-600">Envoyez de l'argent ou créez une cagnotte</p>
      </div>

      <div className="space-y-3">
        <Card hover>
          <div className="flex items-center gap-4">
            <div className="bg-primary-100 p-3 rounded-lg">
              <Send size={24} className="text-primary-600" />
            </div>
            <div>
              <p className="font-medium text-secondary-900">Envoyer de l'argent</p>
              <p className="text-sm text-secondary-600">Transfert P2P instantané</p>
            </div>
          </div>
        </Card>

        <Card hover>
          <div className="flex items-center gap-4">
            <div className="bg-success-100 p-3 rounded-lg">
              <Users size={24} className="text-success-600" />
            </div>
            <div>
              <p className="font-medium text-secondary-900">Créer une cagnotte</p>
              <p className="text-sm text-secondary-600">Pour un événement ou un projet</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TransfersPage;
