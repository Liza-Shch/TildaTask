<template>
    <div class="delivery-product">
        <div class="delivery-product__product">
            <div class="delivery-product__img"></div>
            <div class="delivery-product__info">
                <b>{{ product.name }}</b>
                {{ product.description }}
            </div>
        </div>
        <DeliveryRadio :id="product.id" :products="[ product ]" ref="Radio"/>
    </div>
</template>

<script>

/**
 * DeliveryProduct - Выбор доставки для каждого продукта в отдельности
 * props:
 * productID - id продукта
 */
export default {
  name: 'DeliveryProdcut',
  components: {
    DeliveryRadio: () => import('@/components/DeliveryRadio.vue'),
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
      const delivery = this.$refs.Radio.submit();
      if (!delivery) {
        return null;
      }

      return {
        productID: this.product.id,
        delivery,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
    .delivery-product {
        display: flex;
        flex-direction: column;
        padding: calc(10px + 2vw);
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
