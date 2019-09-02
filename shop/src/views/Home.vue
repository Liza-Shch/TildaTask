<template>
  <div>
    <ShopHeader mainTitle="Juicy" subTitle='Будь ярче!'/>
    <ProductList />
  </div>
</template>

<script>
// @ is an alias to /src
import ShopHeader from '@/components/Header.vue';
import ProductList from '@/components/ProductList.vue';

/**
 * Home - вьюшка, открывающаяся по пути '/'
 * Содержит компоненты приветствующей страницы и списка товаров
 */
export default {
  name: 'home',
  components: {
    ShopHeader,
    ProductList,
  },
  /**
   * Инициирует список товаров
   */
  beforeCreate() {
    this.$store.dispatch('INIT_PRODUCTS')
  }
};
</script>
