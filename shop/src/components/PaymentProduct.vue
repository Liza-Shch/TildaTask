<template>
    <div class="payment-product">
        <div class="payment-product__product">
            <div class="payment-product__img"></div>
            <div class="payment-product__info">
                <big><b>{{ product.name }}</b></big>
                {{ product.description }}
            </div>
        </div>
        <PaymentRadio :id="product.id" :products="[ product ]" ref="Radio"/>
    </div>
</template>

<script>
/**
 * PaymentProduct - выбор оплаты для каждого товара по отдельности
 */
export default {
  name: 'PaymentProdcut',
  components: {
    PaymentRadio: () => import('@/components/PaymentRadio.vue'),
  },
  props: {
    productID: { type: Number, required: true },
  },
  computed: {
    product() {
      return this.$store.getters.BASKET.find(product => +product.id === this.productID);
    },
  },
  methods: {
    submit() {
      const payment = this.$refs.Radio.submit();
      if (!payment) {
        return null;
      }

      return {
        productID: this.product.id,
        payment,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
    .payment-product {
        display: flex;
        flex-direction: column;
        padding: 2vw;
        border-radius: 4px;
        background-color: rgb(240, 240, 240);

        &:hover {
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        }

        &__product {
            display: flex;
            margin-bottom: 1.5em;
        }

        &__img {
            width: 5em;
            height: 5em;
            background-color: rgba(0, 0, 0, 0.5);
            margin-right: 2vw;
        }

        &__info {
            display: grid;
            grid-template-rows: 1fr 1fr;
        }
    }
</style>
