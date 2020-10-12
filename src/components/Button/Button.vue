<template>
  <button :class="['btn',{ 'btn--header': isHeader }]">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
    {{message}}
  </button>
</template>

<script>
export default {
  props: {
    isHeader: Boolean,
  },
};
</script>

<style lang="scss">
  .btn {
    border: 0;
    padding: 0;
    background-color: aqua;

    &--header {
      width: auto;
      background-color: brown;
      border-radius: 50%;
    }
  }
</style>
