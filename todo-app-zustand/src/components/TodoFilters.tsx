import { useUiStore } from '../stores/uiStore'

export const TodoFilters = () => {
  const { filters, setSearchTerm, toggleShowCompleted, setPriorityFilter, resetFilters } = useUiStore()

  return (
    <div className="card">
      <div className="card-body">
        <h3 style={{ marginBottom: '15px' }}>Filtros</h3>
        <div className="filters">
          {/* Búsqueda */}
          <div className="form-group" style={{ margin: 0 }}>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar TODOs..."
              value={filters.searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filtro de prioridad */}
          <div className="form-group" style={{ margin: 0 }}>
            <select
              className="form-control form-select"
              value={filters.priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value as any)}
            >
              <option value="all">Todas las prioridades</option>
              <option value="high">Alta</option>
              <option value="medium">Media</option>
              <option value="low">Baja</option>
            </select>
          </div>

          {/* Mostrar completados */}
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={filters.showCompleted}
              onChange={toggleShowCompleted}
            />
            Mostrar completados
          </label>

          {/* Resetear filtros */}
          <button
            className="btn btn-secondary"
            onClick={resetFilters}
          >
            Limpiar filtros
          </button>
        </div>
      </div>
    </div>
  )
}