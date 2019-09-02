<template>
    <div class="delivery-info">
        <DeliveryRadio v-if="isAvailableCommonDelivery" :id="id" :products="basket" ref="Radio"/>
        <div v-if="!isAvailableCommonDelivery" class="delivery-info__products">
          <div>{{ msg }}</div>
          <div v-for="product in basket" :key="+product.id">
            <DeliveryProduct :productID="+product.id" :ref="'DeliveryProduct' + product.id"/>
          </div>
        </div>
    </div>
</template>

<script>
import DeliveryRadio from '@/components/DeliveryRadio.vue';
import DeliveryProduct from '@/components/DeliveryProduct.vue';
import EventBus from '@/eventbus.js';

/**
 * DeliveryInfo - информация о доставке
 */
export default {
  name: 'DeliveryInfo',
  components: {
    DeliveryRadio,
    DeliveryProduct,
  },
  data() {
    return {
      id: 0,
      msg: null,
    };
  },
  computed: {
    basket() {
      return this.$store.getters.BASKET;
    },
    isAvailableCommonDelivery() {
      const hasCourierDelivery = this.basket.every(product => product.delivery.includes('courier'));
      const hasPickUpDelivery = this.basket.every(product => product.delivery.includes('pickup'));
      const res = hasCourierDelivery || hasPickUpDelivery;
      if (!res) {
        this.msg = 'К сожалению, не все товары могут быть доставлены одним способом. Выберите способ доставки для каждого товара по отдельности.';
      }
      return res;
    },
  },
  created() {
    EventBus.$on('submit-delivery-info', this.submit);
  },
  methods: {
    submit() {
      if (this.$refs.Radio) {
        return this.$refs.Radio.submit();
      }

      if (!this.isAvailableCommonDelivery) {
        const data = [];
        this.basket.forEach((product) => {
          const ref = `DeliveryProduct${product.id}`;
          const delivery = this.$refs[ref][0].submit();

          if (!delivery) {
            return null;
          }

          data.push(delivery);
        });

        if (data.length !== this.basket.length) {
          return null;
        }

        return { products: data };
      }
      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
    .delivery-info {
        display: grid;
        grid-template-rows: auto;
        grid-gap: 20px;
        background-color: white;
        color: black;
        border-radius: 4px;
        justify-items: start;
        text-align: left;

        &__products {
            display: grid;
            grid-template-rows: auto;
            grid-gap: 2vh;
        }
    }
</style>
