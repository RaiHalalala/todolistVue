<template>
    <svg xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  data() {
    return {
      width: this.size || '24px',
      height: this.size || '24px',
      iconName: 'icon',
    };
  },
  computed: {
    iconColor() {
      const color = this.favorite && this.active ? '#ffd700' : '#CCCCCC';
      return color;
    },
    viewBox() {
      const sizeView = this?.size?.replace('px', '');
      const view = this.size ? `0 0 ${sizeView} ${sizeView}` : '0 0 24 24';
      return view;
    },
  },
  props: {
    largeIcon: Boolean,
    smallIcon: Boolean,
    active: Boolean,
    favorite: Boolean,
    size: String,
  },
};
</script>
