import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../api/productsApi';
import { Product, ProductsState } from '../types';

const initialState: ProductsState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await getProducts();
  return response;
});

export const addProduct = createAsyncThunk('products/addProduct', async (productData: Omit<Product, 'id'>) => {
  const response = await createProduct(productData);
  return response;
});

export const editProduct = createAsyncThunk('products/editProduct', async ({ id, productData }: { id: string; productData: Omit<Product, 'id'> }) => {
  const response = await updateProduct(id, productData);
  return response;
});

export const removeProduct = createAsyncThunk('products/removeProduct', async (id: string) => {
  await deleteProduct(id);
  return id;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state: ProductsState) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state: ProductsState, action: PayloadAction<Product[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state: ProductsState, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Error al cargar los productos';
      })
      .addCase(addProduct.fulfilled, (state: ProductsState, action: PayloadAction<Product>) => {
        state.items.push(action.payload);
      })
      .addCase(editProduct.fulfilled, (state: ProductsState, action: PayloadAction<Product>) => {
        const index = state.items.findIndex((product) => product.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(removeProduct.fulfilled, (state: ProductsState, action: PayloadAction<string>) => {
        state.items = state.items.filter((product) => product.id !== action.payload);
      });
  },
});

export default productsSlice.reducer;