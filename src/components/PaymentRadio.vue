<template>
    <div>
        <fieldset :id="'payment-radio' + id" class="payment-radio">
        <label :for="'cardRadioButton' + id" class="payment-radio__field">
            <input type="radio" value="card" :id="'cardRadioButton' + id" :name="'payment' + id"
            @change="cardChecked" required>
            Оплата онлайн
        </label>
        <label :for="'cashRadioButton' + id">
            <input type="radio" value="cash" :id="'cashRadioButton' + id" :name="'payment' + id"
            @change="cashChecked" >
            Оплата при получении
            </label>
        </fieldset>
        <span v-if="msg">{{ msg }}</span>
    </div>
</template>

<script>
/**
 * PaymentRadio - выбор оплаты товара
 * props:
 * id - id продукта или 0, если оплата выбирается для всего заказа
 * products - продукты, для которых выбирается оплата
 */
export default {
  name: 'PaymentRadio',
  data() {
    return {
      checked: null,
      msg: null,
    };
  },
  props: {
    id: { type: Number, required: false, default: 0 },
    products: { type: Array, required: true },
  },
  methods: {
    cardChecked() {
      const hasCardPayment = this.products.every(product => product.payment.includes('card'));
      if (!hasCardPayment) {
        this.checked = null;
        this.msg = 'К сожалению, не все товар(ы) можно оплатить по карте. Выберите другой способ оплаты, спасибо.';
        return;
      }
      this.msg = null;
      this.checked = 'card';
    },
    cashChecked() {
      const hasCashPayment = this.products.every(product => product.payment.includes('cash'));
      if (!hasCashPayment) {
        this.checked = null;
        this.msg = 'К сожалению, не все товар(ы) можно оплатить при получении. Выберите другой способ оплаты, спасибо.';
        return;
      }
      this.msg = null;
      this.checked = 'cash';
    },
    submit() {
      return this.checked;
    },
  },
};
</script>

<style lang="scss" scoped>
    .payment-radio {
        display: flex;;
        flex-direction: column;
        border: 0;
        margin: 0;
        padding: 0;
        margin-bottom: 2.5vh;

        &__field {
            margin-bottom: 2vh;
        }
    }
</style>
