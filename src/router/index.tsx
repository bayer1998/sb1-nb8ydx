import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { AuthLayout } from '../layouts/AuthLayout';

// Lazy load pages for better performance
import { lazy } from 'react';

// Auth pages
const LoginPage = lazy(() => import('../features/auth/components/LoginPage'));
const RegisterPage = lazy(() => import('../features/auth/components/RegisterPage'));

// Main pages
const HomePage = lazy(() => import('../features/home/HomePage'));
const PaymentPage = lazy(() => import('../features/payment/components/PaymentPage'));
const ScanQRPage = lazy(() => import('../features/payment/components/ScanQRPage'));
const WalletPage = lazy(() => import('../features/wallet/components/WalletPage'));
const TransfersPage = lazy(() => import('../features/transfers/components/TransfersPage'));
const LoyaltyPage = lazy(() => import('../features/loyalty/components/LoyaltyPage'));
const CouponsPage = lazy(() => import('../features/coupons/components/CouponsPage'));
const TicketsPage = lazy(() => import('../features/tickets/components/TicketsPage'));
const ProfilePage = lazy(() => import('../features/profile/components/ProfilePage'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'pay',
        element: <PaymentPage />
      },
      {
        path: 'scan',
        element: <ScanQRPage />
      },
      {
        path: 'wallet',
        element: <WalletPage />
      },
      {
        path: 'transfers',
        element: <TransfersPage />
      },
      {
        path: 'loyalty',
        element: <LoyaltyPage />
      },
      {
        path: 'coupons',
        element: <CouponsPage />
      },
      {
        path: 'tickets',
        element: <TicketsPage />
      },
      {
        path: 'profile',
        element: <ProfilePage />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" replace />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      }
    ]
  }
]);
