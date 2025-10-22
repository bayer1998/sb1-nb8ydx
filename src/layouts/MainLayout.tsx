import React, { Suspense } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { Home, CreditCard, Wallet, Gift, Ticket, User, QrCode } from 'lucide-react';
import { useAuthStore } from '../shared/store/authStore';

const MainLayout: React.FC = () => {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth/login');
    }
  }, [isAuthenticated, navigate]);

  const navItems = [
    { path: '/', icon: Home, label: 'Accueil' },
    { path: '/pay', icon: CreditCard, label: 'Payer' },
    { path: '/scan', icon: QrCode, label: 'Scanner' },
    { path: '/wallet', icon: Wallet, label: 'Wallet' },
    { path: '/profile', icon: User, label: 'Profil' },
  ];

  return (
    <div className="min-h-screen bg-secondary-50 pb-20">
      {/* Header */}
      <header className="bg-gradient-primary text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">LyfPay</h1>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-white/10 rounded-lg transition">
                <Gift size={24} />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition">
                <Ticket size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Suspense fallback={
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600" />
          </div>
        }>
          <Outlet />
        </Suspense>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-secondary-200 z-50">
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex items-center justify-around">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-1 py-3 px-4 transition-colors ${
                    isActive
                      ? 'text-primary-600'
                      : 'text-secondary-400 hover:text-secondary-600'
                  }`
                }
              >
                <item.icon size={24} />
                <span className="text-xs font-medium">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainLayout;
export { MainLayout };
