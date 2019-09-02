<template>
    <div class="product">
        <div class="product__img"></div>
        <p class="product__name">{{ product.name }}</p>
        <p class="product__description">{{ product.description }}</p>
        <Button class="product__button" color="#E44807" :action="addToBusket" text="Купить"/>
    </div>
</template>

<script>
import EventBus from '@/eventbus.js';
import Button from '@/components/Button.vue';

/**
 * Product - товар в листинге товаров магазина
 */
export default {
  name: 'Product',
  components: {
    Button,
  },
  props: {
    productID: { type: Number, required: true },
  },
  computed: {
    product() {
      const products = this.$store.getters.PRODUCTS;
      console.log(products);
      return products.find(product => product.id === this.productID);
    },
  },
  methods: {
    addToBusket() {
      EventBus.$emit('add-product-to-basket', this.product);
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    text-align: center;

    &__img {
      width: 100%;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url('../assets/mango.png');

      &::before {
        content: '';
        display: block;
        padding-top: 100%;
      }
    }

    &__name {
      padding: 0;
      margin: 0;
      font-size: larger;
    }

    &__description {
      font-weight: lighter;
      padding: 0;
      margin: 0;
      height: 3em;
    }

    &__button {
      margin-top: 20px;
        // width: 300px;
        // height: 50px;
        // background-color: black;
    }
}
</style>
