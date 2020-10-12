<template>
  <form @submit="addTask">
    <input v-model="title"/>
    <button>ADD</button>
  </form>
</template>

<script>

export default {
  data() {
    return {
      title: '',
    };
  },
  methods: {
    addTask(e) {
      e.preventDefault();
      console.log(this.title);
      this.title = '';
    },
  },
};
</script>
