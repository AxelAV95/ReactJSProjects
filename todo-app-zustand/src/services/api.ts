import axios from 'axios'

// Configuración base de Axios
export const api = axios.create({
  baseURL: 'http://localhost:3002/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor para manejar errores globalmente
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error en API:', error)
    return Promise.reject(error)
  }
)