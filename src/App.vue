<template>
  <div id="app">
    <Menu :attending="attending" @view="changeView" />
    <template v-if="view === 'default'">
      <Greeting />
      <FilterEvents :count="eventsCount" @filter-events="handleFilter" />
      <Events :events="eventsFilter" :attending="attending" @attend="handleAttending" @cancel="handleCancel" />
    </template>
    <template v-else>
      <Profile />
    </template>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Greeting from './components/Greeting.vue';
import FilterEvents from './components/FilterEvents.vue';
import Events from './components/Events.vue';
import Profile from './components/Profile.vue';

import { generateEvents } from './utils/events';
import { add, format } from 'date-fns';

export default {
  components: {
    Menu,
    Greeting,
    FilterEvents,
    Events,
    Profile,
  },
  data() {
    return {
      events: [],
      attending: [],
      eventsFilter: [],
      view: 'default',
    };
  },
  computed: {
    eventsCount() {
      return this.eventsFilter.length;
    },
  },
  mounted() {
    this.events = generateEvents();
    const attending = localStorage.attending ?? '[]';
    this.attending = JSON.parse(attending);
    this.eventsFilter = [...this.events];
  },
  methods: {
    handleAttending(index) {
      this.attending.push(index);
    },
    handleCancel(index) {
      const remove = this.attending.indexOf(index);
      this.attending.splice(remove, 1);
    },
    changeView(view) {
      this.view = view;
    },
    handleFilter(type) {
      switch (type) {
        case 'all':
          this.eventsFilter = [...this.events];
          break;
        case 'today': {
          const today = format(new Date(), 'dd/MM/yyyy');
          this.eventsFilter = this.events.filter((event) => event.date === today);
          break;
        }
        case 'tomorrow': {
          const tomorrow = format(add(new Date(), { days: 1 }), 'dd/MM/yyyy');
          this.eventsFilter = this.events.filter((event) => event.date === tomorrow);
          break;
        }
        case 'week': {
          const week = [];
          for (let i = 0; i < 7; i++) {
            week.push(format(add(new Date(), { days: i }), 'dd/MM/yyyy'));
          }
          this.eventsFilter = this.events.filter((event) => week.includes(event.date));
          break;
        }
        default:
          this.eventsFilter = this.events.filter((event) => event.date === type);
          break;
      }
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
  padding-top: 85px;
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
