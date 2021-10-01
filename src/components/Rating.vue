<template>
  <div class="rating">
    <div
      class="star"
      ref="star1"
      @mouseover="highlightStars(1)"
      @mouseleave="undoHighlight"
      :style="{ background: getStarValue(1) }"
    >
      <i class="material-icons">star</i>
    </div>
    <div
      class="star"
      ref="star2"
      @mouseover="highlightStars(2)"
      @mouseleave="undoHighlight"
      :style="{ background: getStarValue(2) }"
    >
      <i class="material-icons">star</i>
    </div>
    <div
      class="star"
      ref="star3"
      @mouseover="highlightStars(3)"
      @mouseleave="undoHighlight"
      :style="{ background: getStarValue(3) }"
    >
      <i class="material-icons">star</i>
    </div>
    <div
      class="star"
      ref="star4"
      @mouseover="highlightStars(4)"
      @mouseleave="undoHighlight"
      :style="{ background: getStarValue(4) }"
    >
      <i class="material-icons">star</i>
    </div>
    <div
      class="star"
      ref="star5"
      @mouseover="highlightStars(5)"
      @mouseleave="undoHighlight"
      :style="{ background: getStarValue(5) }"
    >
      <i class="material-icons">star</i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rating: Number,
  },
  methods: {
    getStarValue(star) {
      const orange = '#ffa500';
      const gray = '#575757';

      let percentage = 0;
      if (this.rating >= star) percentage = 100;
      if (Math.floor(this.rating) === star - 1) {
        percentage = Math.round((this.rating % 1) * 100);
      }

      if (percentage === 100) {
        return orange;
      } else if (percentage === 0) {
        return gray;
      }

      return `linear-gradient(90deg, ${orange} ${percentage}%, ${gray} ${percentage}%)`;
    },
    highlightStars(stars) {
      for (let i = 1; i <= 5; i++) {
        if (stars >= i) {
          this.$refs['star' + i].classList.add('orange');
          this.$refs['star' + i].classList.remove('gray');
        } else {
          this.$refs['star' + i].classList.add('gray');
        }
      }
    },
    undoHighlight() {
      for (let i = 1; i <= 5; i++) {
        this.$refs['star' + i].classList.remove('orange');
        this.$refs['star' + i].classList.remove('gray');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
div.rating {
  display: flex;
  div.star {
    cursor: pointer;
    background-clip: text !important;
    -webkit-background-clip: text !important;
    i {
      color: transparent;
    }
  }
  div.orange {
    i {
      color: $orange;
    }
  }
  div.gray {
    i {
      color: $gray;
    }
  }
}
</style>
