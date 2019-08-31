<template>
    <div class="delivery-info">
        <DeliveryRadio v-if="isAvailableCommonDelivery" id="0" :products="basket"/>
        <div v-if="!isAvailableCommonDelivery" class="delivery-info__products">
          <div v-for="product in basket" :key="+product.id">
            <DeliveryProduct :productID="+product.id" />
          </div>
        </div>
    </div>
</template>

<script>
import DeliveryRadio from '@/components/DeliveryRadio.vue';
import DeliveryProduct from '@/components/DeliveryProduct.vue';

export default {
    name: 'DeliveryInfo',
    components: {
        DeliveryRadio,
        DeliveryProduct,
    },
    computed: {
        basket() {
            return this.$store.getters.BASKET;
        },
        isAvailableCommonDelivery() {
            const hasCourierDelivery = this.basket.every(product => product.delivery.includes('courier'));
            const hasPickUpDelivery = this.basket.every(product => product.delivery.includes('pickup'));
            const res = hasCourierDelivery || hasPickUpDelivery;
            if (!res) {
                this.msg = 'К сожалению, не все товары могут быть доставлены одним способом. Выберите способ доставки для каждого товара по отдельности.';
            }
            return res;
        },
    }
}
</script>

<style lang="scss" scoped>
    .delivery-info {
        display: grid;
        grid-template-rows: auto;
        grid-gap: 20px;
        padding: 30px;
        background-color: white;
        color: black;
        border-radius: 4px;
        justify-items: start;
        text-align: left;

        &__products {
            display: grid;
            grid-template-rows: auto;
            grid-gap: 20px;
        }
    }
</style>


