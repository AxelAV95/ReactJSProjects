import { Plus } from 'lucide-react'
import { TodoFilters } from './components/TodoFilters'
import { TodoList } from './components/TodoList'
import { CreateTodoModal } from './components/CreateTodoModal'
import { useUiStore } from './stores/uiStore'

function App() {
  const { openCreateModal } = useUiStore()

  return (
    <div className="container">
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#333', marginBottom: '10px' }}>
          📝 Mi App de TODOs
        </h1>
        <p style={{ color: '#666', marginBottom: '20px' }}>
          Gestiona tus tareas con Zustand + React Query
        </p>
        <button 
          className="btn btn-primary"
          onClick={openCreateModal}
        >
          <Plus size={20} />
          Nuevo TODO
        </button>
      </header>

      <main>
        <TodoFilters />
        <TodoList />
      </main>

      <CreateTodoModal />
    </div>
  )
}

export default App