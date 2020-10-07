<template>
  <component :is="layout">
      <nav class="App">
        <router-link to="/">Home</router-link>
        <router-link to="/completed">Completed</router-link>
      </nav>
    <router-view/>
  </component>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout.vue';
import BaseLayout from '@/layouts/BaseLayout.vue';

export default {
  computed: {
    layout() {
      return `${this.$route.meta.layout || 'empty'}-layout`;
    },
  },
  components: {
    EmptyLayout, BaseLayout,
  },
};
</script>

<style lang="scss">
@import './style.scss';
</style>
