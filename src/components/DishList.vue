<script setup lang="ts">
import type { Dish } from '@/types/dish';
import { DishViewType } from '@/types/dish';
import Dishcard from '@/components/DishCard.vue';
import { computed } from 'vue';
import { useDishStore } from '@/stores/dish';
import { storeToRefs } from 'pinia';
import DishCardSkeleton from '@/components/DishCardSkeleton.vue';

interface Props {
  dishes: Dish[] | null;
  viewType: DishViewType;
}

const props = defineProps<Props>();

const dishStore = useDishStore();
const { isLoading } = storeToRefs(dishStore);

const isDishesFetchedWithError = computed(() => !props.dishes && !isLoading.value);
</script>

<template>
  <div v-if="isDishesFetchedWithError">Данные не загружены</div>
  <div
    v-else-if="!dishes"
    class="dish-list"
    :class="{ 'dish-list_card': viewType === DishViewType.Card }"
  >
    <DishCardSkeleton v-for="n in 16" :key="n" :view-type="viewType" />
  </div>
  <div v-else class="dish-list" :class="{ 'dish-list_card': viewType === DishViewType.Card }">
    <Dishcard v-for="dish in dishes" :key="dish.id" :dish="dish" :viewType="viewType" />
  </div>
</template>

<style lang="scss">
.dish-list {
  display: flex;
  flex-wrap: wrap;
  column-gap: calc(24 / 1224 * 100%);
  row-gap: 24px;

  @media (max-width: $screen-xl) {
    column-gap: calc(12 / 744 * 100%);
    row-gap: 12px;
  }

  @media (max-width: $screen-sm) {
    column-gap: 0;

    &_card {
      column-gap: calc(12 / 366 * 100%);
    }
  }
}
</style>
