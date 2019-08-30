<template>
    <button class="button" :style="{'background-color': color}" :type="type" @click="action">{{ text }}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        action: {type: Function, required: true},
        color: {type: String, required: false, default: '#000000'},
        type: {type: String, required: false, default: 'button'},
        text: {type: String, required: true}
    }
}
</script>


<style lang="scss" scoped>
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    min-width: calc(10vw + 10px);
    min-height: calc(5vh + 5px);
    color: white;
    border-radius: 4px;
    border: none;
    font-size: larger;
}
</style>
