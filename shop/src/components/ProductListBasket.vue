<template>
    <div class="product-list">
        <div v-for="productBasket in BASKET">
            <ProductBasket v-bind:productID="productBasket.id"/>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductBasket from '@/components/ProductBasket.vue';

export default {
  name: 'ProductListBasket',
  components: {
    ProductBasket,
  },
  computed: {
    ...mapGetters(['BASKET']),
  },
};
</script>

<style lang="scss" scoped>
    .product-list {
        display: grid;
        grid-template-rows: auto;
        grid-gap: 20px;
        width: fit-content;
    }
</style>
