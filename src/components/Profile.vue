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
      <li v-for="event in events" :key="event.index" class="events">
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
      <li v-for="(event, index) in history" :key="index" class="history">
        <span class="bold history">{{ event.date }} @ {{ event.time }}</span>
        <Rating :rating="event.rating" @vote="handleRating($event, index)" />
        <span>{{ event.name }}</span>
        <span>{{ event.location }} • {{ event.street }}</span>
        <Comments :comments="event.comments" @comment="handleComment($event, index)" />
      </li>
    </ul>
  </section>
</template>

<script>
import Rating from './Rating.vue';
import Comments from './Comments.vue';

import { generateHistory } from '../utils/events';
import { format } from 'date-fns';

export default {
  components: {
    Rating,
    Comments,
  },
  props: {
    events: Array,
  },
  data() {
    return {
      history: [],
    };
  },
  mounted() {
    if (localStorage.history) {
      this.history = JSON.parse(localStorage.history);
    } else {
      this.history = generateHistory();
    }
  },
  methods: {
    handleCancel(index) {
      this.$emit('cancel', index);
    },
    handleRating(payload, index) {
      if (this.history[index].rating.vote) return;

      if (payload === 'thumb_up') this.history[index].rating.like++;
      if (payload === 'thumb_down') this.history[index].rating.dislike++;

      this.history[index].rating.vote = payload;

      this.save();
    },
    handleComment(payload, index) {
      const currentTime = format(new Date(), 'dd/MM/yyyy @ h:mm a');
      this.history[index].comments.unshift({
        comment: payload,
        name: 'You',
        time: currentTime,
      });
      this.save();
    },
    save() {
      localStorage.history = JSON.stringify(this.history);
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
  padding: 1rem;
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
span.bold.history {
  margin-bottom: 0.5rem;
}
</style>
