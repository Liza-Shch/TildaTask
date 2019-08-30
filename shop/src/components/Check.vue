<template>
    <div class="check">
        <Button class="check__button" text='Перейти к оформлению' color='#E44807' :action="goToCheckout"/>
        <div class="check__total">
            <p class="check__text">Общая стоимость</p>
            <b class="check__price">{{ total }}руб.</b>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
    name: 'Check',
    components: {
        Button,
    },
    props: {
        stage: { type: Number, required: true },
    },
    computed: {
        total() {
            const basket = this.$store.getters.BASKET;
            let sum = 0;
            for (let product of basket) {
                sum += product.currentCount * product.price;
            }

            return sum
        }
    },
    methods: {
        goToCheckout() {
            this.$emit('nextStage')
            console.log('ok');
        }
    }
}
</script>

<style lang="scss" scoped>
.check {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    color: black;
    height: fit-content;

    &__button {
    }

    &__total {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        align-items: flex-end;
    }

    &__text {
        font-size: larger;
        width: min-content;
        text-align: left;
    }

    &__price {
        font-size: larger;
    }
}

p {
    margin: 0;
}
</style>


