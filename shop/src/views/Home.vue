<template>
  <div>
    <ShopHeader mainTitle="Juicy" subTitle='Не бойся быть ярким!'/>
    <Product />
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
    Product,
  },
};
</script>
