import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { todoService } from '../services/todoService'
import type { CreateTodoDto, UpdateTodoDto, Todo } from '../types/todo'

// Query Keys - centralizamos las keys para mejor mantenimiento
export const todoKeys = {
  all: ['todos'] as const,
  lists: () => [...todoKeys.all, 'list'] as const,
  list: (filters: string) => [...todoKeys.lists(), { filters }] as const,
  details: () => [...todoKeys.all, 'detail'] as const,
  detail: (id: string) => [...todoKeys.details(), id] as const,
}

// Hook para obtener todos los TODOs
export const useTodos = () => {
  return useQuery({
    queryKey: todoKeys.lists(),
    queryFn: todoService.getTodos,
    staleTime: 30 * 1000, // 30 segundos
     refetchInterval: 30 * 1000, 
  })
}

// Hook para obtener un TODO específico
export const useTodo = (id: string) => {
  return useQuery({
    queryKey: todoKeys.detail(id),
    queryFn: () => todoService.getTodoById(id),
    enabled: !!id, // Solo ejecuta si hay ID
  })
}

// Hook para crear TODOs
export const useCreateTodo = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (todoData: CreateTodoDto) => todoService.createTodo(todoData),
    onSuccess: () => {
      // Invalida y refetch la lista de todos
      queryClient.invalidateQueries({ queryKey: todoKeys.lists() })
    },
    onError: (error) => {
      console.error('Error creando TODO:', error)
      // Aquí podrías mostrar un toast de error
    },
  })
}

// Hook para actualizar TODOs
export const useUpdateTodo = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateTodoDto }) =>
      todoService.updateTodo(id, data),
    onSuccess: (updatedTodo) => {
      // Actualiza el cache con los nuevos datos
      queryClient.setQueryData<Todo[]>(todoKeys.lists(), (old) => {
        if (!old) return []
        return old.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        )
      })
      
      // También actualiza el detalle individual
      queryClient.setQueryData(
        todoKeys.detail(updatedTodo.id),
        updatedTodo
      )
    },
  })
}

// Hook para eliminar TODOs (versión mejorada)
export const useDeleteTodo = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => todoService.deleteTodo(id),
    
    // ✅ Optimistic update - remover inmediatamente de la UI
    onMutate: async (deletedId) => {
      // Cancelar queries en vuelo
      await queryClient.cancelQueries({ queryKey: todoKeys.lists() })
      
      // Snapshot del estado anterior
      const previousTodos = queryClient.getQueryData<Todo[]>(todoKeys.lists())
      
      // Remover optimísticamente
      queryClient.setQueryData<Todo[]>(todoKeys.lists(), (old) => {
        if (!old) return []
        return old.filter((todo) => todo.id !== deletedId)
      })
      
      return { previousTodos }
    },
    
    // ✅ Si falla, restaurar estado anterior
    onError: (err, deletedId, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(todoKeys.lists(), context.previousTodos)
      }
      console.error('Error eliminando TODO:', err)
      // Aquí podrías mostrar un toast de error
      alert('Error al eliminar el TODO. Inténtalo de nuevo.')
    },
    
    // ✅ Opcional: refetch para estar 100% sincronizado
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: todoKeys.lists() })
    },
    
    onSuccess: () => {
      // Opcional: mostrar notificación de éxito
      console.log('TODO eliminado correctamente')
    },
  })
}

// Hook personalizado que combina todo
export const useTodoActions = () => {
  const createTodo = useCreateTodo()
  const updateTodo = useUpdateTodo()
  const deleteTodo = useDeleteTodo()

  return {
    createTodo,
    updateTodo,
    deleteTodo,
    isLoading: createTodo.isPending || updateTodo.isPending || deleteTodo.isPending,
  }
}