//Utilizar el createSlice para quedar la porción del estado
import { createSlice } from "@reduxjs/toolkit";

//Genera un estado inicial de lo que se necesita para esta feature
const initialState = {
    user: null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token')
}

///Crear el slice con ayuda del hook
const authSlice = createSlice({
    name: 'auth', //nombre
    initialState, //estado inicial
    reducers:{ //las acciones principales
        setCredentials: (state, action) =>{
            const { user, token} = action.payload;
            state.user = user;
            state.token = token,
            state.isAuthenticated = true;
            localStorage.setItem('token', token);
        },
        logout: (state) =>{
            state.user = null,
            state.token = null,
            state.isAuthenticated = false,
            localStorage.removeItem('token')
        }
    }
})

export const {setCredentials,logout} = authSlice.actions; //se exportan las acciones importantes del slice
export default authSlice.reducer //se exporta el reducer