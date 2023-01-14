import {useCallback, useEffect, useMemo, useState} from 'react';
import {getProducts, IProducts} from '../api';
import {getPoints, onFormatProducts} from '../utils';

export const useProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<IProducts[]>([]);
  const [points, setPoints] = useState('0');
  const [filter, setFilter] = useState<boolean | null>(null);

  const onGetProducts = useCallback(async () => {
    try {
      const response = await getProducts();
      setProducts(onFormatProducts(response?.data));
      setPoints(getPoints(response?.data));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }, []);

  const onFilterProducts = (isRedemption: boolean) => {
    setFilter(isRedemption);
  };

  const onResetFilter = () => {
    setFilter(null);
  };

  const filteredProducts = useMemo(() => {
    if (filter === null) {
      return products;
    } else {
      return products.filter(product => product.is_redemption === filter);
    }
  }, [filter, products]);

  useEffect(() => {
    onGetProducts();
  }, [onGetProducts]);

  return {
    isLoading,
    products: filteredProducts,
    points,
    filter,
    onFilterProducts,
    onResetFilter,
  };
};
