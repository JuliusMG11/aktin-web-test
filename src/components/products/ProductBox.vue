<script setup lang="ts">
import type { Product } from '../../types/types';

const props = defineProps<{
  data: Product
}>();

const filledStars = props.data.rating.rate > 0 ? Math.round((props.data.rating.rate / 5) * 5) : 0; 

</script>

<template>
  <div class="product-box">
    <div class="product-box-image">
       <picture>
         <source :srcset="data.image" type="image/webp">
         <img :src="data.image" :alt="data.title" />
       </picture>
    </div>
   <div class="product-description">
     <h3>{{ data.title }}</h3>
     <p>{{ data.description }}</p>
   </div>
    <div class="product-category">
      <h4>{{ data.category }}</h4>
    </div>
    <div class="product-rating">
      <svg v-for="index in 5" :key="index" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{ filled: index <= filledStars }">
        <path d="M12.0001 17.75L5.82808 20.995L7.00708 14.122L2.00708 9.25501L8.90708 8.25501L11.9931 2.00201L15.0791 8.25501L21.9791 9.25501L16.9791 14.122L18.1581 20.995L12.0001 17.75Z" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="product-price">
      {{ data.price }}€
    </div>
  </div>
</template>

<style scoped>
.product-box {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.product-box-image {
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  background: var(--vt-c-white-200);
  overflow: hidden;
}

.product-box-image img {
  width: 100%;
  height: 200px;
  object-fit: contain;
}

.product-description {
  padding-right: 22px;
}

.product-description h3{
  font-size: 1rem;
}

.product-description p {
  font-size: 0.875rem;
  color: var(--vt-c-text-color);
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; 
}

.product-category h4 {
  font-size: 0.75rem;
  color: var(--vt-c-text-color);
}

.product-rating {
  display: flex;
}

.product-rating svg {
  fill: var(--vt-c-white-100);
}
.product-rating svg.filled {
  fill: var(--vt-c-gold-color);
}

.product-price {
  font-weight: bold;
  font-size: 1.25rem;
}

</style>