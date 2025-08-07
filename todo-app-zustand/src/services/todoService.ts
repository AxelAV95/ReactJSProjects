import { api } from './api'
import type { Todo, CreateTodoDto, UpdateTodoDto } from '../types/todo'

export const todoService = {
  // Obtener todos los TODOs
  getTodos: async (): Promise<Todo[]> => {
    const response = await api.get<Todo[]>('/todos')
    return response.data
  },

  // Obtener un TODO por ID
  getTodoById: async (id: string): Promise<Todo> => {
    const response = await api.get<Todo>(`/todos/${id}`)
    return response.data
  },

  // Crear nuevo TODO
  createTodo: async (todoData: CreateTodoDto): Promise<Todo> => {
    const response = await api.post<Todo>('/todos', todoData)
    return response.data
  },

  // Actualizar TODO
  updateTodo: async (id: string, todoData: UpdateTodoDto): Promise<Todo> => {
    const response = await api.put<Todo>(`/todos/${id}`, todoData)
    return response.data
  },

  // Eliminar TODO
  deleteTodo: async (id: string): Promise<void> => {
    await api.delete(`/todos/${id}`)
  },
}