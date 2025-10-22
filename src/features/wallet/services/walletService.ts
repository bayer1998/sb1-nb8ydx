import { apiClient } from '../../../shared/services/api';
import { Wallet, Transaction, ApiResponse } from '../../../shared/types';

export interface AddFundsData {
  amount: number;
  paymentMethod: 'card' | 'bank_transfer' | 'sepa';
  cardId?: string;
}

export interface WithdrawFundsData {
  amount: number;
  bankAccountId: string;
}

export const walletService = {
  // Get wallet balance and details
  getWallet: async (): Promise<Wallet> => {
    return apiClient.get<Wallet>('/wallet');
  },

  // Get transaction history
  getTransactions: async (page = 1, limit = 20): Promise<{ transactions: Transaction[]; total: number }> => {
    return apiClient.get('/wallet/transactions', { params: { page, limit } });
  },

  // Get transaction by ID
  getTransaction: async (transactionId: string): Promise<Transaction> => {
    return apiClient.get<Transaction>(`/wallet/transactions/${transactionId}`);
  },

  // Add funds to wallet
  addFunds: async (data: AddFundsData): Promise<{ transaction: Transaction }> => {
    return apiClient.post('/wallet/add-funds', data);
  },

  // Withdraw funds from wallet
  withdrawFunds: async (data: WithdrawFundsData): Promise<{ transaction: Transaction }> => {
    return apiClient.post('/wallet/withdraw', data);
  },

  // Get wallet statistics
  getStatistics: async (period: 'week' | 'month' | 'year' = 'month'): Promise<{
    totalSpent: number;
    totalReceived: number;
    transactionCount: number;
    topCategories: Array<{ category: string; amount: number }>;
  }> => {
    return apiClient.get('/wallet/statistics', { params: { period } });
  },

  // Export transactions
  exportTransactions: async (format: 'csv' | 'pdf', startDate?: Date, endDate?: Date): Promise<Blob> => {
    return apiClient.get('/wallet/export', {
      params: { format, startDate, endDate },
      responseType: 'blob'
    });
  },

  // Get payment methods (cards, bank accounts)
  getPaymentMethods: async (): Promise<{
    cards: Array<{ id: string; last4: string; brand: string; expiryMonth: number; expiryYear: number }>;
    bankAccounts: Array<{ id: string; iban: string; bankName: string }>;
  }> => {
    return apiClient.get('/wallet/payment-methods');
  },

  // Add payment method
  addPaymentMethod: async (type: 'card' | 'bank', data: any): Promise<ApiResponse<{ id: string }>> => {
    return apiClient.post('/wallet/payment-methods', { type, ...data });
  },

  // Remove payment method
  removePaymentMethod: async (methodId: string): Promise<ApiResponse<void>> => {
    return apiClient.delete(`/wallet/payment-methods/${methodId}`);
  },

  // Set default payment method
  setDefaultPaymentMethod: async (methodId: string): Promise<ApiResponse<void>> => {
    return apiClient.patch(`/wallet/payment-methods/${methodId}/set-default`);
  }
};
