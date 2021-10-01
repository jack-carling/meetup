<template>
  <section>
    <span id="header">Upcoming • {{ count }} {{ computedEvent }}</span>
    <button :class="{ highlight: current === 'Show all' }" @click="changeCurrent('Show all')">Show all</button>
    <button :class="{ highlight: current === 'Today' }" @click="changeCurrent('Today')">Today</button>
    <button :class="{ highlight: current === 'Tomorrow' }" @click="changeCurrent('Tomorrow')">Tomorrow</button>
    <button :class="{ highlight: current === 'Upcoming week' }" @click="changeCurrent('Upcoming week')">
      Upcoming week
    </button>
    <button :class="{ highlight: current === 'Specific date' }" @click="changeCurrent('Specific date')">
      Specific date
    </button>
    <input type="date" v-model="date" @change="changeCurrent('Specific date')" />
  </section>
</template>

<script>
import { add, format } from 'date-fns';
export default {
  props: {
    count: Number,
  },
  data() {
    return {
      date: this.initDate(),
      current: 'Show all',
    };
  },
  computed: {
    computedEvent() {
      return this.count === 1 ? 'EVENT' : 'EVENTS';
    },
  },
  methods: {
    initDate() {
      return format(add(new Date(), { days: 1 }), 'yyyy-MM-dd');
    },
    changeCurrent(value) {
      this.current = value;
      switch (value) {
        case 'Show all':
          this.$emit('filter-events', 'all');
          break;
        case 'Today':
          this.$emit('filter-events', 'today');
          break;
        case 'Tomorrow':
          this.$emit('filter-events', 'tomorrow');
          break;
        case 'Upcoming week':
          this.$emit('filter-events', 'week');
          break;
        default: {
          if (!this.date) this.date = this.initDate();
          const date = format(new Date(this.date), 'dd/MM/yyyy');
          this.$emit('filter-events', date);
          break;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  position: relative;
  border-top: 1px solid $white;
  margin: 1rem;
  padding-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
span#header {
  position: absolute;
  top: 0;
  left: 1rem;
  margin: 0;
  transform: translateY(-50%);
  text-transform: uppercase;
  background-color: $background;
  padding: 0 0.5rem;
  color: $gray;
}
</style>
