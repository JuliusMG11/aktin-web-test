import { type Ref } from 'vue';

export const useURL = (selectedCategories: Ref<string[]>) => {
  const updateURL = () => {
    const url = new URL(window.location.href);
    if (selectedCategories.value.length > 0) {
      url.searchParams.set('categories', selectedCategories.value.join(','));
    } else {
      url.searchParams.delete('categories');
    }
    window.history.pushState({}, '', url);
  };

  const loadCategoriesFromURL = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoriesFromURL = urlParams.get('categories');
    if (categoriesFromURL) {
      selectedCategories.value = categoriesFromURL.split(',');
    }
  };

  return { updateURL, loadCategoriesFromURL };
};