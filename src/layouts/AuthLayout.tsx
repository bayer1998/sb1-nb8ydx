import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">LyfPay</h1>
          <p className="text-primary-100">Votre super-app de paiement</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <Suspense fallback={
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600" />
            </div>
          }>
            <Outlet />
          </Suspense>
        </div>

        <p className="text-center text-primary-100 text-sm mt-6">
          BEDOUX - Sécurisé et conforme PCI DSS
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
export { AuthLayout };
