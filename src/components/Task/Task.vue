<template>
  <li class="Task list-group-item d-flex">
    <div>
      {{task.title}}
    </div>
    <div class="d-flex">
      <Button isIcon  @click="onRemuveTask">
        <IconClose/>
      </Button>
      {{task.dateOfCreat}}
    </div>
  </li>
</template>

<script>
import Button from '../Button';
import IconClose from '../icons/IconClose';

export default {
  props: {
    task: Object,
  },
  components: {
    Button, IconClose,
  },
  methods: {
    onRemuveTask() {
      this.$store.dispatch('fetchRemuveTask', this.task.id);
    },
  },
};
</script>

<style lang="scss">
.Task {
  justify-content: space-between;
}
</style>
