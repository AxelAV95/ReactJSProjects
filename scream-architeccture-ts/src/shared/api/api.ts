import axios from 'axios';

const API_URL = 'https://api.ejemplo.com'; // URL de la API

const api = axios.create({
  baseURL: API_URL,
});

// Interceptor para agregar el token a las solicitudes
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;