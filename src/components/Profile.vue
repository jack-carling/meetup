<template>
  <section>
    <article>
      <h1>My events</h1>
      <img src="@/assets/profile.png" alt="" />
    </article>
    <ul>
      <span class="header">Events attending</span>
      <li v-if="!events.length" class="empty">
        <i class="material-icons">event_note</i>
        <span>No events planned... <a @click="$emit('view', 'default')">Find something to do!</a></span>
      </li>
      <li v-for="event in events" :key="event.index" class="attending">
        <span class="bold">{{ event.date }} @ {{ event.time }}</span>
        <span>{{ event.name }}</span>
        <span>{{ event.location }} • {{ event.street }}</span>
        <i class="material-icons cancel" @click="handleCancel(event.index)">cancel</i>
      </li>
    </ul>
    <div class="divider">
      <i class="material-icons">pending</i><i class="material-icons">pending</i><i class="material-icons">pending</i>
    </div>
    <ul>
      <span class="header">Past events attended</span>
      <li v-for="(event, index) in oldEvents" :key="index" class="old">
        <span class="bold old">{{ event.date }} @ {{ event.time }}</span>
        <Rating :rating="calculateRating(event.rating)" />
        <span class="rating">
          Rating: {{ calculateRating(event.rating).toFixed(1) }} ( {{ votes(event.rating.length) }} )
        </span>
        <span>{{ event.name }}</span>
        <span>{{ event.location }} • {{ event.street }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import Rating from './Rating.vue';

import { generatePastEvents } from '../utils/events';

export default {
  components: {
    Rating,
  },
  props: {
    events: Array,
  },
  data() {
    return {
      oldEvents: [],
    };
  },
  mounted() {
    this.oldEvents = generatePastEvents();
  },
  methods: {
    handleCancel(index) {
      this.$emit('cancel', index);
    },
    calculateRating(ratings) {
      if (!ratings.length) return 0;
      let total = 0;
      for (let rating of ratings) {
        total += rating;
      }
      return total / ratings.length;
    },
    votes(count) {
      const text = count === 1 ? 'vote' : 'votes';
      return `${count} ${text}`;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 1rem;
}
article {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  h1 {
    margin: 0;
    font-size: 2rem;
    line-height: 1;
  }
  img {
    max-height: 100px;
  }
}
ul {
  list-style: none;
  margin: 0;
  padding: 0.5rem 0 0 0;
  position: relative;
  border-top: 1px solid $white;
  border-bottom: 1px solid $white;
}
li {
  display: flex;
  flex-direction: column;
  padding: 1rem 0 1rem 1rem;
  position: relative;
  i.cancel {
    cursor: pointer;
    height: 24px;
    color: $gray;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  i:hover {
    opacity: 0.75;
  }
}
li:not(:first-of-type) {
  border-top: 1px solid $white;
}
li.empty {
  align-items: center;
  margin: 1rem 0;
  i {
    color: $gray;
    margin-bottom: 1rem;
  }
  a {
    cursor: pointer;
    text-decoration: underline;
    color: $blue;
  }
}
div.divider {
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  color: $white;
  i {
    margin: 0 1rem;
  }
}
span.header {
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
span.bold {
  font-weight: 700;
  color: $gray;
}
span.bold.old {
  margin-bottom: 0.5rem;
}
span.rating {
  margin-bottom: 0.5rem;
  font-size: 0.7rem;
}
</style>
