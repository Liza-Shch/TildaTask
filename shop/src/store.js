import Vue from 'vue';
import Vuex from 'vuex';
import fakeProducts from './assets/products.json';
import fakePickups from './assets/pickup.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    basket: [],
    pickups: [],
  },
  getters: {
    PRODUCTS: state => state.products,
    BASKET: state => state.basket,
    PICKUPS: state => state.pickups,
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
    SET_PICKUPS: (state, payload) => {
      state.pickups = payload;
    }
  },
  actions: {
    INIT_PRODUCTS: (state) => {
      state.commit('SET_PRODUCTS', fakeProducts.products);
    },
    INIT_PICKUPS: (state) => {
      state.commit('SET_PICKUPS', fakePickups.pickups)
    }
  },
});
