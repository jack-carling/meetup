<template>
  <section v-if="!events.length" class="error">
    <span>
      <i class="material-icons">error</i>
      No events found, please try another date.
    </span>
  </section>
  <section v-else class="events">
    <article class="event" v-for="(event, index) in events" :key="index">
      <div class="calender">
        <span class="month">{{ formatMonth(event.date) }}</span>
        <span class="day">{{ formatDay(event.date) }}</span>
      </div>
      <div class="info">
        <span><i class="material-icons">event</i>{{ event.name }} @ {{ event.time }}</span>
        <span><i class="material-icons">place</i>{{ event.location }}</span>
        <span><i class="material-icons">place</i>{{ event.street }}</span>
        <button v-if="!attending.includes(index)" @click="$emit('attend', index)">Join</button>
        <button v-else class="cancel" @click="$emit('cancel', index)">Cancel</button>
      </div>
    </article>
  </section>
</template>

<script>
import { format } from 'date-fns';

export default {
  props: {
    events: Array,
    attending: Array,
  },
  methods: {
    formatMonth(date) {
      const year = Number(date.split('/')[2]);
      const month = Number(date.split('/')[1]) - 1;
      return format(new Date(year, month), 'MMM').toUpperCase() + '.';
    },
    formatDay(date) {
      const day = date.split('/')[0];
      return day.padStart('0', 2);
    },
  },
};
</script>

<style lang="scss" scoped>
section.error {
  padding: 1rem;
  span {
    border: 1px solid $white;
    display: block;
    padding: 3rem;
    text-align: center;
    i {
      display: block;
      margin-bottom: 1rem;
      color: $gray;
    }
  }
}
section.events {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem;
}
article.event {
  border: 1px solid $white;
  display: flex;
}
div.calender {
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  span.month {
    background-color: $red;
    border-radius: 0.5rem 0.5rem 0 0;
    padding: 0.1rem 0;
    color: $white;
  }
  span.day {
    background-color: $white;
    padding: 0.7rem 1.5rem;
    font-size: 2rem;
    border-radius: 0 0 0.5rem 0.5rem;
  }
}
div.info {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  span {
    display: flex;
    align-items: center;
    i {
      margin-right: 0.5rem;
      opacity: 0.75;
    }
  }
  span:last-of-type {
    i {
      opacity: 0;
    }
  }
  button {
    margin-top: 1rem;
  }
  button.cancel {
    background-color: $gray;
  }
}

@media screen and (max-width: 800px) {
  section.events {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
