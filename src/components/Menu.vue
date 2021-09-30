<template>
  <section>
    <h1>Meetup</h1>
    <div>
      <button>My events</button>
      <span><i class="material-icons">calendar_today</i>{{ attending.length }}</span>
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
  span {
    color: $blue;
    font-weight: 700;
    display: flex;
    margin-right: 1rem;
    margin-left: 2rem;
    i {
      margin-right: 0.5rem;
    }
  }
}
</style>
