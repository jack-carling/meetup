<template>
  <section>
    <article>
      <h1>Welcome! There are so many things to do!</h1>
      <span>
        Join an event to meet people, make friends, find support, grow a business, and explore your interests. Thousands
        of events are happening every day, both online and in person!
      </span>
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
section {
  min-height: 50vh;
  background-image: url('~@/assets/background.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right bottom;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
article {
  margin-left: 2rem;
  max-width: 50vw;
  span {
    display: block;
    margin-top: 2rem;
  }
}
h1 {
  margin: 0;
  font-size: 2rem;
  line-height: 1;
}
@media screen and (max-width: 700px) {
  article {
    max-width: 70vw;
  }
}
@media screen and (max-width: 550px) {
  article {
    max-width: 100vw;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
</style>
