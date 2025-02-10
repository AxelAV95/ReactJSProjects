import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './features/auth';
import { productsReducer } from './features/products';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;