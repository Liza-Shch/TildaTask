<template>
   <div class="delivery-radio">
       <fieldset :id="'delivery' + id" class="delivery-radio__fieldset">
        <label :for="'deliveryRadioButton' + id" class="delivery-radio__field">
            <input
              type="radio"
              value="courier"
              :id="'deliveryRadioButton' + id"
              :name="'delivery' + id"
              @change="courierChecked" required>
            Доставка курьером
        </label>
        <label :for="'pickupRadioButton' + id">
            <input
              type="radio"
              value="pickup"
              :id="'pickupRadioButton' + id"
              :name="'delivery' + id"
              @change="pickupChecked">
            Самовывоз
          </label>
       </fieldset>
        <span v-if="msg">{{ msg }}</span>
        <Courier v-if="checked=='COURIER' && !msg" ref="Courier"/>
        <Pickup v-if="checked=='PICKUP' && !msg" ref="Pickup"/>
   </div>
</template>

<script>
import Courier from '@/components/Courier.vue';
import Pickup from '@/components/Pickup.vue';

/**
 * DeliveryRadio - выбор способа доставки
 * props:
 * id - id продукта или 0, если доставка выбирается для всего заказа
 * products - продукты, для которых выбирается доставка
 */
export default {
  name: 'DeliveryRadio',
  components: {
    Courier,
    Pickup,
  },
  props: {
    id: { type: Number, required: false, default: 0 },
    products: { type: Array, required: true },
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
    submit() {
      if (this.$refs.Courier) {
        const courier = this.$refs.Courier.submit();
        if (!courier) {
          return null;
        }

        return {
          courier,
        };
      }

      if (this.$refs.Pickup) {
        const pickup = this.$refs.Pickup.submit();
        if (!pickup) {
          return null;
        }

        return {
          pickup,
        };
      }

      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
.delivery-radio {
  display: grid;
  grid-template-rows: auto;
  grid-gap: 2.5vh;
  width: 100%;

  &__fieldset {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    border: 0;
  }

  &__field {
    margin-bottom: 1.5vh;
  }
}
</style>
