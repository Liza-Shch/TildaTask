<template>
  <div class="basket-container">
    <a v-if="stages[currentStage] === 'CHECKOUT'" @click="prevStage">В корзину</a>
    <div class = "basket-container__main">
      <ProductListBasket v-if="stages[currentStage] === 'BASKET'" />
      <Checkout v-if="stages[currentStage] === 'CHECKOUT'" />
    </div>
    <div class="basket-container__check">
      <Check :stage="currentStage" @nextStage="nextStage"/>
    </div>
  </div>
</template>

<script>
import ProductListBasket from '@/components/ProductListBasket.vue';
import Check from '@/components/Check.vue';
import Checkout from '@/components/Checkout.vue';

export default {
  name: 'basket',
  components: {
    ProductListBasket,
    Check,
    Checkout,
  },
  data() {
      return {
        stages: ['BASKET', 'CHECKOUT'],
        currentStage: 0,
    }
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
  display: flex;

  &__main {
    width: 40vw;
  }

  &__check {
    margin-left: 40px;
  }
}
</style>
