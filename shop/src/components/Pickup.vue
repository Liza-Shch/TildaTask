<template>
    <div class="pickup">
        <div v-if="mapShow" class="pickup__map">
            <Map :focusCoords="focusCoords" :width="width" :height="height" :marks="marks"
            @close="closeMap" @choosePickup="choosePickup"/>
        </div>
        <b v-if="pickup">{{ pickup.address }}</b>
    </div>
</template>

<script>
import Map from '@/components/Map.vue';

export default {
  name: 'Pickup',
  components: {
    Map,
  },
  data() {
    return {
      mapShow: true,
      pickup: null,
      focusCoords: [55.75370903771494, 37.61981338262558],
      width: '80',
      height: '80',
      marks: this.$store.getters.PICKUPS,
    };
  },
  beforeCreate() {
    this.$store.dispatch('INIT_PICKUPS');
  },
  methods: {
    closeMap() {
      this.mapShow = false;
    },
    choosePickup(pickupID) {
      this.pickup = this.marks.find(pickup => +pickup.id === +pickupID);
    },
  },
};
</script>

<style lang="scss" scoped>
    .pickup {
        &__map {
            position: fixed;
            left: 10%;
            top: 10%;
        }
    }
</style>
