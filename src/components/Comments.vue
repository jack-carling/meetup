<template>
  <div class="comments">
    <div class="menu">
      <a @click="handleView('view')">{{ commentsText }}</a> ({{ comments.length }})
      <span v-if="!hasCommented">
        • <a @click="handleView('add')">{{ addCommentText }}</a>
      </span>
    </div>
    <ul v-if="view === 'view'">
      <li v-for="(comment, index) in comments" :key="index">
        <span class="bold">{{ comment.name }} ({{ comment.time }}):</span><span>{{ comment.comment }}</span>
      </li>
    </ul>
    <div class="add" v-if="view === 'add'">
      <input :class="{ error: error }" type="text" v-model="input" ref="input" @keyup.enter="handleSubmit" />
      <button @click="handleSubmit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments: Array,
  },
  data() {
    return {
      view: 'none',
      input: '',
      error: false,
    };
  },
  computed: {
    commentsText() {
      return this.view === 'view' ? 'Hide comments' : 'View comments';
    },
    addCommentText() {
      return this.view === 'add' ? 'Cancel' : 'Add a comment';
    },
    hasCommented() {
      return this.comments.filter((comment) => comment.name === 'You').length === 0 ? false : true;
    },
  },
  methods: {
    handleView(view) {
      if (this.view !== view) {
        this.view = view;
      } else {
        this.view = 'none';
      }
      if (this.view === 'add') {
        this.$nextTick(() => {
          this.$refs.input.focus();
        });
      }
    },
    handleSubmit() {
      if (!this.input.trim()) {
        this.error = true;
        return;
      }
      this.$emit('comment', this.input);
      this.view = 'view';
    },
  },
  watch: {
    input() {
      this.error = false;
    },
  },
};
</script>

<style lang="scss" scoped>
div.comments {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  a {
    cursor: pointer;
    text-decoration: underline;
    color: $blue;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    span.bold {
      color: $gray;
      font-weight: 700;
    }
  }
}
div.add {
  margin: 1rem 0;
  display: flex;
  align-items: center;
  button {
    margin-left: 1rem;
  }
  input {
    border: 1px solid $white;
    padding: 0.5rem;
    width: 100%;
    outline: none;
    transition: all 1s ease;
  }
  input.error {
    border: 1px solid $red !important;
  }
  input:focus {
    border: 1px solid $gray;
  }
}
</style>
