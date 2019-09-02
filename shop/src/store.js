import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import fakeProducts from './assets/products.json';
import fakePickups from './assets/pickup.json';

Vue.use(Vuex);

const dadataAPI = axios.create({
  baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Token 042645573d283b5a10ca964d5db112dd9e0b53be',
  },
});

export default new Vuex.Store({
  state: {
    products: [],
    basket: [],
    pickups: [],
    cityOptions: [],
    streetOptions: [],
    houseOptions: [],
    order: null,
  },
  getters: {
    PRODUCTS: state => state.products,
    BASKET: state => state.basket,
    PICKUPS: state => state.pickups,
    CITY_OPTIONS: state => state.cityOptions,
    STREET_OPTIONS: state => state.streetOptions,
    HOUSE_OPTIONS: state => state.houseOptions,
    CITY: state => state.city,
    STREET: state => state.street,
    HOUSE: state => state.house,
    ORDER: state => state.order,
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
    },
    SET_CITY_OPTIONS: (state, payload) => {
      state.cityOptions = payload;
    },
    SET_STREET_OPTIONS: (state, payload) => {
      state.streetOptions = payload;
    },
    SET_HOUSE_OPTIONS: (state, payload) => {
      state.houseOptions = payload;
    },
    SET_CITY: (state, payload) => {
      state.city = payload;
    },
    SET_ORDER: (state, payload) => {
      state.order = payload;
    },
  },
  actions: {
    INIT_PRODUCTS: (state) => {
      state.commit('SET_PRODUCTS', fakeProducts.products);
    },
    INIT_PICKUPS: (state) => {
      state.commit('SET_PICKUPS', fakePickups.pickups);
    },
    GET_CITY_OPTIONS: (state, payload) => {
      const { query } = payload;
      dadataAPI.post('/address', {
        query,
        count: 10,
        from_bound: {
          value: 'city',
        },
        to_bound: {
          value: 'city',
        },
        restrict_value: true,
      })
        .then((res) => {
          state.commit('SET_CITY_OPTIONS', res.data.suggestions.map(city => city.data.city));
        });
    },
    GET_STREET_OPTIONS: (state, payload) => {
      const { query } = payload;
      dadataAPI.post('/address', {
        query,
        count: 10,
        from_bound: {
          value: 'street',
        },
        to_bound: {
          value: 'street',
        },
        restrict_value: true,
      })
        .then((res) => {
          state.commit('SET_STREET_OPTIONS', res.data.suggestions.map(street => street.data.street_with_type));
        });
    },
    GET_HOUSE_OPTIONS: (state, payload) => {
      const { query } = payload;
      dadataAPI.post('/address', {
        query,
        count: 10,
        from_bound: {
          value: 'house',
        },
        restrict_value: true,
      })
        .then((res) => {
          state.commit('SET_HOUSE_OPTIONS', res.data.suggestions.map(house => house.data.house));
        });
    },
  },
});
