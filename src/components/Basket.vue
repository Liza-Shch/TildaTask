<template>
    <div class="basket">
        <router-link to="/basket" class="basket__link"></router-link>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px"
        y="0px" width="100%"
        height="100%" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;"
        xml:space="preserve" class="">
        <g id="shopping-cart">
            <path d="M153,408c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S181.05,
            408,153,408z  M0,0v51h51l91.8,193.8L107.1,306
            c-2.55,7.65-5.1,17.85-5.1,25.5c0,28.05,22.95,51,51,51h306v-51H163.2c-2.55,
            0-5.1-2.55-5.1-5.1v-2.551l22.95-43.35h188.7
            c20.4,0,35.7-10.2,43.35-25.5L504.9,89.25c5.1-5.1,5.1-7.65,
            5.1-12.75c0-15.3-10.2-25.5-25.5-25.5H107.1L84.15,0H0z  M408,408
            c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S436.05,408,408,408z"
            data-original="#000000"
            class="active-path" data-old_color="#000000" v-bind:fill="currentColor"/>
        </g>
        </svg>
    </div>
</template>

<script>
import EventBus from '@/eventbus.js';

/**
 * Basket - значок корзины
 * Импортится в основной компонент
 * props:
 * emptyColor - цвет иконки пустой корзины
 * fullColor - цвет иконки заполненной корзины
 */
export default {
  name: 'Basket',
  props: {
    emptyColor: { type: String, require: false, default: '#ffffff' },
    fullColor: { type: String, require: false, default: '#000000' },
  },
  computed: {
    basket() {
      return this.$store.getters.BASKET;
    },
    currentColor() {
      return this.basket.length > 0 ? this.fullColor : this.emptyColor;
    },
  },
  created() {
    EventBus.$on('add-product-to-basket', this.addProduct);
  },
  methods: {
    addProduct(product) {
      const alreadyIn = this.basket.find(_product => +_product.id === +product.id);
      if (alreadyIn) {
        return;
      }
      this.$store.commit('ADD_BASKET', product);
    },
  },
};
</script>


<style lang="scss" scoped>
.basket {
    display: flex;
    position: fixed;
    z-index: 1;
    top: calc(5px + 2.5vw);
    right: calc(5px + 2.5vw);
    width: calc(15px + 5vw);
    height: calc(15px + 5vw);

    &__link {
      position: absolute;
      width: 100%;
      height: 100%;
    }
}
</style>
