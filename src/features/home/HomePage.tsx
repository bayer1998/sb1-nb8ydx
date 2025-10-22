import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QrCode, Send, Gift, Ticket, CreditCard, TrendingUp } from 'lucide-react';
import { Card } from '../../shared/components';
import { useAuthStore } from '../../shared/store/authStore';
import { useWalletStore } from '../../shared/store/walletStore';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const { wallet } = useWalletStore();

  const quickActions = [
    { icon: QrCode, label: 'Scanner', action: () => navigate('/scan'), color: 'bg-primary-600' },
    { icon: CreditCard, label: 'Payer', action: () => navigate('/pay'), color: 'bg-primary-500' },
    { icon: Send, label: 'Envoyer', action: () => navigate('/transfers'), color: 'bg-success-500' },
    { icon: Gift, label: 'Cagnottes', action: () => navigate('/transfers'), color: 'bg-warning-500' },
  ];

  const features = [
    { icon: Ticket, label: 'Mes tickets', route: '/tickets', count: 12 },
    { icon: Gift, label: 'Fidélité', route: '/loyalty', count: 5 },
    { icon: TrendingUp, label: 'Coupons', route: '/coupons', count: 8 },
  ];

  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div>
        <h2 className="text-2xl font-bold text-secondary-900">
          Bonjour {user?.firstName || 'Utilisateur'} !
        </h2>
        <p className="text-secondary-600">Que souhaitez-vous faire aujourd'hui ?</p>
      </div>

      {/* Wallet Balance Card */}
      <Card className="bg-gradient-primary text-white">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-primary-100 text-sm">Solde disponible</p>
              <p className="text-4xl font-bold mt-1">
                {wallet?.balance?.toFixed(2) || '0.00'} €
              </p>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <CreditCard size={32} />
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/wallet')}
              className="flex-1 bg-white/20 hover:bg-white/30 py-2 rounded-lg transition font-medium"
            >
              Recharger
            </button>
            <button
              onClick={() => navigate('/wallet')}
              className="flex-1 bg-white/20 hover:bg-white/30 py-2 rounded-lg transition font-medium"
            >
              Retirer
            </button>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">Actions rapides</h3>
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-secondary-100 transition"
            >
              <div className={`${action.color} p-3 rounded-full text-white`}>
                <action.icon size={24} />
              </div>
              <span className="text-xs font-medium text-secondary-700">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">Mes services</h3>
        <div className="space-y-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              hover
              onClick={() => navigate(feature.route)}
              className="cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-primary-50 p-3 rounded-lg">
                    <feature.icon size={24} className="text-primary-600" />
                  </div>
                  <span className="font-medium text-secondary-900">{feature.label}</span>
                </div>
                {feature.count > 0 && (
                  <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                    {feature.count}
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">Activité récente</h3>
        <Card>
          <div className="text-center py-8 text-secondary-400">
            <p>Aucune transaction récente</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
