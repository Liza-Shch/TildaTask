<template>
    <div v-if="isShown" class="map">
        <button class="map__button-close" @click="close"></button>
        <div class="map__info" :style="{ 'width': width * 0.4 + 'vw', 'height': height + 'vh'}" >
            <h2>Выбор пункта выдачи</h2>
            <p v-if="!pickupID">Выберите на карте пункт выдачи.</p>
            <div v-if="pickupID" class="map__pickup">
                <big><b>{{ pickup.title }}</b></big>
                <p>{{ pickup.address}}</p>
                <b>{{ pickup.description }}</b>
            </div>
            <Button v-if="pickupID" color="#E44807" text="Выбрать" :action="choosePickup"/>
        </div>
        <yandex-map :coords="focusCoords"
        :style="{ 'width': width * 0.6 + 'vw', 'height': height + 'vh'}"
        :zoom='10' :placemarks="placemarks">
        </yandex-map>
    </div>
</template>

<script>
import { yandexMap } from 'vue-yandex-maps';
import Button from '@/components/Button.vue';

export default {
  name: 'Map',
  components: {
    yandexMap,
    Button,
  },
  props: {
    focusCoords: {
      type: Array,
      required: false,
      default: () => [55.75370903771494, 37.61981338262558],
    },
    width: { type: String, required: false, default: '50' },
    height: { type: String, required: false, default: '50' },
    marks: { type: Array, required: false, default: () => [] },
  },
  data() {
    return {
      isShown: true,
      pickupID: null,
    };
  },
  computed: {
    placemarks() {
      this.$on('map-was-initialized', this.mapInit);
      const markers = this.marks.map((mark) => {
        const newMark = Object.assign({}, mark);
        newMark.balloonTemplate = `
                    <div>
                        <big><b>${mark.title}</b></big>
                        <div>${mark.address}</div>
                        <b>${mark.description}</b>
                    </div>`;
        newMark.callbacks = {
          click: function () {
            this.pickupID = mark.id;
          }.bind(this),
        };
        return newMark;
      });
      return markers;
    },
    pickup() {
      return this.$store.getters.PICKUPS.find(pickup => +pickup.id === +this.pickupID);
    },
  },
  methods: {
    close() {
      this.isShown = false;
      this.$emit('close');
    },
    choosePickup() {
      this.$emit('choosePickup', this.pickupID);
      this.close();
    },
  },
};
</script>

<style lang="scss" scoped>
.map {
    display: flex;
    position: relative;

    &__info {
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 30px;
        box-sizing: border-box;
    }

    &__button-close {
        position: absolute;
        z-index: 1;
        width: 5vh;
        height: 5vh;
        top: 10px;
        right: 10px;
        background-image: url('../assets/close.svg');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    &__pickup {
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;
    }
}
</style>
