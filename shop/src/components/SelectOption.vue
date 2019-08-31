<template>
    <div class="select-option">
        <label class="select-option__label">{{ label }}</label>
        <button type="button" class="select-option__select" @click="showHideOptions">{{ chosenOption }}</button>
        <ul v-if="isShownOptions" :v-for="option in options">
            <li @click="chooseOption">{{ option }}</li>
        </ul>
</template>

<script>
export default {
    name:'SelectOption',
    props: {
        label: { type: String, required: true },
        options: { type: Array, required: true },
        chosenOption: { type: String, required: true }
    },
    data() {
        return {
            isShownOptions: false,
        }
    },
    methods: {
        showHideOptions() {
            if (isShownOptions) {
                this.isShownOptions = false;
            } else {
                this.isShownOptions = true;
            }
        },
        chooseOption(target) {
            console.log(target);
            // this.chosenOption = 
        }
    }
}
</script>

<style lang="scss" scoped>
.select-option {
    display: flex;
    flex-direction: column;

    &__label {
        margin-bottom: 10px;
    }

    &__select {
        padding: 5px;
    }

    &__option {
        
    }
}
</style>


