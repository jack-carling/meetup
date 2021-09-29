<template>
  <div id="app">
    <Menu />
  </div>
</template>

<script>
import Menu from './components/Menu.vue';

import { generateEvents } from './utils/events';

export default {
  components: {
    Menu,
  },
  data() {
    return {
      events: [],
    };
  },
  mounted() {
    this.events = generateEvents();
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans:wght@400;700&display=swap');

* {
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}
body {
  background-color: #fefefe;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
