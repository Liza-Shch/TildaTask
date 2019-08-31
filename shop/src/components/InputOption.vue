<template>
    <div class="input-option">
        <label class="input-option__label">{{ label }}</label>
        <input type="text" class="input-option__input" @input="getOptions">
        <ul v-if="isShownOptions" class="input-option__list">
            <li v-for="option in options" class="input-option__option" :key="option.value"
            @click="chooseOption">{{ option }}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'InputOption',
  props: {
    label: { type: String, required: true },
  },
  data() {
    return {
      isShownOptions: false,
      options: [],
      // option: null,
    };
  },
  computed: {
  },
  methods: {
    getOptions(event) {
      const query = event.target.value;
      const instance = axios.create({
        baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/',
        timeout: 1000,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Token 042645573d283b5a10ca964d5db112dd9e0b53be',
        },
      });

      instance.post('address', { query, count: 10 })
        .then((res) => {
          const options = [];
          res.data.suggestions.forEach(option => options.push(option.value));
          this.isShownOptions = true;
          this.options = options;
        })
        .catch(() => null);
    },
    chooseOption(event) {
      this.isShownOptions = false;
      const input = document.querySelector('.input-option__input');
      input.value = event.target.textContent;
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

    &__label {
        margin-bottom: 10px;
        font-weight: lighter;
    }

    &__list {
        position: absolute;
        top: 100%;
        width: 100%;
        background-color: white;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    }

    &__input {
        padding: 5px;
        font-size: 100%;
        border: 1px solid black;
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
