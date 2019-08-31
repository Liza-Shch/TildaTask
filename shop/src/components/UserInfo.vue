<template>
    <div class="user-info">
        <h3>Ваши данные</h3>
        <InputField type="text" label="ФИО" autocomplete="name" />
        <InputField type="email" label="Email" autocomplete="email" />
        <inputField type="tel" label="Телефон" autocomplete="tel" />
    </div>
</template>

<script>
import InputField from '@/components/InputField.vue';

export default {
  name: 'UserInfo',
  components: {
    InputField,
  },
};
</script>

<style lang="scss" scoped>
.user-info {
    display: grid;
    grid-template-rows: auto;
    grid-gap: 20px;
    padding: 30px;
    background-color: white;
    color: black;
    border-radius: 4px;
    text-align: left;
}
</style>
