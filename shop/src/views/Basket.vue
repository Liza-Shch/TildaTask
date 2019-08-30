<template>
  <div class="basket-container">
    <ProductListBasket v-if="stages[currentStage] === 'BASKET'" />
    <div class="basket-container__check" v-if="stages[currentStage] === 'BASKET'">
      <Check :stage="currentStage" @nextStage="nextStage"/>
    </div>
  </div>
</template>

<script>
import ProductListBasket from '@/components/ProductListBasket.vue';
import Check from '@/components/Check.vue';

export default {
  name: 'basket',
  components: {
    ProductListBasket,
    Check,
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
    }
  }
};
</script>

<style lang="scss" scoped>
.basket-container {
  display: flex;

  &__check {
    margin-left: 40px;
  }
}
</style>
