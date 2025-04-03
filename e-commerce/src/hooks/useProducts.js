import { useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  selectAllProducts, 
  selectProductsStatus, 
  selectProductsError,
  fetchProducts 
} from '../redux/slices/productsSlice';

export const useProducts = (options = {}) => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  // Fetch products only once when the component mounts or when status changes to idle
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  // Memoize expensive operations to avoid recalculation on every render
  const getRandomProducts = useCallback((count = 8) => {
    if (!products.length) return [];
    // Using a more efficient approach for large arrays
    const indices = new Set();
    const result = [];
    const max = Math.min(count, products.length);
    
    // Only generate as many random products as requested or available
    while (indices.size < max) {
      const randomIndex = Math.floor(Math.random() * products.length);
      if (!indices.has(randomIndex)) {
        indices.add(randomIndex);
        result.push(products[randomIndex]);
      }
    }
    
    return result;
  }, [products]);

  // Memoize category filtering
  const getProductsByCategory = useCallback((category) => {
    return products.filter(item => item.category === category);
  }, [products]);

  // Create derived state values with useMemo to prevent recalculation
  const isEmpty = useMemo(() => !products.length, [products]);
  const isLoading = useMemo(() => status === 'loading', [status]);
  const isError = useMemo(() => status === 'failed', [status]);

  return {
    products,
    status,
    error,
    isLoading,
    isError,
    isEmpty,
    getRandomProducts,
    getProductsByCategory
  };
}; 