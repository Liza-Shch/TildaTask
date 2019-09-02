<template>
  <div class="basket-container">
    <a v-if="stages[currentStage] === 'CHECKOUT'" @click="prevStage" class="basket-container__link">В корзину</a>
    <router-link to='/' v-if="stages[currentStage] !== 'CHECKOUT'" class="basket-container__link">В магазин</router-link>
    <h2 v-if="!basket.length && stages[currentStage] !== 'DONE'" class="basket-container__text">Ваша корзина пуста</h2>
    <h2 v-if="stages[currentStage] === 'DONE'">Ваша заказ успешно совершен!</h2>
    <div class = "basket-container__main">
      <ProductListBasket v-if="stages[currentStage] === 'BASKET'" />
      <Checkout v-if="stages[currentStage] === 'CHECKOUT'" />
    </div>
    <div v-if="(stages[currentStage] !== 'DONE') && basket.length > 0" class="basket-container__check">
      <Check :stage="currentStage" @nextStage="nextStage"/>
    </div>
  </div>
</template>

<script>
import ProductListBasket from '@/components/ProductListBasket.vue';
import Check from '@/components/Check.vue';
import Checkout from '@/components/Checkout.vue';

/**
 * Basket - вьюшка работы с корзиной
 * Состоит из трех компонентов (стадий): проверки товаров в корзине,
 * заполнение формы заказа и сообщения об успешном завершении
 */
export default {
  name: 'basket',
  components: {
    ProductListBasket,
    Check,
    Checkout,
  },
  data() {
      return {
        stages: ['BASKET', 'CHECKOUT', 'DONE'],
        currentStage: 0,
    }
  },
  computed: {
    basket() {
      return this.$store.getters.BASKET
    },
  },
  methods: {
    nextStage() {
      if (this.stages.length > this.currentStage + 1) {
        this.currentStage++;
      }
    },

    prevStage() {
      if (this.currentStage > 0) {
        this.currentStage--;
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.basket-container {
  position: relative;
  display: flex;
  margin-top: 2em;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }

  &__main {
    width: 40vw;

    @media screen and (max-width: 900px) {
      width: 100%;
    }
  }

  &__check {
    margin-left: 40px;

    @media screen and (max-width: 900px) {
      margin-left: 0;
      margin-top: 5vh;
    }
  }

  &__link {
    position: absolute;
    top: -2em;
    font-size: larger;
    color: white;
    text-decoration: underline;

    &:hover {
      color: #9C9C9C;
    }
  }

  &__text {
    margin: 0;
    padding: 0;
  }
}
</style>
