<template>
  <div class="">
    <div>
      Sorting
      Filtering
    </div>
    <div>
      <Form></Form>
      <TaskList></TaskList>
    </div>
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
