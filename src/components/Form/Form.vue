<template>
  <form @submit="addTask">
    <input v-model="title"/>
    <Button isPrimary>ADD</Button>
  </form>
</template>

<script>
import { format } from 'date-fns';
import Button from '../Button';

export default {
  data() {
    return {
      title: '',
    };
  },
  methods: {
    addTask(e) {
      e.preventDefault();
      const newTask = {
        title: this.title,
        active: false,
        favorite: false,
        iconId: 1,
        dateOfCreat: format(new Date(), 'yyyy-MM-dd'),
      };
      this.$store.dispatch('fetchAddTask', newTask);
      this.title = '';
    },
  },
  components: {
    Button,
  },
};
</script>
