import { useState } from 'react'
import { X } from 'lucide-react'
import { useUiStore } from '../stores/uiStore'
import { useTodoActions } from '../hooks/useTodos'
import type { CreateTodoDto } from '../types/todo'

export const CreateTodoModal = () => {
  const { isCreateModalOpen, closeCreateModal } = useUiStore()
  const { createTodo } = useTodoActions()
  
  const [formData, setFormData] = useState<CreateTodoDto>({
    title: '',
    description: '',
    priority: 'medium'
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {}
    
    if (!formData.title.trim()) {
      newErrors.title = 'El título es requerido'
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es requerida'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    createTodo.mutate(formData, {
      onSuccess: () => {
        // Resetear formulario
        setFormData({ title: '', description: '', priority: 'medium' })
        setErrors({})
        closeCreateModal()
      }
    })
  }

  const handleChange = (field: keyof CreateTodoDto) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
    // Limpiar error al empezar a escribir
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleClose = () => {
    if (!createTodo.isPending) {
      setFormData({ title: '', description: '', priority: 'medium' })
      setErrors({})
      closeCreateModal()
    }
  }

  if (!isCreateModalOpen) return null

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Crear nuevo TODO</h2>
          <button 
            onClick={handleClose}
            disabled={createTodo.isPending}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              padding: '5px'
            }}
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Título *</label>
            <input
              type="text"
              className={`form-control ${errors.title ? 'error' : ''}`}
              value={formData.title}
              onChange={handleChange('title')}
              disabled={createTodo.isPending}
              placeholder="¿Qué necesitas hacer?"
            />
            {errors.title && <span style={{ color: 'red', fontSize: '12px' }}>{errors.title}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Descripción *</label>
            <textarea
              className={`form-control ${errors.description ? 'error' : ''}`}
              value={formData.description}
              onChange={handleChange('description')}
              disabled={createTodo.isPending}
              placeholder="Describe los detalles..."
              rows={3}
              style={{ resize: 'vertical', minHeight: '80px' }}
            />
            {errors.description && <span style={{ color: 'red', fontSize: '12px' }}>{errors.description}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Prioridad</label>
            <select
              className="form-control form-select"
              value={formData.priority}
              onChange={handleChange('priority')}
              disabled={createTodo.isPending}
            >
              <option value="low">Baja</option>
              <option value="medium">Media</option>
              <option value="high">Alta</option>
            </select>
          </div>

          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
              disabled={createTodo.isPending}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={createTodo.isPending}
            >
              {createTodo.isPending ? 'Creando...' : 'Crear TODO'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}