<template>
  <div class="category-box">
    <div 
      v-for="cat in categories" 
      :key="cat" 
      class="category-item"
      @click="handleReset(cat)"
    >
      <span>{{ cat }} </span>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-close-small">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.47 3.47a.75.75 0 011.06 0l10 10a.75.75 0 11-1.06 1.06l-10-10a.75.75 0 010-1.06z" fill="currentColor"></path>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.53 3.47a.75.75 0 00-1.06 0l-10 10a.75.75 0 101.06 1.06l10-10a.75.75 0 000-1.06z" fill="currentColor"></path>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['categories']);
const emit = defineEmits(['resetCategory']);

const handleReset = (category: string) => {
  emit('resetCategory', category);
};
</script>

<style scoped>
.category-box {
    display: flex;
    align-items: center;
    gap: 16px;
}

.category-item {
    display: flex;
    align-items: center;
    column-gap: 8px;
    padding: 8px;
    height: 32px;
    transition: all .3s ease;
    border-radius: 8px;
    color: var(--vt-c-black);
    border: 2px solid var(--vt-c-white-200);
    background-color: var(--vt-c-white);
}

.category-item:hover {
    cursor: pointer;
    border: 2px solid var(--vt-c-black);
}

.category-item span {
  font-size: 0.75rem;
  font-weight: 600;
}

.category-item svg {
    width: 16px;
    height: 16px;
}
</style>