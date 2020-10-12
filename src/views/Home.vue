<template>
  <div>
    <Form></Form>
    <TaskList></TaskList>
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
