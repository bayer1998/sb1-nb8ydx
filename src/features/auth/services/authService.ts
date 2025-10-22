import { apiClient } from '../../../shared/services/api';
import { User, ApiResponse } from '../../../shared/types';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface BiometricAuthData {
  userId: string;
  biometricToken: string;
}

export const authService = {
  // Login with email/password
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    return apiClient.post<LoginResponse>('/auth/login', credentials);
  },

  // Register new user
  register: async (data: RegisterData): Promise<LoginResponse> => {
    return apiClient.post<LoginResponse>('/auth/register', data);
  },

  // Logout
  logout: async (): Promise<void> => {
    return apiClient.post('/auth/logout');
  },

  // Get current user
  getCurrentUser: async (): Promise<User> => {
    return apiClient.get<User>('/auth/me');
  },

  // Refresh token
  refreshToken: async (): Promise<{ token: string }> => {
    return apiClient.post<{ token: string }>('/auth/refresh');
  },

  // Request password reset
  requestPasswordReset: async (email: string): Promise<ApiResponse<void>> => {
    return apiClient.post('/auth/password-reset/request', { email });
  },

  // Reset password
  resetPassword: async (token: string, newPassword: string): Promise<ApiResponse<void>> => {
    return apiClient.post('/auth/password-reset/confirm', { token, password: newPassword });
  },

  // Enable biometric authentication
  enableBiometric: async (biometricData: BiometricAuthData): Promise<ApiResponse<void>> => {
    return apiClient.post('/auth/biometric/enable', biometricData);
  },

  // Authenticate with biometric
  biometricAuth: async (biometricToken: string): Promise<LoginResponse> => {
    return apiClient.post<LoginResponse>('/auth/biometric/verify', { biometricToken });
  },

  // Request phone verification
  requestPhoneVerification: async (phone: string): Promise<ApiResponse<void>> => {
    return apiClient.post('/auth/phone/verify/request', { phone });
  },

  // Verify phone with code
  verifyPhone: async (phone: string, code: string): Promise<ApiResponse<void>> => {
    return apiClient.post('/auth/phone/verify/confirm', { phone, code });
  },

  // KYC - Submit documents
  submitKYC: async (formData: FormData): Promise<ApiResponse<void>> => {
    return apiClient.post('/auth/kyc/submit', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },

  // Get KYC status
  getKYCStatus: async (): Promise<{ status: string; message?: string }> => {
    return apiClient.get('/auth/kyc/status');
  }
};
