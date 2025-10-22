import React from 'react';
import { User, Settings, Bell, Shield, HelpCircle, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../../shared/components';
import { useAuthStore } from '../../../shared/store/authStore';

const ProfilePage: React.FC = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth/login');
  };

  const menuItems = [
    { icon: Settings, label: 'Paramètres', action: () => {} },
    { icon: Bell, label: 'Notifications', action: () => {} },
    { icon: Shield, label: 'Sécurité & KYC', action: () => {} },
    { icon: HelpCircle, label: 'Aide & Support', action: () => {} },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-secondary-900">Mon Profil</h2>
        <p className="text-secondary-600">Gérez votre compte</p>
      </div>

      {/* User Info Card */}
      <Card className="bg-gradient-primary text-white">
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-4 rounded-full">
            <User size={32} />
          </div>
          <div>
            <p className="text-xl font-bold">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-primary-100">{user?.email}</p>
            <div className="mt-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                user?.kycStatus === 'verified'
                  ? 'bg-success-500 text-white'
                  : 'bg-warning-500 text-white'
              }`}>
                {user?.kycStatus === 'verified' ? 'Vérifié' : 'En attente de vérification'}
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Menu Items */}
      <div className="space-y-3">
        {menuItems.map((item, index) => (
          <Card key={index} hover onClick={item.action}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <item.icon size={20} className="text-secondary-600" />
                <span className="font-medium text-secondary-900">{item.label}</span>
              </div>
              <span className="text-secondary-400">›</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Logout Button */}
      <Card
        hover
        onClick={handleLogout}
        className="border-2 border-error-200 cursor-pointer"
      >
        <div className="flex items-center gap-3 text-error-600">
          <LogOut size={20} />
          <span className="font-medium">Déconnexion</span>
        </div>
      </Card>

      {/* App Info */}
      <div className="text-center text-sm text-secondary-500 pt-4">
        <p>BEDOUX - LyfPay v1.0.0</p>
        <p className="mt-1">Sécurisé et conforme PCI DSS</p>
      </div>
    </div>
  );
};

export default ProfilePage;
