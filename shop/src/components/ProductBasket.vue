<template>
    <div class="product">
        <div class="product__image" :style="{'background-image': 'url(' +  product.img + ')'}">
        </div>
        <div class="product__info">
            <div class="product__name">{{ product.name }}</div>
            <div class="product__description">{{ product.description }}</div>
        </div>
        <div class="product__price">{{ product.price }}руб.</div>
        <div class="product__count">
            <button class="product__button product__button_add" @click='add'></button>
            <div class="product__current-count-js">{{ product.currentCount }}</div>
            <button class="product__button product__button_remove" @click='remove'></button>
        </div>
        <button class="product__button product__button_delete" @click='deleteProduct'></button>
    </div>
</template>

<script>
/**
 * ProductBasket - товар в корзине на стадии проверки товаров
 */
export default {
  name: 'ProductBasket',
  props: {
    productID: { type: Number, require: true },
  },
  computed: {
    product() {
      const basket = this.$store.getters.BASKET;
      return basket.find(product => product.id === this.productID);
    },
  },
  methods: {
    add() {
      if (+this.product.currentCount + 1 <= +this.product.count) {
        ++this.product.currentCount;
        console.log(this.product.currentCount);
      }
    },

    remove() {
      if (+this.product.currentCount > 1) {
        --this.product.currentCount;
      }
    },

    deleteProduct() {
      this.$store.commit('DELETE_PRODUCT_FROM_BASKET', this.product.id);
    },
  },
};
</script>

<style lang="scss" scoped>
    .product {
        position: relative;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 2vw;
        width: fit-content;
        justify-items: start;
        align-items: center;
        padding: calc(10px + 2vw);
        background-color: white;
        border-radius: 10px;
        color: black;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

        @media screen and (max-width: 1224px) {
            grid-template-columns: calc(40px + 10vw)  auto;
            width: initial;
        }

        &__image {
            width: calc(30px + 5vw);
            height: calc(30px + 5vw);
            background-color: rgba(0, 0, 0, 0.1);
        }

        &__info {
            display: grid;
            grid-gap: 10px;
            min-width: 150px;
            text-align: left;
        }

        &__name {
            font-weight: bolder;
        }

        &__description {
            font-weight: lighter;
        }

        &__count {
            display: flex;
        }

        &__button {
            width: calc(20px + 0.5vw);
            height: calc(20px + 0.5vw);
            padding: 0;
            border: none;
            background-size: cover;

            &_add {
                margin-right: 10px;
                background-image: url('../assets/add.png');
            }

            &_remove {
                margin-left: 10px;
                background-image: url('../assets/minus.png');
            }

            &_delete {
                position: absolute;
                top: calc(10px + 0.25vw);
                right: calc(10px + 0.25vw);
                background-image: url('../assets/close.png');
            }
        }
    }
</style>
