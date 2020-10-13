<template>
  <form @submit="addTask" class="Form">
    <input class="Form__input" :class="{ 'Form__input--error': $v.title.$error }" v-model.trim="title" @input="setTitle($event.target.value)" />
    <Button isPrimary>ADD</Button>
  </form>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
import { format } from 'date-fns';
import Button from '../Button';

export default {
  data() {
    return {
      title: '',
    };
  },
  validations: {
    title: {
      required,
      minLength: minLength(4),
    },
  },
  methods: {
    setTitle(value) {
      this.title = value;
      this.$v.title.$touch();
    },
    addTask(e) {
      e.preventDefault();
      const newTask = {
        title: this.title.trim(),
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
    &--error {
      border: 1x solid brown;
    }
  }
}
</style>
