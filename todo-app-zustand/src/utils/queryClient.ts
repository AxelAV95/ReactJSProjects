import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Los datos se consideran "frescos" por 5 minutos
      staleTime: 5 * 60 * 1000,
      // Reintenta 3 veces si falla
      retry: 3,
      // No refetch automático al hacer focus en la ventana
      refetchOnWindowFocus: false,
    },
  },
})