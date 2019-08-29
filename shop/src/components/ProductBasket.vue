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
        +this.product.currentCount++;
        console.log(this.product.currentCount);
      }
    },

    remove() {
      if (+this.product.currentCount > 1) {
        +this.product.currentCount--;
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
        grid-gap: 20px;
        width: fit-content;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background-color: white;
        border-radius: 10px;
        color: black;

        &__image {
            width: 100px;
            height: 100px;
            background-color: rgba(0, 0, 0, 0.1);
        }

        &__info {
            display: grid;
            grid-gap: 10px;
            width: 150px;
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
            width: 25px;
            height: 25px;
            padding: 0;
            border: none;
            background-size: cover;

            &_add {
                margin-right: 10px;
                background-image: url('../assets/add.svg');
            }

            &_remove {
                margin-left: 10px;
                background-image: url('../assets/minus.svg');
            }

            &_delete {
                position: absolute;
                top: 20px;
                right: 20px;
                background-image: url('../assets/close.svg');
            }
        }
    }
</style>
