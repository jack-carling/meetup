<template>
  <div id="app">
    <Menu />
    <Events :events="events" :attending="attending" @attend="handleAttending" />
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Events from './components/Events.vue';

import { generateEvents } from './utils/events';

export default {
  components: {
    Menu,
    Events,
  },
  data() {
    return {
      events: [],
      attending: [],
    };
  },
  mounted() {
    this.events = generateEvents();
  },
  methods: {
    handleAttending(index) {
      this.attending.push(index);
    },
  },
  watch: {
    attending() {
      // Update localStorage
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans:wght@400;700&display=swap');

$white: #eee;
$blue: #1a659e;

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
button {
  cursor: pointer;
  font-weight: 700;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: $blue;
  color: $white;
  border-radius: 999px;
  border: none;
  outline: none;
  i {
    margin-left: 0.2rem;
    opacity: 0.1;
  }
}
button:hover {
  opacity: 0.75;
}
</style>
