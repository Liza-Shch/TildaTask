<template>
  <div id="app">
    <Basket emptyColor="#ffffff" fullColor="#E44807"/>
    <router-view/>
  </div>
</template>

<script>
import Basket from '@/components/Basket.vue';

/**
 * App - основной компонент приложения
 */
export default {
  name: 'App',
  components: {
    Basket,
  }
};

</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  position: relative;
  font-family: 'MS Sans Serif', Geneva, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #FCB63A;
  padding: 0;
  margin: 0;
  min-height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: calc(10px + 5vw);
}

body {
  margin: 0;
  height: 100vh;
  width: 100vw;
}

</style>
