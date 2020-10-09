<template>
  <ul>
    <Task v-for="task in allTasks" :key="task.id" :title="task.title"/>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import Task from '../Task';

export default {
  name: 'taskList',
  // вариант обращения напрямую, но можно через helpers
  // computed: {
  //   allTasks() {
  //     return this.$store.getters.allTasks;
  //   },
  // },
  computed: mapGetters(['allTasks']),
  async mounted() {
    this.$store.dispatch('fetchTasks');
  },
  components: {
    Task,
  },
};
</script>
