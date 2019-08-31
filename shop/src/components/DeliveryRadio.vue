<template>
   <div class="delivery-radio">
       <fieldset :id="'delivery' + id">
        <label :for="'deliveryRadioButton' + id">
            <input type="radio" value="courier" :id="'deliveryRadioButton' + id" :name="'delivery' + id"
            @change="courierChecked">
            Доставка курьером
        </label>
        <label :for="'pickupRadioButton' + id">
            <input type="radio" value="pickup" :id="'pickupRadioButton' + id" :name="'delivery' + id"
            @change="pickupChecked">
            Самовывоз
          </label>
       </fieldset>
        <span v-if="msg">{{ msg }}</span>
        <Courier v-if="checked=='COURIER' && !msg" />
        <Pickup v-if="checked=='PICKUP' && !msg" />
   </div>
</template>

<script>
import Courier from '@/components/Courier.vue';
import Pickup from '@/components/Pickup.vue';

export default {
  name: 'DeliveryRadio',
  components: {
    Courier,
    Pickup,
  },
  props: {
    id: { type: Number, required: false, default: 0 },
    products: { type: Array, required: true }
  },
  data() {
    return {
      checked: null,
      msg: null,
    };
  },
  methods: {
    courierChecked() {
      const hasCourierDelivery = this.products.every(product => product.delivery.includes('courier'));
      this.checked = 'COURIER';
      if (!hasCourierDelivery) {
        this.msg = 'К сожалению, не все товар(ы) могут быть доставлены курьером. Выберите другой способ доставки, спасибо.';
        return;
      }
      this.msg = null;
    },

    pickupChecked() {
      const hasPickUpDelivery = this.products.every(product => product.delivery.includes('pickup'));
      this.checked = 'PICKUP';
      if (!hasPickUpDelivery) {
        this.msg = 'К сожалению, не все товар(ы) можно забрать со склада. Выберите другой способ доставки, спасибо.';
        return;
      }
      this.msg = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.delivery-radio {
  display: grid;
  grid-template-rows: auto;
  grid-gap: 20px;
}
</style>
