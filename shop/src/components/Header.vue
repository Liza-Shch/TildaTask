<template>
    <div class='header'>
        <h1 class='header__title header__title_main'> {{mainTitle}} </h1>
        <h2 class='header__title header__title_sub' v-if=subTitle> {{subTitle}} </h2>
        <div class='header__img'></div>
    </div>
</template>

<script>
export default {
    name: "ShopHeader",
    props: {
        mainTitle: {type: String, required: true},
        subTitle: {type: String, required: false}
    }
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;

    &__title {
        text-align: left;
        width: fit-content;
        height: fit-content;
        font-family: 'Satisfy, Helvetica';
        padding: 0;
        margin: 0;

        &_main {
            font-size: calc(10px + 20vw);
        }

        &_sub {
            font-size: calc(10px + 4vw);
            font-weight: lighter;
        }
    }

    &__img {
        height: 100%;
        width: 60%;
        background-image: url('../assets/mango.png');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        right: 0;
    }
}
</style>

