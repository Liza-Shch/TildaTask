<template>
    <div class="pickup">
        <div v-if="mapShow" class="pickup__map">
            <Map :focusCoords="focusCoords" :width="width" :height="height" :marks="marks"
            @close="closeMap" @choosePickup="choosePickup"/>
        </div>
        <button class="pickup__button" @click="openMap">Выбрать пункт самовывоза</button>
        <div v-if="pickup" class="pickup__info">
          <b>{{ pickup.title }}</b>
          <div>{{ pickup.description }}</div>
          <i>{{ pickup.address }}</i>
        </div>
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
    openMap() {
      this.mapShow = true;
    },
    choosePickup(pickupID) {
      this.pickup = this.marks.find(pickup => +pickup.id === +pickupID);
    },
    submit() {
      if (!this.pickup) {
        return null;
      }

      return {
        id: this.pickup.id,
        title: this.pickup.title,
        address: this.pickup.address,
        description: this.pickup.description,
        coords: this.pickup.coords,
      };
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

        &__info {
          display: grid;
          grid-template-rows: auto;
          grid-gap: 1vh;
        }

        &__button {
          margin: 0;
          border: 1px solid #9C9C9C;
          padding: 1vw;
          margin-bottom: 1vh;
          font-size: 100%;
          border-radius: 4px;
          box-sizing: border-box;

          &:hover {
            background-color: #9C9C9C;
            color: white;
          }
        }
    }
</style>
