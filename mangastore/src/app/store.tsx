import { configureStore } from "@reduxjs/toolkit";
import { mangasApi } from "../features/mangaApi";
import shopReducer from "../features/shopSlice";
export const store = configureStore({
    reducer:{
        [mangasApi.reducerPath]:mangasApi.reducer,
        shop: shopReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mangasApi.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState= ReturnType<typeof store.getState>