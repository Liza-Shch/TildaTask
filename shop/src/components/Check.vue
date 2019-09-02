<template>
    <div class="check">
        <div v-if="stage === 0">
          <Button class="check__button" text='Перейти к оформлению'
          color='#E44807' :action="goToNextStage"/>
          <div class="check__total">
              <p class="check__text">Общая стоимость</p>
              <b class="check__price">{{ total }}руб.</b>
          </div>
        </div>
        <div v-if="stage === 1">
          <Button class="check__button" text="Оформить"
          color="#E44807" type="submit" formID="formCheckout" :action="submit"/>
          <div class="check__total">
              <p class="check__text">Общая стоимость</p>
              <b class="check__price">{{ total }}руб.</b>
          </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';
import EventBus from '@/eventbus.js';

/**
 * Check - чек
 * props:
 * stage - стадия заказа
 */
export default {
  name: 'Check',
  components: {
    Button,
  },
  props: {
    stage: { type: Number, required: true },
  },
  computed: {
    total() {
      const basket = this.$store.getters.BASKET;
      let sum = 0;
      basket.forEach((product) => {
        sum += product.currentCount * product.price;
      });

      return sum;
    },
  },
  methods: {
    check(e) {
      console.log('click', e.target);
    },
    goToNextStage() {
      this.$emit('nextStage');
    },
    submit(e) {
      EventBus.$emit('submit-checkout-form', e);
      if (this.$store.getters.ORDER) {
        this.goToNextStage();
        this.$store.commit('SET_BASKET', []);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.check {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    color: black;
    height: fit-content;
    min-width: 20vw;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

    &__button {
      width: 100%;
    }

    &__total {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        align-items: flex-end;
    }

    &__text {
        font-size: larger;
        width: min-content;
        text-align: left;
    }

    &__price {
        font-size: larger;
    }
}

p {
    margin: 0;
}
</style>
