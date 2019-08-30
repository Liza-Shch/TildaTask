<template>
    <form class="checkout">
        <UserInfo />
    </form>
</template>

<script>
import UserInfo from '@/components/UserInfo.vue';

export default {
    name: 'Checkout',
    components: {
        UserInfo
    },
}
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

