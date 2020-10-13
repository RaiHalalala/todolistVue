<template>
  <ul class="list-group">
    <Task v-for="task in allTasks[0]" :key="task.id" :task="task"/>
    <div class="vt"></div>
    <Task v-for="task in allTasks[1]" :key="task.id" :task="task"/>
    <div class="vt"></div>
    <Task v-for="task in allTasks[2]" :key="task.id" :task="task"/>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import Task from '../Task';

export default {
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

<style lang="scss">
.vt {
  height: 10px;
  width: 100%;
  background-color: aquamarine;
}
</style>
