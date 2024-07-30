<script setup lang="ts">
import { storeToRefs } from 'pinia';
import DishList from './components/DishList.vue';
import { useDishStore } from '@/stores/dish';
import { DishViewType } from './types/dish';
import { onMounted } from 'vue';

const dishStore = useDishStore();
const { dishes } = storeToRefs(dishStore);

onMounted(() => {
  dishStore.getDishes();
});
</script>

<template>
  <main>
    <section class="menu">
      <div class="container">
        <h2>Карточки списком</h2>
        <h3>Обычные</h3>
        <DishList :dishes="dishes" :view-type="DishViewType.List" />
      </div>
    </section>

    <section class="menu">
      <div class="container">
        <h2>Обычные карточки</h2>
        <h3>Маленькие</h3>
        <DishList :dishes="dishes" :view-type="DishViewType.Card" />
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.menu {
  padding: 30px 0;

  &:first-child {
    padding-top: 60px;
  }

  &:last-child {
    padding-bottom: 60px;
  }

  @media (max-width: $screen-xl) {
    padding: 18px 0;

    &:first-child {
      padding-top: 36px;
    }

    &:last-child {
      padding-bottom: 36px;
    }
  }
}
</style>
