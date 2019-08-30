import Vue from 'vue';
import Vuex from 'vuex';
import fakeProducts from './assets/products.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    basket: [],
  },
  getters: {
    PRODUCTS: state => state.products,
    BASKET: state => state.basket,
  },
  mutations: {
    SET_PRODUCTS: (state, payload) => {
      state.products = payload;
    },
    ADD_PRODUCTS: (state, payload) => {
      state.products.add(payload);
    },
    SET_BASKET: (state, payload) => {
      state.basket = payload;
    },
    ADD_BASKET: (state, payload) => {
      state.basket.push(payload);
    },
    DELETE_PRODUCT_FROM_BASKET: (state, payload) => {
      state.basket = state.basket.filter(product => product.id !== payload);
    },
  },
  actions: {
    INIT_PRODUCTS: (state) => {
      state.commit('SET_PRODUCTS', fakeProducts.products);
    },
  },
});
