import { apiClient } from '../../../shared/services/api';
import { Payment, QRPaymentData, ApiResponse } from '../../../shared/types';

export interface InitiatePaymentData {
  amount: number;
  merchantId: string;
  paymentMethod: 'qr' | 'nfc' | 'card';
  description?: string;
}

export interface PayByLinkData {
  amount: number;
  description?: string;
  expiresIn?: number; // minutes
}

export interface ConfirmPaymentData {
  paymentId: string;
  pin?: string;
  biometricToken?: string;
}

export const paymentService = {
  // Generate QR code for payment
  generateQRCode: async (amount: number): Promise<{ qrData: string; paymentId: string }> => {
    return apiClient.post('/payments/qr/generate', { amount });
  },

  // Scan and decode QR payment
  decodeQRPayment: async (qrData: string): Promise<QRPaymentData> => {
    return apiClient.post('/payments/qr/decode', { qrData });
  },

  // Initiate a payment
  initiatePayment: async (data: InitiatePaymentData): Promise<Payment> => {
    return apiClient.post<Payment>('/payments/initiate', data);
  },

  // Confirm payment with PIN or biometric
  confirmPayment: async (data: ConfirmPaymentData): Promise<Payment> => {
    return apiClient.post<Payment>('/payments/confirm', data);
  },

  // Cancel a payment
  cancelPayment: async (paymentId: string): Promise<ApiResponse<void>> => {
    return apiClient.post(`/payments/${paymentId}/cancel`);
  },

  // Get payment details
  getPayment: async (paymentId: string): Promise<Payment> => {
    return apiClient.get<Payment>(`/payments/${paymentId}`);
  },

  // Get payment history
  getPaymentHistory: async (page = 1, limit = 20): Promise<{ payments: Payment[]; total: number }> => {
    return apiClient.get('/payments/history', { params: { page, limit } });
  },

  // Create Pay by Link
  createPayByLink: async (data: PayByLinkData): Promise<{ link: string; paymentId: string }> => {
    return apiClient.post('/payments/link/create', data);
  },

  // Get Pay by Link details
  getPayByLinkDetails: async (linkId: string): Promise<Payment> => {
    return apiClient.get(`/payments/link/${linkId}`);
  },

  // Process NFC payment
  processNFCPayment: async (nfcData: string, amount: number): Promise<Payment> => {
    return apiClient.post('/payments/nfc/process', { nfcData, amount });
  },

  // Request refund
  requestRefund: async (paymentId: string, reason?: string): Promise<ApiResponse<void>> => {
    return apiClient.post(`/payments/${paymentId}/refund`, { reason });
  },

  // Get payment receipt
  getReceipt: async (paymentId: string): Promise<{ receiptUrl: string }> => {
    return apiClient.get(`/payments/${paymentId}/receipt`);
  }
};
