<template>
    <div>
        <div class="product-list" v-for="product in products">
            <Product v-bind:productID="product.id" />
        </div>
    </div>
</template>

<script>
import Product from '@/components/Product.vue';

export default {
    name: 'ProductList',
    components: {
        Product,
    },
    data() {
        return {
            count: 3,
        }
    },
    computed: {
        products() {
            const allProducts = this.$store.getters['PRODUCTS']
            return allProducts.slice(0, this.count);
        }
    }
}
</script>

<style lang="scss" scoped>
.product-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-gap: 20px;
}
</style>


