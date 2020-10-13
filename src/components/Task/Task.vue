<template>
  <li class="Task list-group-item d-flex">
    <Button isIcon  @click="onRemuveTask" class="Task__close">
      <IconClose/>
    </Button>
    <div >
      <div class="Task__content-left">
        <input
          type="checkbox"
          id="checkbox"
          v-model="checked"
          @change="onChangeTask('completed', !task.completed)">
        <label for="checkbox"></label>
        <div>
          {{task.title}}
        </div>
      </div>
      <div>
        {{task.dateOfCreat}}
      </div>
    </div>
    <Button isIcon @click="onChangeTask('favorite', !task.favorite)" >
      <IconFavorite :active="task.favorite"/>
    </Button>
  </li>
</template>

<script>
import Button from '../Button';
import IconClose from '../icons/IconClose';
import IconFavorite from '../icons/IconFavorite';

export default {
  data() {
    return {
      checked: this.task.completed,
    };
  },
  props: {
    task: Object,
  },
  components: {
    Button, IconClose, IconFavorite,
  },
  methods: {
    onRemuveTask() {
      this.$store.dispatch('fetchRemuveTask', this.task.id);
    },
    onChangeTask(path, value) {
      const data = {
        [path]: value,
      };
      const param = {
        data,
        idTask: this.task.id,
      };
      this.$store.dispatch('fetchUpdateTask', param);
    },
  },
};
</script>

<style lang="scss">
.Task {
  justify-content: space-between;
  position: relative;

  &__close {
    position: absolute;
    top: 0;
    right: 0;
  }
  &__content-left {
    display: flex;
    align-items: center;
  }
}
</style>
