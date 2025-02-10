import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchProducts } from '../slices/productsSlice';
import { RootState } from '../../../store';
import LoadingSpinner from '../../../shared/components/LoadingSpinner';
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch';

export const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') return <LoadingSpinner />;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {items.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

//export default Products;