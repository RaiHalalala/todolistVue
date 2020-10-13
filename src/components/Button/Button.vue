<template>
  <button :class="[
    'btn',
    { 'btn--header': isHeader },
    { 'btn--primary': isPrimary },
    { 'btn--icon': isIcon }
    ]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    isHeader: Boolean,
    isPrimary: Boolean,
    isIcon: Boolean,
  },
};
</script>

<style lang="scss">
@import '../../assets/_typography';
  .btn {
    border: 0;
    padding: 10px 30px;
    background-color: aqua;
    border-radius: 5px;

    &--header {
      width: auto;
      background-color: brown;
      border-radius: 50%;
      padding: 0;
    }
    &--primary {
      background-color: $primary;
      color: white;
    }
    &--icon {
      background-color: transparent;
      padding: 0;
    }
  }
</style>
