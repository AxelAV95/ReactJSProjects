import { useTodos } from '../hooks/useTodos'
import { useUiStore } from '../stores/uiStore'
import { TodoItem } from './TodoItem'
import type { Todo } from '../types/todo'

export const TodoList = () => {
  const { data: todos, isLoading, error, isRefetching } = useTodos()
  const { filters } = useUiStore()

  // Función para filtrar TODOs
  const filterTodos = (todos: Todo[]): Todo[] => {
    return todos.filter(todo => {
      // Filtro por completado
      if (!filters.showCompleted && todo.completed) {
        return false
      }

      // Filtro por prioridad
      if (filters.priorityFilter !== 'all' && todo.priority !== filters.priorityFilter) {
        return false
      }

      // Filtro por búsqueda
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase()
        return (
          todo.title.toLowerCase().includes(searchLower) ||
          todo.description.toLowerCase().includes(searchLower)
        )
      }

      return true
    })
  }

  if (isLoading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Cargando TODOs...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="card">
        <div className="card-body">
          <p style={{ color: 'red', textAlign: 'center' }}>
            Error al cargar TODOs: {error.message}
          </p>
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <button 
              className="btn btn-primary" 
              onClick={() => window.location.reload()}
            >
              Reintentar
            </button>
          </div>
        </div>
      </div>
    )
  }

  const filteredTodos = todos ? filterTodos(todos) : []

  return (
    <div className="card">
      <div className="card-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>Mis TODOs ({filteredTodos.length})</h2>
          {isRefetching && <span style={{ color: '#666' }}>Actualizando...</span>}
        </div>
      </div>
      <div className="card-body">
        {filteredTodos.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            {todos?.length === 0 
              ? '¡No tienes TODOs aún! Crea tu primero.' 
              : 'No se encontraron TODOs con los filtros actuales.'
            }
          </div>
        ) : (
          <div>
            {filteredTodos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}