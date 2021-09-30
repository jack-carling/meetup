<template>
  <section>
    <h1>Meetup</h1>
    <div>
      <span id="home" @click="$emit('view', 'default')"><i class="material-icons">home</i></span>
      <button @click="$emit('view', 'default')">Home</button>
      <button @click="$emit('view', 'profile')">My events</button>
      <span id="events" @click="$emit('view', 'profile')">
        <i class="material-icons">calendar_today</i>{{ attending.length }}
      </span>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    attending: Array,
  },
};
</script>

<style lang="scss" scoped>
section {
  width: 100vw;
  height: 85px;
  padding: 1rem;
  background-color: $background;
  border-bottom: 1px solid $blue;
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h1 {
  font-family: 'Lobster', cursive;
  margin: 0;
  font-size: 2.5rem;
  color: $blue;
}
div {
  display: flex;
  align-items: center;
  button {
    margin-right: 1rem;
  }
  span#home {
    display: none;
    i {
      font-size: 30px;
    }
  }
  span {
    cursor: pointer;
    color: $blue;
    font-weight: 700;
    display: flex;
    align-items: center;
    margin: 0 1rem;
    i {
      margin-right: 0.5rem;
    }
  }
}
@media screen and (max-width: 500px) {
  span {
    display: flex !important;
  }
  button {
    display: none;
  }
}
</style>
