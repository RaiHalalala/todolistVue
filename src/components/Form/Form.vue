<template>
  <form @submit="addTask" class="Form">
    <input v-model="title" class="Form__input"/>
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
      debugger;
      this.$store.dispatch('fetchAddTask', newTask);
      this.title = '';
    },
  },
  components: {
    Button,
  },
};
</script>

<style lang="scss">
.Form {
  display: flex;
  margin: 10px;
  &__input {
    width: 100%;
  }
}
</style>
