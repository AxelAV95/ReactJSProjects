import api from '../../../shared/api/api';
import { LoginCredentials, RegisterCredentials, User } from '../types';

export const login = async (credentials: LoginCredentials): Promise<{ user: User; token: string }> => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const register = async (userData: RegisterCredentials): Promise<{ user: User; token: string }> => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};