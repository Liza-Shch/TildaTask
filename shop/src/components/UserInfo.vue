<template>
    <div class="user-info" @submit="submit">
        <InputField
            type="text"
            label="ФИО"
            name="name"
            autocomplete="name"
            msgError="Введите корректное ФИО"
            ref="inputName"
            placeholder="ФИО"/>
        <InputField
            type="email"
            label="Email"
            name="email"
            autocomplete="email"
            msgError="Введите корректный email"
            ref="inputEmail"
            placeholder="Email"/>
        <inputField
            type="tel"
            label="Телефон"
            name="tel"
            autocomplete="tel"
            msgError="Введите номер телефона вида +79123456789"
            ref="inputTel"
            placeholder="Телефон"
            pattern="[\+]\d{11}"/>
    </div>
</template>

<script>
import InputField from '@/components/InputField.vue';

/**
 * UserInfo - секция информации о покупателе при оформлении покупки
 */
export default {
  name: 'UserInfo',
  components: {
    InputField,
  },
  methods: {
    submit() {
      const name = this.$refs.inputName.submit();
      const email = this.$refs.inputEmail.submit();
      const tel = this.$refs.inputTel.submit();

      if (!(name && email && tel)) {
        return null;
      }

      return {
        name,
        email,
        tel,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.user-info {
    display: grid;
    grid-template-rows: auto;
    grid-gap: 1.5vh;
    background-color: white;
    color: black;
    border-radius: 4px;
    text-align: left;
}
</style>
