<template>
  <div class="main">
    <div class="nav">
      Sorting
      Filtering
    </div>
    <Form class="form"></Form>
    <TaskList class="list"></TaskList>
  </div>
</template>

<script>
import TaskList from '../components/TaskList';
import Form from '../components/Form';

export default {
  components: {
    TaskList, Form,
  },
};
</script>

<style lang="scss">
@import '../assets/_typography';
  .main {
    height: 100%;
    display: grid;
    grid-template-areas:
      "nav form"
      "nav list";
    grid-template-columns: 300px 1fr;
    grid-template-rows: 60px 1fr;
  }
  .nav {
    grid-area: nav;
    display: flex;
    background-color: $light;
  }
  .list {
    grid-area: list;
  }
  .form {
    grid-area: form;
  }

</style>
