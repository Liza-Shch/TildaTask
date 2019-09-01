<template>
    <div class="field">
        <label class="field__label">{{ label }}</label>
        <input
            class="field__input"
            :type="type"
            :name="name"
            :autocomplete="autocomplete"
            :required="required"
            :placeholder="placeholder"
            :pattern="pattern"
            @input="action">
        <span class="field__msg">{{ msgError }}</span>
    </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    label: { type: String, required: true },
    type: { type: String, required: false, default: 'text' },
    name: { type: String, required: true },
    autocomplete: { type: String, required: false, default: 'off' },
    required: { type: Boolean, required: false, default: true },
    msgError: { type: String, required: false, default: '' },
    placeholder: { type: String, required: true },
    pattern: { type: String, required: false },
    action: { type: Function, required: false, default: () => {} },
  },
  computed: {
    input() {
      return this.$el.querySelector('input');
    },
    msg() {
      return this.$el.querySelector('.field__msg');
    },
  },
  methods: {
    setValue(payload) {
      this.input.value = payload;
    },
    isValid() {
      if (!this.input.validity.valid) {
        return false;
      }
      return true;
    },
    submit() {
      if (!this.isValid()) {
        return null;
      }

      return this.input.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.field {
    display: grid;
    grid-template-rows: auto;
    grid-gap: 5px;

    &__input {
        padding: 10px;
        border-radius: 4px;
        border: 1px solid #9C9C9C;
        font-size: 100%;
    }

    &__label {
        font-weight: lighter;
    }

    &__msg {
        font-size: small;
        color: red;
        visibility: hidden;
        height: 1em;
    }
}

input:valid:not(:placeholder-shown) {
    border-color: green;
}

input:invalid:not(:placeholder-shown) {
    border-color: red;
}

input:invalid:not(:placeholder-shown) +
.field__msg {
    visibility: unset;
}

</style>
