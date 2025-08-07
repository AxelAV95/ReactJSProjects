export interface Todo {
  id: string
  title: string
  description: string
  completed: boolean
  priority: 'low' | 'medium' | 'high'
  createdAt: string
  updatedAt: string
}

export interface CreateTodoDto {
  title: string
  description: string
  priority?: 'low' | 'medium' | 'high'
}

export interface UpdateTodoDto {
  title?: string
  description?: string
  completed?: boolean
  priority?: 'low' | 'medium' | 'high'
}

// Estados de la UI
export interface TodoFilters {
  showCompleted: boolean
  priorityFilter: 'all' | 'low' | 'medium' | 'high'
  searchTerm: string
}