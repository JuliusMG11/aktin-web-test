<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useProducts } from '../composables/useProducts';
import { useCategories } from '../composables/useCategories';
import { useURL } from '../composables/useUrl';

import ProductBox from './products/ProductBox.vue';
import CategoryFilter from './category/CategoryFilter.vue';
import CategoryBox from './category/CategoryBox.vue';
import DeleteFiltersButton from './UI/DeleteFiltersBtn.vue';


const { products, fetchProducts } = useProducts(); 
const { categories, selectedCategories, updateCategories, filteredProducts } = useCategories(products); 
const { updateURL, loadCategoriesFromURL } = useURL(selectedCategories); 

const toggleCategory = (category: string) => {
  if (selectedCategories.value.includes(category)) {
    selectedCategories.value = selectedCategories.value.filter(c => c !== category);
  } else {
    selectedCategories.value.push(category);
  }
  updateURL();
};

const resetCategory = (category: string) => {
  selectedCategories.value = selectedCategories.value.filter(c => c !== category);
  const checkbox = document.getElementById(category) as HTMLInputElement;
  if (checkbox) {
    checkbox.checked = false;
  }
};

const clearFilters = () => {
  selectedCategories.value = [];
  updateURL();
  const checkboxes = document.querySelectorAll('.filter-checkbox');
  checkboxes.forEach(checkbox => {
    (checkbox as HTMLInputElement).checked = false;
  });
};

watch(selectedCategories, () => {
  updateURL();
});

onMounted(async () => {
  await fetchProducts();
  loadCategoriesFromURL();
  updateCategories();
});
</script>

<template>
  <div class="container mx-auto">
    <div class="flex-section">
      <div class="filter-section">
        <DeleteFiltersButton 
          :selectedCategories="selectedCategories" 
          :clearFilters="clearFilters" 
        />
        <CategoryFilter 
          :categories="categories" 
          :selectedCategories="selectedCategories"
          @toggleCategory="toggleCategory"
        />
      </div>
      <div class="product-section">
          <div class="result-filter">
            <CategoryBox 
               :categories="selectedCategories"
               @resetCategory="resetCategory" 
             />
          </div>
          <div class="product-count">
            Pocet produktov: <span> {{ filteredProducts.length }}</span>
          </div>
          <div class="product-section-grid">
             <ProductBox 
              v-for="product in filteredProducts" 
              :key="product.id" 
              :data="product" 
            />
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1280px;
  padding-left:  16px;
  padding-right: 16px;
}

.container.mx-auto {
   margin-left: auto;
  margin-right: auto;
}

.flex-section {
  padding-top :64px;
  padding-bottom: 64px;
  display: flex;
  gap: 24px;
}

.filter-section {
  width: 20%;
}



.result-filter {
  margin-bottom: 12px;
}

.product-count {
  padding-bottom: 16px;
  color: var(--vt-c-text-color);
  font-size: 0.875rem;
}

.product-count span {
  color: var(--vt-c-black);
  font-size: 1rem;
}

.product-section {
  width: 80%;
}

.product-section-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}
</style>