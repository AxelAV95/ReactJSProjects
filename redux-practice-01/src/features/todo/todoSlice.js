import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    editTodo: (state, action) => {
     
      // Encuentra el índice del elemento en el array `todos` que coincida con el ID proporcionado en action.payload.id
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );

      // Verifica si se encontró el elemento en el array
      if (index !== -1) {
        // Crea una copia del elemento actual para mantener la inmutabilidad del estado
        const updatedTodo = { ...state.todos[index] };

        // Actualiza la propiedad `text` del elemento copiado
        updatedTodo.text = action.payload.text;

        // Actualiza el array `todos` con el elemento modificado
        state.todos[index] = updatedTodo;
      }
    },
    getTodos: (state, action) =>{
        return state.todos
    }
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
