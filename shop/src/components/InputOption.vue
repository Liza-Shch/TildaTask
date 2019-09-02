<template>
    <div class="input-option">
        <InputField
            :label="label"
            :name="name"
            :placeholder="placeholder"
            :action="getOptions.bind(this)"
            ref="Input"
        />
        <ul v-if="isShownOptions" class="input-option__list">
            <li v-for="option in options" class="input-option__option" :key="option.value"
            @click="chooseOption">{{ option }}</li>
        </ul>
    </div>
</template>

<script>
import InputField from '@/components/InputField.vue';

/**
 * InputOption - поле ввода с подсказками в виде выпадающего списка
 * props:
 * label - надпись
 * name - название поля
 * placeholder - подсказка внутри поля ввода
 * optionsStoreName - название геттера подсказок из хранилища
 */
export default {
  name: 'InputOption',
  components: {
    InputField,
  },
  props: {
    label: { type: String, required: true },
    name: { type: String, required: true },
    placeholder: { type: String, required: true },
    optionsStoreName: { type: String, required: true },
  },
  data() {
    return {
      isShownOptions: false,
      options: [],
    };
  },
  methods: {
    getOptions(event) {
      const payload = {
        query: event.target.value,
      };
      this.$emit('action', payload);
      this.isShownOptions = true;
      this.options = this.$store.getters[this.optionsStoreName];
    },
    chooseOption(event) {
      this.isShownOptions = false;
      this.$refs.Input.setValue(event.target.textContent);
    },
    submit() {
      return this.$refs.Input.submit();
    },
  },
};
</script>

<style lang="scss" scoped>
.input-option {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;

    &__list {
        position: absolute;
        z-index: 1;
        top: calc(100% - 1em);
        width: 100%;
        background-color: white;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    }

    &__option {
        padding: 5px;

        &:hover {
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        }
    }
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
</style>
