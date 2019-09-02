<template>
    <div class="product-list">
        <div v-for="product in products" :key="product.id">
            <Product v-bind:productID="product.id" />
        </div>
    </div>
</template>

<script>
import Product from '@/components/Product.vue';

/**
 * ProductList - список товаров в магазине
 */
export default {
  name: 'ProductList',
  components: {
    Product,
  },
  data() {
    return {
      count: 16,
    };
  },
  computed: {
    products() {
      const allProducts = this.$store.getters.PRODUCTS;
      return allProducts.slice(0, this.count);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-gap: 50px;

    @media screen and (max-width: 900px) {
      grid-template-columns: 1fr 1fr;
    }
}
</style>
