import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../slices/productsSlice';
import LoadingSpinner from '../../shared/components/LoadingSpinner';

const Products = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

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

export default Products;