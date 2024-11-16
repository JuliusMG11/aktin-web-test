
import { ref, type Ref, computed } from 'vue';
import type { Product } from '../types/types';

export const useCategories = (products: Ref<Product[]>) => {
  const categories = ref<{ name: string; count: number }[]>([]);
  const selectedCategories = ref<string[]>([]);
  const updateCategories = () => {
    const categoryCount = products.value.reduce((acc: Record<string, number>, product: Product) => {
      acc[product.category] = (acc[product.category] || 0) + 1;
      return acc;
    }, {});

    categories.value = Object.entries(categoryCount)
      .map(([name, count]) => ({ name, count: Number(count) }))
      .sort((a, b) => b.count - a.count);
  };

  const filteredProducts = computed(() => {
    if (selectedCategories.value.length === 0) return products.value;
    return products.value.filter((product: Product) => selectedCategories.value.includes(product.category));
  });

  return { categories, selectedCategories, updateCategories, filteredProducts };
};