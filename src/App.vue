<template>
  <div id="app">
    <Menu />
    <Greeting />
    <Events :events="events" :attending="attending" @attend="handleAttending" @cancel="handleCancel" />
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Greeting from './components/Greeting.vue';
import Events from './components/Events.vue';

import { generateEvents } from './utils/events';

export default {
  components: {
    Menu,
    Greeting,
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
    const attending = localStorage.attending ?? '[]';
    this.attending = JSON.parse(attending);
  },
  methods: {
    handleAttending(index) {
      this.attending.push(index);
    },
    handleCancel(index) {
      const remove = this.attending.indexOf(index);
      this.attending.splice(remove, 1);
    },
  },
  watch: {
    attending() {
      localStorage.attending = JSON.stringify(this.attending);
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans:wght@400;700&display=swap');

$blue: #1a659e;
$background: #fefefe;
$white: #eee;

* {
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}
body {
  background-color: $background;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
#app {
  margin-top: 85px;
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
