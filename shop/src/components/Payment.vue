<template>
    <div class="payment">
        <h2>Способ оплаты</h2>
        <fieldset id="payment">
        <label for="cardRadioButton">
            <input type="radio" value="card" id="cardRadioButton" name="payment"
            @change="cardChecked">
            Оплата онлайн
        </label>
        <label for="cashRadioButton">
            <input type="radio" value="cash" id="cashRadioButton" name="payment">
            Оплата при получении
          </label>
       </fieldset>
    </div>
</template>

<script>
export default {
    name: 'Payment',
    methods: {
        cardChecked() {
            console.log('card')
        },
    }
}
</script>

<style lang="scss" scoped>
    .payment {
        display: flex;
        flex-direction: column;
        padding: 20px;
    }
</style>


