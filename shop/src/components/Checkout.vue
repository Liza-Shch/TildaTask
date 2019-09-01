<template>
    <form
      class="checkout" action="#" id="formCheckout"
      @submit="(e) => { e.preventDefault(); return false; }">
        <CheckoutSection sectionType="USER_INFO" header="Ваши данные" ref="UserInfo"/>
        <CheckoutSection sectionType="DELIVERY_INFO" header="Доставка" ref="DeliveryInfo"/>
        <CheckoutSection sectionType="PAYMENT" header="Оплата" ref="Payment"/>
    </form>
</template>

<script>
import CheckoutSection from '@/components/CheckoutSection.vue';
import EventBus from '@/eventbus.js';

export default {
  name: 'Checkout',
  components: {
    CheckoutSection,
  },
  created() {
    EventBus.$on('submit-checkout-form', this.submit);
  },
  beforeDestroy() {
    EventBus.$off('submit-checkout-form', this.submit);
  },
  methods: {
    submit() {
      const user = this.$refs.UserInfo.submit();
      const delivery = this.$refs.DeliveryInfo.submit();
      const payment = this.$refs.Payment.submit();

      if (!(user && delivery && payment)) {
        return null;
      }

      const data = {
        user,
        delivery,
        payment,
      };

      console.log(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.checkout {
    display: grid;
    grid-gap: 40px;
    grid-template-rows: auto;

    &__user-info {

    }
}
</style>
