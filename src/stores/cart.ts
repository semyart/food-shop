import { watch, reactive } from 'vue';
import { defineStore } from 'pinia';
import type { Cart } from '@/types/cart';
import { Operator } from '@/types/cart';
import { getLocalStorageData, setLocalStorageData } from '@/helpers/localStorageHelper';

const CART_KEY = 'cart';

export const useCartStore = defineStore('cart', () => {
  const cart = reactive<Cart>(getLocalStorageData<Cart>(CART_KEY));

  function changeCount(dishId: number, operator: Operator) {
    if (!cart[dishId]) {
      cart[dishId] = 0;
    }

    if (operator === Operator.Plus) {
      cart[dishId] += 1;
    }

    if (operator === Operator.Minus) {
      cart[dishId] -= 1;
    }

    if (!cart[dishId]) {
      delete cart[dishId];
    }
  }

  watch(cart, (updatedCart) => {
    setLocalStorageData(CART_KEY, updatedCart);
  });

  return { cart, changeCount };
});
