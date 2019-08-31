<template>
    <form class="checkout">
        <UserInfo />
        <DeliveryInfo />
        <payment />
    </form>
</template>

<script>
import UserInfo from '@/components/UserInfo.vue';
import DeliveryInfo from '@/components/DeliveryInfo.vue';
import Payment from '@/components/Payment.vue';

export default {
  name: 'Checkout',
  components: {
    UserInfo,
    DeliveryInfo,
    Payment,
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
