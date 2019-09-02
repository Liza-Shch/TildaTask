<template>
      <button class="button" :style="{'background-color': color}" :type="type"
      :form="formID" @click="action">{{ text }}</button>
</template>

<script>

/**
 * Button - primary кнопка
 * props:
 * actoin - коллбек кнопки
 * color - цвет кнопки
 * type - тип кнопки
 * text - надпись на кнопке
 * formID - ID формы, к которой кнопка привязана
 */
export default {
  name: 'Button',
  props: {
    action: { type: Function, required: false, default: null },
    color: { type: String, required: false, default: '#000000' },
    type: { type: String, required: false, default: 'button' },
    text: { type: String, required: true },
    formID: { type: String, required: false, default: null },
  },
};
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

    &:hover {
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    }
}
</style>
