import { create } from 'zustand';
import { Wallet, Transaction } from '../types';

interface WalletState {
  wallet: Wallet | null;
  transactions: Transaction[];
  isLoading: boolean;

  // Actions
  setWallet: (wallet: Wallet) => void;
  updateBalance: (amount: number) => void;
  setTransactions: (transactions: Transaction[]) => void;
  addTransaction: (transaction: Transaction) => void;
  clearWallet: () => void;
}

export const useWalletStore = create<WalletState>((set) => ({
  wallet: null,
  transactions: [],
  isLoading: false,

  setWallet: (wallet) => set({ wallet }),

  updateBalance: (amount) => set((state) => ({
    wallet: state.wallet ? { ...state.wallet, balance: amount } : null
  })),

  setTransactions: (transactions) => set({ transactions }),

  addTransaction: (transaction) => set((state) => ({
    transactions: [transaction, ...state.transactions]
  })),

  clearWallet: () => set({
    wallet: null,
    transactions: []
  })
}));
