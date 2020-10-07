<template>
  <header class="Header">
    <div>
      <img class="Header__photo-profile" src="https://i.pinimg.com/564x/af/3f/3d/af3f3d49b8319e012090f414ecb04d6e.jpg" alt="myprofile" />
      <Button isHeader></Button>
    </div>
  </header>
</template>

<script>
import Button from '../Button';

export default {
  props: ['item'],
  components: {
    Button,
  },
};
</script>

<style lang="scss">
@import './style.scss';
</style>
