<template>
  <div>
      <InputOption
        label="Город"
        name="city"
        placeholder="Город"
        @action="getCityOptions"
        optionsStoreName="CITY_OPTIONS"
        ref="City"/>
      <InputOption
        label="Улица"
        name="street"
        placeholder="Улица"
        @action="getStreetOptions"
        optionsStoreName="STREET_OPTIONS"
        ref="Street"/>
      <InputOption
        label="Дом"
        name="house"
        placeholder="Дом"
        @action="getHouseOptions"
        optionsStoreName="HOUSE_OPTIONS"
        ref="House"/>
  </div>
</template>

<script>
import InputOption from '@/components/InputOption.vue';

export default {
  name: 'Courier',
  components: {
    InputOption,
  },
  methods: {
    getCityOptions(payload) {
      this.$store.dispatch('GET_CITY_OPTIONS', payload);
    },
    getStreetOptions(payload) {
      this.$store.dispatch('GET_STREET_OPTIONS', payload);
    },
    getHouseOptions(payload) {
      this.$store.dispatch('GET_HOUSE_OPTIONS', payload);
    },
    submit() {
      const city = this.$refs.City.submit();
      const street = this.$refs.Street.submit();
      const house = this.$refs.House.submit();

      if (!(city && street && house)) {
        return null;
      }

      return {
        city,
        street,
        house,
      };
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
