import { ref } from 'vue';
import { defineStore } from 'pinia';
import { fetchDishes } from '@/api/dish';
import type { Dish } from '@/types/dish';

export const useDishStore = defineStore('dish', () => {
  const dishes = ref<null | Dish[]>(null);
  const isLoading = ref<boolean>(false);

  async function getDishes() {
    try {
      isLoading.value = true;
      dishes.value = await fetchDishes();
    } finally {
      isLoading.value = false;
    }
  }

  return { dishes, isLoading, getDishes };
});
