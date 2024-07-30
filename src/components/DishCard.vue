<script setup lang="ts">
import { storeToRefs } from 'pinia';
import type { Dish } from '@/types/dish';
import { DishViewType } from '@/types/dish';
import { WeightUnit } from '@/types/dish';
import { useCartStore } from '@/stores/cart';
import DishBtn from '@/components/DishBtn.vue';
import fallbackPhoto from '@/assets/images/fallback-photo.png';

interface Props {
  dish: Dish;
  viewType: DishViewType;
}

const props = defineProps<Props>();

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

const weightUnits = {
  [WeightUnit.Gram]: 'г'
};

const isViewTypeCard = props.viewType === DishViewType.Card;
</script>

<template>
  <div
    class="dish-card"
    :class="{ 'dish-card_card': isViewTypeCard, 'dish-card_active': cart[dish.id] }"
  >
    <div v-if="dish.photo || isViewTypeCard" class="dish-card__image-wrapper">
      <img :src="dish.photo ?? fallbackPhoto" :alt="dish.name" class="dish-card__image" />
    </div>
    <div
      class="dish-card__body"
      :class="{ 'dish-card__body_single': !dish.photo && !isViewTypeCard }"
    >
      <div class="dish-card__top">
        <div class="dish-card__header">
          <h4 class="dish-card__name">{{ dish.name }}</h4>
          <span v-if="dish.weight" class="dish-card__weight"
            >{{ dish.weight }} {{ weightUnits[props.dish.weight_unit] }}</span
          >
        </div>
        <p class="dish-card__description">
          {{ dish.description }}
        </p>
      </div>
      <div class="dish-card__footer">
        <div class="dish-card__prices">
          <span v-if="dish.old_price" class="dish-card__old-price">
            {{ Math.round(+dish.old_price) }} ₽
          </span>
          <span
            class="dish-card__actual-price"
            :class="{ 'dish-card__actual-price_red': dish.old_price }"
          >
            {{ Math.round(+dish.price) }} ₽
          </span>
        </div>
        <div>
          <DishBtn :dish-id="dish.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.dish-card {
  display: flex;
  gap: 18px;
  flex: 0 1 calc(392 / 1224 * 100%);
  border: 1px solid $border-color;
  border-radius: 18px;
  color: $black;

  &_card {
    flex-direction: column;
    flex: 0 1 calc(288 / 1224 * 100%);
    gap: 0;
    border: none;

    .dish-card__image-wrapper {
      padding: 0;
      height: 288px;
    }

    .dish-card__image {
      width: 100%;
      height: 288px;
      border-radius: 15px 15px 0 0;
    }

    .dish-card__body {
      padding: 18px;
      height: 100%;
      border: 1px solid $border-color;
      border-top: none;
      border-radius: 0 0 18px 18px;
    }
  }

  &_active {
    border-color: transparent;
    background-color: $white;
    box-shadow: 0px 5px 20px 0px #0000001a;

    .dish-card__body {
      border-color: transparent;
    }
  }

  &__image-wrapper {
    padding: 18px 0 18px 18px;
  }

  &__image {
    height: 90px;
    min-width: 90px;
    border-radius: 15px;
    object-fit: cover;
  }

  &__header {
    margin-bottom: 6px;
  }

  &__name {
    display: inline;
    margin-right: 6px;
    font-weight: 600;
    font-size: 18px;
  }

  &__weight {
    font-size: 14px;
    opacity: 0.5;
    white-space: nowrap;
  }

  &__description {
    font-size: 14px;
    line-height: 20px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
  }

  &__old-price {
    display: inline-block;
    margin-right: 6px;
    font-size: 14px;
    text-decoration: line-through;
  }

  &__actual-price {
    font-size: 18px;
    font-weight: 500;
  }

  &__actual-price_red {
    color: $dark-red;
    font-weight: 600;
  }

  &__body {
    padding: 18px 18px 18px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  &__body_single {
    padding: 18px;
  }

  &__top {
    margin-bottom: 12px;
  }

  @media (max-width: $screen-xl) {
    gap: 15px;
    flex: 0 1 calc(366 / 744 * 100%);

    &_card {
      gap: 0;
      flex: 0 1 calc(240 / 744 * 100%);

      .dish-card__image-wrapper,
      .dish-card__image {
        height: 240px;
      }
    }

    &__image-wrapper {
      padding: 15px 0 15px 15px;
    }

    &__image {
      height: 60px;
      width: 60px;
      min-width: 60px;
    }

    &__body {
      padding: 15px 15px 15px 0;
    }

    &__body_single {
      padding: 15px;
    }

    &__name {
      font-size: 16px;
    }

    &__description {
      font-size: 12px;
      line-height: 18px;
    }

    &__weight {
      font-size: 12px;
    }

    &__top {
      margin-bottom: 9px;
    }

    &__old-price {
      font-size: 12px;
    }

    &__actual-price {
      font-size: 16px;
    }
  }

  @media (max-width: $screen-sm) {
    flex: 0 1 100%;

    &_card {
      flex: 0 1 calc(177 / 366 * 100%);

      .dish-card__image-wrapper,
      .dish-card__image {
        height: 177px;
      }

      .dish-card__name {
        word-break: break-word;
      }
    }
  }
}
</style>
