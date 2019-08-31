<template>
    <div class="delivery-product">
        <div class="delivery-product__product">
            <div class="delivery-product__img"></div>
            <div class="delivery-product__info">
                <big><b>{{ product.name }}</b></big>
                {{ product.description }}
            </div>
        </div>
        <DeliveryRadio :id="product.id" :products="[ product ]"/>
    </div>
</template>

<script>
export default {
  name: 'DeliveryProdcut',
  components: {
      DeliveryRadio: () => import('@/components/DeliveryRadio.vue')
  },
  props: {
      productID: {type: Number, required: true }
  },
  computed: {
      product() {
          return this.$store.getters.BASKET.find((product) => +product.id === this.productID)
      }
  }
};
</script>

<style lang="scss" scoped>
    .delivery-product {
        display: flex;
        flex-direction: column;
        padding: 20px;
        border-radius: 5px;
        border: 1px solid black;

        &:hover {
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        }

        &__product {
            display: flex;
        }

        &__img {
            width: 100px;
            background-color: rgba(0, 0, 0, 0.5);

            &::before {
                content: '';
                display: block;
                padding-top: 100%;
            }
        }

        &__info {
            display: flex;
            flex-direction: column;
        }
    }
</style>
