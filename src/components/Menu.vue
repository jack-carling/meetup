<template>
  <section>
    <h1>Meetup</h1>
    <div>
      <button>My events</button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$background: #fefefe;
$blue: #1a659e;

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
div.counter {
  background-color: $background;
  border-radius: 50%;
  margin-left: 0.5rem;
  color: #575757;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
}
</style>
