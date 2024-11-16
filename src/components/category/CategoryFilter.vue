<template>
  <div class="category-filter">
    <div 
      v-for="category 
      in categories" 
      :key="category.name"
      class="category-filter-item"
    >
      <input 
        type="checkbox" 
        :id="category.name" 
        :value="category.name" 
        :checked="selectedCategories.includes(category.name)" 
        @change="toggleCategory(category.name)"
      />
      <label :for="category.name">
        {{ category.name }} <span>({{ category.count }})</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  categories: { name: string; count: number }[];
  selectedCategories: string[];
}>();

const emit = defineEmits<{
  (e: 'toggleCategory', category: string): void;
}>();

const toggleCategory = (category: string) => {
  emit('toggleCategory', category);
};
</script>

<style scoped>
.category-filter {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.category-filter-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  color: var(--vt-c-black);
}

.category-filter-item input {
  width: 16px;
  height: 16px;
}

.category-filter-item span {
    font-weight: 400;
    color: var(--vt-c-text-color);
}
</style>