<template>
    <section class="checkout-section">
        <header class="checkout-section__header">{{ header }}</header>
        <UserInfo v-if="sectionType==='USER_INFO'" ref="UserInfo"/>
        <DeliveryInfo v-if="sectionType === 'DELIVERY_INFO'" ref="DeliveryInfo"/>
        <Payment v-if="sectionType === 'PAYMENT'" ref="Payment"/>
    </section>
</template>

<script>

/**
 * CheckoutSection - секция в заполнении данных о заказе
 * props:
 * header - текст заголовка
 * sectionType - тип секции
 */
export default {
  name: 'CheckoutSection',
  components: {
    UserInfo: () => import('@/components/UserInfo.vue'),
    DeliveryInfo: () => import('@/components/DeliveryInfo.vue'),
    Payment: () => import('@/components/Payment.vue'),
  },
  props: {
    header: { type: String, required: true },
    sectionType: { type: String, required: true },
  },
  methods: {
    submit() {
      if (this.$refs.UserInfo) {
        return this.$refs.UserInfo.submit();
      }

      if (this.$refs.DeliveryInfo) {
        return this.$refs.DeliveryInfo.submit();
      }

      if (this.$refs.Payment) {
        return this.$refs.Payment.submit();
      }

      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
    .checkout-section {
        display: flex;
        flex-direction: column;
        padding: calc(10px + 4vw);
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        background-color: white;
        color: black;
        text-align: left;
        border-radius: 4px;

        &__header {
            font-size: larger;
            font-weight: bold;
            margin-bottom: 4vh;
        }
    }
</style>
