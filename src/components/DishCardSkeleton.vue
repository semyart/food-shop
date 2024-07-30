<script setup lang="ts">
import { DishViewType } from '@/types/dish';

interface Props {
  viewType: DishViewType;
}

const props = defineProps<Props>();

const isViewTypeCard = props.viewType === DishViewType.Card;
</script>

<template>
  <div class="dish-card-skeleton" :class="{ 'dish-card-skeleton_card': isViewTypeCard }">
    <div class="dish-card-skeleton__image-wrapper">
      <div class="dish-card-skeleton__image"></div>
    </div>
    <div class="dish-card-skeleton__body">
      <div class="dish-card-skeleton__top">
        <div class="dish-card-skeleton__header"></div>
        <p class="dish-card-skeleton__description"></p>
      </div>
      <div class="dish-card-skeleton__footer">
        <div class="dish-card-skeleton__prices"></div>
        <div class="dish-card-skeleton__btn"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.dish-card-skeleton {
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
    border: 1px solid $border-color;

    .dish-card-skeleton__image-wrapper {
      padding: 0;
      height: 288px;
    }

    .dish-card-skeleton__image {
      width: 100%;
      height: 288px;
      border-radius: 15px 15px 0 0;
    }

    .dish-card-skeleton__body {
      padding: 18px;
      height: 100%;
      border: 1px solid $border-color;
      border-top: none;
      border-radius: 0 0 18px 18px;
    }
  }

  &__image-wrapper {
    padding: 18px 0 18px 18px;
  }

  &__image {
    height: 90px;
    min-width: 90px;
    border-radius: 15px;
    background-color: $gray;
  }

  &__header {
    width: 100%;
    height: 18px;
    margin-bottom: 6px;
    background-color: $gray;
  }

  &__description {
    width: 100%;
    height: 40px;
    background-color: $gray;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
  }

  &__prices {
    width: 52px;
    height: 28px;
    background-color: $gray;
  }

  &__body {
    padding: 18px 18px 18px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  &__btn {
    width: 30px;
    height: 30px;
    background-color: $gray;
    border-radius: 9px;
  }

  &__top {
    margin-bottom: 12px;
  }

  &__image,
  &__header,
  &__description,
  &__prices,
  &__btn {
    background: linear-gradient(
      to right,
      rgba(130, 130, 130, 0.2) 8%,
      rgba(130, 130, 130, 0.3) 18%,
      rgba(130, 130, 130, 0.2) 33%
    );
    background-size: 800px 100px;
    animation: wave-squares 2s infinite ease-out;
  }

  @media (max-width: $screen-xl) {
    gap: 15px;
    flex: 0 1 calc(366 / 744 * 100%);

    &_card {
      gap: 0;
      flex: 0 1 calc(240 / 744 * 100%);

      .dish-card-skeleton__image-wrapper,
      .dish-card-skeleton__image {
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

    &__top {
      margin-bottom: 9px;
    }
  }

  @media (max-width: $screen-sm) {
    flex: 0 1 100%;

    &_card {
      flex: 0 1 calc(177 / 366 * 100%);

      .dish-card-skeleton__image-wrapper,
      .dish-card-skeleton__image {
        height: 177px;
      }
    }
  }

  @keyframes wave-squares {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
}
</style>
