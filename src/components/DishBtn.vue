<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
import { Operator } from '@/types/cart';
import { storeToRefs } from 'pinia';
import IconPlus from './icons/IconPlus.vue';
import IconMinus from './icons/IconMinus.vue';

interface Props {
  dishId: number;
}

defineProps<Props>();

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);
</script>

<template>
  <div class="dish-btn">
    <button
      v-show="!cart[dishId]"
      @click="cartStore.changeCount(dishId, Operator.Plus)"
      class="dish-btn__btn"
    >
      <IconPlus />
    </button>
    <button
      v-show="cart[dishId]"
      @click="cartStore.changeCount(dishId, Operator.Minus)"
      class="dish-btn__btn dish-btn__btn_transparent"
    >
      <IconPlus class="dish-btn__clear" v-show="cart[dishId] === 1" />
      <IconMinus v-show="cart[dishId] > 1" />
    </button>
    <div v-show="cart[dishId]" class="dish-btn__group">
      <div class="dish-btn__count">
        {{ cart[dishId] }}
      </div>
      <button
        @click="cartStore.changeCount(dishId, Operator.Plus)"
        class="dish-btn__btn dish-btn__btn_transparent dish-btn__btn_white"
      >
        <IconPlus />
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.dish-btn {
  display: flex;
  background-color: $gray;
  border-radius: 9px;
  color: $white;

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: $gray;
    border-radius: 9px;
  }

  &__btn_transparent {
    background: none;
  }

  &__btn_white {
    position: relative;
    color: $white;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 5px;
      bottom: 5px;
      width: 1px;
      opacity: 0.3;
      background-color: $white;
    }
  }

  &__clear {
    transform: rotate(45deg);
  }

  &__group {
    display: flex;
    align-items: center;
    height: 30px;
    background-color: $red;
    border-radius: 9px;
  }

  &__count {
    padding: 0 12px;
  }
}
</style>
