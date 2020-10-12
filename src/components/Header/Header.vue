<template>
  <header class="Header">
    <div>
      <Button isHeader>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"><path d="M0 0h24v24H0z"
          fill="none"/>
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
      </Button>
      <img
        class="Header__photo-profile"
        src="https://i.pinimg.com/564x/af/3f/3d/af3f3d49b8319e012090f414ecb04d6e.jpg"
        alt="myprofile" />
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
