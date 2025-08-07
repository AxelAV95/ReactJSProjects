import { Trash2, Edit3 } from 'lucide-react'
import type { Todo } from '../types/todo'
import { useTodoActions } from '../hooks/useTodos'

interface TodoItemProps {
  todo: Todo
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { updateTodo, deleteTodo } = useTodoActions()

  const handleToggleComplete = () => {
    updateTodo.mutate({
      id: todo.id,
      data: { completed: !todo.completed }
    })
  }

  const handleDelete = () => {
    if (window.confirm('¿Estás seguro de eliminar este TODO?')) {
      deleteTodo.mutate(todo.id)
    }
  }

  const getPriorityClass = (priority: string) => {
    return `priority-${priority}`
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        className="checkbox"
        checked={todo.completed}
        onChange={handleToggleComplete}
        disabled={updateTodo.isPending}
      />
      
      <div className="todo-content">
        <h3 className={`todo-title ${todo.completed ? 'line-through' : ''}`}>
          {todo.title}
        </h3>
        <p className="todo-description">{todo.description}</p>
        <div className="todo-meta">
          <span className={getPriorityClass(todo.priority)}>
            Prioridad: {todo.priority.toUpperCase()}
          </span>
          <span>Creado: {formatDate(todo.createdAt)}</span>
          {todo.updatedAt !== todo.createdAt && (
            <span>Actualizado: {formatDate(todo.updatedAt)}</span>
          )}
        </div>
      </div>

      <div className="todo-actions">
        <button
          className="btn btn-danger"
          onClick={handleDelete}
          disabled={deleteTodo.isPending}
          title="Eliminar"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  )
}