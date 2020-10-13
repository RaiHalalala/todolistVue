<template>
  <ul class="list-group">
    <div class="vt" @click="onChangeView('today')">
      <IconArrowBott/>
      tasks for today
    </div>
    <div v-if="tasksToday" class="Task-list__today">
      <div class="done">
        <Task v-for="task in todayDone" :key="task.id" :task="task"/>
      </div>
      <div class="done">
        <Task v-for="task in todayNotDone" :key="task.id" :task="task"/>
      </div>
    </div>
    <div class="vt" @click="onChangeView('tomorrow')">
      <IconArrowBott/>
      tasks for tomorrow
    </div>
    <div v-if="tasksTomorrow">
      <div class="done">
        <Task v-for="task in tomorrowDone" :key="task.id" :task="task"/>
      </div>
      <div class="done">
        <Task v-for="task in tomorrowNotDone" :key="task.id" :task="task"/>
      </div>
    </div>
    <div class="vt" @click="onChangeView('other')">
      <IconArrowBott/>
      other tasks
    </div>
    <div v-if="otherTasks">
      <div class="done">
        <Task v-for="task in otherDone" :key="task.id" :task="task"/>
      </div>
      <div class="done">
        <Task v-for="task in otherNotDone" :key="task.id" :task="task"/>
      </div>
    </div>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import Task from '../Task';
import IconArrowBott from '../icons/IconArrowBott';

export default {
  data() {
    return {
      tasksToday: true,
      tasksTomorrow: false,
      otherTasks: false,
    };
  },
  computed: {
    ...mapGetters(['allTasks']),
    todayDone() {
      const arr = this.allTasks[1].filter(({ completed }) => completed);
      return arr;
    },
    todayNotDone() {
      const arr = this.allTasks[1].filter(({ completed }) => !completed);
      return arr;
    },
    tomorrowDone() {
      const arr = this.allTasks[2].filter(({ completed }) => completed);
      return arr;
    },
    tomorrowNotDone() {
      const arr = this.allTasks[2].filter(({ completed }) => !completed);
      return arr;
    },
    otherDone() {
      const arr = this.allTasks[0].filter(({ completed }) => completed);
      return arr;
    },
    otherNotDone() {
      const arr = this.allTasks[0].filter(({ completed }) => !completed);
      return arr;
    },
  },
  async mounted() {
    this.$store.dispatch('fetchTasks');
  },
  components: {
    Task, IconArrowBott,
  },
  methods: {
    onChangeView(data) {
      if (data === 'today') {
        this.tasksToday = !this.tasksToday;
      } else if (data === 'tomorrow') {
        this.tasksTomorrow = !this.tasksTomorrow;
      } else {
        this.otherTasks = !this.otherTasks;
      }
    },
  },
};
</script>

<style lang="scss">
.vt {
  width: 100%;
  background-color: aquamarine;
  display: flex;
}
.Task-list{
  &__today {
    display: flex;
  }
}
.done {
  width: 50%;
}
</style>
