<template>
    <div class="field">
        <label class="field__label">{{ label }}</label>
        <input class="field__input" :type="type" :autocomplete="autocomplete">
    </div>
</template>

<script>
export default {
    name: 'InputField',
    props: {
        label: { type: String, required: true },
        type: { type: String, required: true },
        autocomplete: { type: String, required: false, default: 'off' } 
    }
}
</script>

<style lang="scss" scoped>
.field {
    display: grid;
    grid-template-rows: auto;
    grid-gap: 5px;

    &__input {
         padding: 5px;
        border: 1px solid black;
        font-size: 100%;
    }

    &__label {
        font-weight: lighter;
    }
}
</style>


