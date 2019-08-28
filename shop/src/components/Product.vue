<template>
    <div class='product'>
        <button type='button' class='product__button' @click="addToBusket">Купить</button>
    </div>
</template>

<script>
import EventBus from '@/eventbus.js';

export default {
    name: 'Product',
    data() {
        return {
            product : {
                id: 1,
                name: "jeans"
            },
        }
    },
    methods: {
        addToBusket() {
            EventBus.$emit('add-product-to-basket', this.product);
        }
    }
}
</script>

<style lang="scss" scoped>
.product {
    display: flex;
    flex-direction: column;

    &__button {
        width: 300px;
        height: 50px;
        background-color: black;
    }
}
</style>


