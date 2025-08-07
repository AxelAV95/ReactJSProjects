import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { TodoFilters } from '../types/todo'

interface UiState {
  // Estado
  filters: TodoFilters
  isCreateModalOpen: boolean

  // Acciones
  setFilters: (filters: Partial<TodoFilters>) => void
  setSearchTerm: (term: string) => void
  toggleShowCompleted: () => void
  setPriorityFilter: (priority: TodoFilters['priorityFilter']) => void
  openCreateModal: () => void
  closeCreateModal: () => void
  resetFilters: () => void
}

const initialFilters: TodoFilters = {
  showCompleted: true,
  priorityFilter: 'all',
  searchTerm: '',
}

export const useUiStore = create<UiState>()(
  devtools(
    (set, get) => ({
      // Estado inicial
      filters: initialFilters,
      isCreateModalOpen: false,

      // Acciones
      setFilters: (newFilters) =>
        set(
          (state) => ({
            filters: { ...state.filters, ...newFilters },
          }),
          false,
          'setFilters'
        ),

      setSearchTerm: (term) =>
        set(
          (state) => ({
            filters: { ...state.filters, searchTerm: term },
          }),
          false,
          'setSearchTerm'
        ),

      toggleShowCompleted: () =>
        set(
          (state) => ({
            filters: {
              ...state.filters,
              showCompleted: !state.filters.showCompleted,
            },
          }),
          false,
          'toggleShowCompleted'
        ),

      setPriorityFilter: (priority) =>
        set(
          (state) => ({
            filters: { ...state.filters, priorityFilter: priority },
          }),
          false,
          'setPriorityFilter'
        ),

      openCreateModal: () => set({ isCreateModalOpen: true }, false, 'openCreateModal'),
      closeCreateModal: () => set({ isCreateModalOpen: false }, false, 'closeCreateModal'),

      resetFilters: () =>
        set(
          { filters: initialFilters },
          false,
          'resetFilters'
        ),
    }),
    {
      name: 'ui-store', // nombre para devtools
    }
  )
)