<template>
    <div class="payment">
        <PaymentRadio v-if="isAvailableCommonPayment" :id="id" :products="basket" ref="Radio"/>
        <div v-if="!isAvailableCommonPayment" class="payment__products">
          <div>{{ msg }}</div>
          <div v-for="product in basket" :key="+product.id">
            <PaymentProduct :productID="+product.id" :ref="'PaymentProduct' + product.id"/>
          </div>
        </div>
    </div>
</template>

<script>
import PaymentRadio from '@/components/PaymentRadio.vue';
import PaymentProduct from '@/components/PaymentProduct.vue';

export default {
  name: 'Payment',
  components: {
    PaymentRadio,
    PaymentProduct,
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
    isAvailableCommonPayment() {
      const hasCashPayment = this.basket.every(product => product.payment.includes('cash'));
      const hasCardPayment = this.basket.every(product => product.payment.includes('card'));
      const res = hasCashPayment || hasCardPayment;
      if (!res) {
        this.msg = 'К сожалению, не все товары могут быть оплачены одним способом. Выберите способ оплаты для каждого товара по отдельности.';
      }
      return res;
    },
  },
  methods: {
    submit() {
      if (this.$refs.Radio) {
        return this.$refs.Radio.submit();
      }

      if (!this.isAvailableCommonPayment) {
        const data = [];
        this.basket.forEach((product) => {
          const ref = `PaymentProduct${product.id}`;
          const payment = this.$refs[ref][0].submit();

          if (!payment) {
            return null;
          }

          data.push(payment);
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
    .payment {
        &__products {
            display: grid;
            grid-template-rows: auto;
            grid-gap: 2vh;
        }
    }
</style>
