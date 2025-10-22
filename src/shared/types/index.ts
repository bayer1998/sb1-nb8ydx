// Core User Types
export interface User {
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  kycStatus: 'pending' | 'verified' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

// Wallet Types
export interface Wallet {
  id: string;
  userId: string;
  balance: number;
  currency: 'EUR';
  status: 'active' | 'suspended' | 'blocked';
}

// Payment Types
export interface Payment {
  id: string;
  type: 'qr' | 'nfc' | 'link' | 'p2p';
  amount: number;
  currency: 'EUR';
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'refunded';
  merchantId?: string;
  merchantName?: string;
  description?: string;
  createdAt: Date;
  completedAt?: Date;
}

export interface QRPaymentData {
  merchantId: string;
  amount: number;
  currency: 'EUR';
  reference: string;
  timestamp: number;
  signature: string;
}

// Transfer Types
export interface Transfer {
  id: string;
  fromUserId: string;
  toUserId: string;
  amount: number;
  currency: 'EUR';
  status: 'pending' | 'completed' | 'failed';
  message?: string;
  createdAt: Date;
}

export interface Cagnotte {
  id: string;
  name: string;
  description?: string;
  targetAmount?: number;
  currentAmount: number;
  currency: 'EUR';
  ownerId: string;
  participants: string[];
  status: 'active' | 'completed' | 'cancelled';
  createdAt: Date;
  expiresAt?: Date;
}

// Loyalty Types
export interface LoyaltyCard {
  id: string;
  merchantId: string;
  merchantName: string;
  merchantLogo?: string;
  points: number;
  tier?: string;
  createdAt: Date;
}

export interface LoyaltyReward {
  id: string;
  merchantId: string;
  name: string;
  description: string;
  pointsCost: number;
  imageUrl?: string;
  validUntil?: Date;
}

// Coupon Types
export interface Coupon {
  id: string;
  merchantId: string;
  merchantName: string;
  title: string;
  description: string;
  discountType: 'percentage' | 'fixed' | 'freebie';
  discountValue: number;
  code?: string;
  qrCode?: string;
  validFrom: Date;
  validUntil: Date;
  used: boolean;
  usedAt?: Date;
}

// Ticket Types
export interface Ticket {
  id: string;
  merchantId: string;
  merchantName: string;
  items: TicketItem[];
  total: number;
  currency: 'EUR';
  paymentMethod: string;
  createdAt: Date;
  qrCode?: string;
}

export interface TicketItem {
  name: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

// Merchant Types
export interface Merchant {
  id: string;
  name: string;
  businessName: string;
  logo?: string;
  category: string;
  address?: Address;
  phone?: string;
  email?: string;
  softPosEnabled: boolean;
  loyaltyEnabled: boolean;
}

export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

// Transaction History
export interface Transaction {
  id: string;
  type: 'payment' | 'transfer' | 'refund' | 'cashback';
  amount: number;
  currency: 'EUR';
  direction: 'in' | 'out';
  status: 'completed' | 'pending' | 'failed';
  description: string;
  merchantName?: string;
  createdAt: Date;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
