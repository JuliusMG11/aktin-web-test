import { ref } from 'vue';
import type { Product } from '@/types/types';

export const useProducts = () => {
  const products = ref<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      products.value = await response.json();
    } catch (error) {
      console.error('Chyba pri načítaní produktov:', error);
    }
  };

  return { products, fetchProducts };
};