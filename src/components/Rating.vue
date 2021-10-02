<template>
  <div>
    <div class="rating">
      <div class="bar">
        <div class="enhance"></div>
        <div class="green" :style="{ width: percentage }"></div>
      </div>
      <div class="vote" @click="$emit('vote', 'thumb_up')">
        <i class="material-icons" :class="{ green: rating.vote === 'thumb_up' }">thumb_up</i>
      </div>
      <div class="vote" @click="$emit('vote', 'thumb_down')">
        <i class="material-icons" :class="{ red: rating.vote === 'thumb_down' }">thumb_down</i>
      </div>
    </div>
    <span class="rating">{{ likes }} out of {{ total }} people liked this event</span>
  </div>
</template>

<script>
export default {
  props: {
    rating: Object,
  },
  computed: {
    likes() {
      return this.rating.like;
    },
    total() {
      return this.rating.like + this.rating.dislike;
    },
    percentage() {
      return Math.round((this.likes / this.total) * 100) + '%';
    },
  },
};
</script>

<style lang="scss">
div.rating {
  display: flex;
  align-items: center;
  height: 30px;
  div.vote {
    cursor: pointer;
    height: 100%;
    width: 30px;
    border: 1px solid $white;
    display: grid;
    place-items: center;
    margin-left: 0.5rem;
    flex-shrink: 0;
  }
  div.vote:hover {
    i {
      opacity: 0.75;
    }
  }
  i {
    color: $gray;
    font-size: 20px;
  }
  i.green {
    color: $green;
  }
  i.red {
    color: $red;
  }
}
div.bar {
  width: 300px;
  height: 100%;
  background-color: $red;
  border: 1px solid $white;
  position: relative;
  div.enhance {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: rgba($color: $white, $alpha: 0.2);
  }
  div.green {
    background-color: $green;
    height: 100%;
    transition: width 0.3s linear;
  }
}
span.rating {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.7rem;
}
</style>
