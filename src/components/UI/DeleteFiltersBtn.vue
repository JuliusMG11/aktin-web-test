src/components/DeleteFiltersButton.vue
<template>
  <div class="delete-btn" v-if="selectedCategories.length > 0">
    <button @click="clearFilters">
        <span>Delete all filters</span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-close-small"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.47 3.47a.75.75 0 011.06 0l10 10a.75.75 0 11-1.06 1.06l-10-10a.75.75 0 010-1.06z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.53 3.47a.75.75 0 00-1.06 0l-10 10a.75.75 0 101.06 1.06l10-10a.75.75 0 000-1.06z" fill="currentColor"></path></svg>
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  selectedCategories: string[];
  clearFilters: () => void;
}>();
</script>

<style scoped>
.delete-btn {
    margin-bottom: 16px;
}
.delete-btn button {
    display: flex;
    align-items: center;
    column-gap: 8px;
    padding-left: 8px;
    padding-right: 8px;
    height: 32px;
    border-radius: 8px;
    color: var(--vt-c-black);
    border: none;
}

.delete-btn span {
  font-size: 0.75rem;
  font-weight: 700;
}

.delete-btn button:hover {
    background-color: var(--vt-c-black);
    color: var(--vt-c-white);
    cursor: pointer;
}

.delete-btn button:hover svg {
    fill: var(--vt-c-white);
}

.delete-btn svg {
    width: 16px;
    height: 16px;
}
</style>