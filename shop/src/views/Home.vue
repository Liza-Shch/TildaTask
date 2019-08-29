<template>
  <div>
    <ShopHeader mainTitle="Juicy" subTitle='Не бойся быть ярким!'/>
    <ProductList />
  </div>
</template>

<script>
// @ is an alias to /src
import ShopHeader from '@/components/Header.vue';
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'home',
  components: {
    ShopHeader,
    ProductList,
  },
  beforeCreate() {
    this.$store.dispatch('INIT_PRODUCTS')
  }
};
</script>
