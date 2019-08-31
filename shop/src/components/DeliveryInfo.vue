<template>
   <div class="delivery-info">
       <label for="deliveryRadioButton" v-if="isAvailableCommonDelivery">
           <input type="radio" value="courier" id="deliveryRadioButton" name="delivery" @change="courierChecked">
           Доставка курьером
       </label>
       <label for="pickupRadioButton" v-if="isAvailableCommonDelivery">
           <input type="radio" value="pickup" id="pickupRadioButton" name="delivery" @change="pickupChecked">
           Самовывоз
        </label>
        <span v-if="msg">{{ msg }}</span>
        <Courier v-if="checked=='COURIER' && !msg" />
        <Pickup v-if="checked=='PICKUP' && !msg" />
   </div>
</template>

<script>
import axios from 'axios';
import Courier from '@/components/Courier.vue';
import Pickup from '@/components/Pickup.vue';

export default {
    name: 'DeliveryInfo',
    components: {
        Map,
        Courier,
        Pickup,
    },
    data() {
        return {
            checked: null,
            msg: null,
        }
    },
    computed: {
        basket() {
            return this.$store.getters.BASKET
        },
        isAvailableCommonDelivery() {
            const hasCourierDelivery = this.basket.every((product) => product.delivery.includes('courier'));
            const hasPickUpDelivery = this.basket.every((product) => product.delivery.includes('pickup'));
            const res = hasCourierDelivery || hasPickUpDelivery;
            if (!res) {
                this.msg = 'К сожалению, не все товары могут быть доставлены одним способом. Выберите способ доставки для каждого товара по отдельности.';
            }
            return res;
        },
    },
    methods: {
        courierChecked() {
            const hasCourierDelivery = this.basket.every((product) => product.delivery.includes('courier'));
            this.checked = 'COURIER';
            if (!hasCourierDelivery) {
                this.msg='К сожалению, не все товары могут быть доставлены курьером. Выберите другой способ доставки, спасибо.';
                return;
            }
            this.msg = null;
        },

        pickupChecked() {
            const hasPickUpDelivery = this.basket.every((product) => product.delivery.includes('pickup'));
            this.checked = 'PICKUP';
            if (!hasPickUpDelivery) {
                this.msg='К сожалению, не все товары можно забрать со склада. Выберите другой способ доставки, спасибо.';
                return;
            }
            this.msg = null;
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
}
</style>


