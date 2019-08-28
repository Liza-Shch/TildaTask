<template>
  <div>
    <ShopHeader mainTitle="Juicy" subTitle='Не бойся быть ярким!'/>
    <Product />
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import ShopHeader from '@/components/Header.vue';
import Product from '@/components/Product.vue';

export default {
  name: 'home',
  components: {
    ShopHeader,
    Product
  },
};
</script>
