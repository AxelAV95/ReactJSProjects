Estructura del proyecto
 ```bash
src/
|-- features/
|   |-- auth/
|   |   |-- api/              # Lógica de la API para autenticación
|   |   |-- components/       # Componentes específicos de autenticación
|   |   |-- hooks/            # Hooks específicos de autenticación
|   |   |-- slices/           # Slices de Redux para autenticación
|   |   |-- pages/            # Páginas relacionadas con autenticación
|   |   |-- index.js          # Exportaciones públicas de la feature
|   |-- products/
|   |   |-- api/              # Lógica de la API para productos
|   |   |-- components/       # Componentes específicos de productos
|   |   |-- hooks/            # Hooks específicos de productos
|   |   |-- slices/           # Slices de Redux para productos
|   |   |-- pages/            # Páginas relacionadas con productos
|   |   |-- index.js          # Exportaciones públicas de la feature
|-- shared/
|   |-- api/                  # Configuración base de Axios
|   |-- components/           # Componentes reutilizables (ej: Header, Footer)
|   |-- hooks/                # Hooks reutilizables
|   |-- utils/                # Funciones utilitarias
|-- App.js                    # Componente principal
|-- store.js                  # Configuración de Redux
|-- index.js                  # Punto de entrada
```
