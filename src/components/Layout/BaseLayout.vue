<template>
  <div class="wrapper">
    <BaseHeader />
    <main class="page">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
  import BaseHeader from './BaseHeader.vue';
</script>

<style lang="scss" scoped>
  .wrapper {
    height: 100vh;
    padding-top: 5px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    scroll-snap-type: y mandatory;
    background-color: $black;
  }
  .page {
    flex: 1 1 auto;
  }
  @include media('max', 'lg') {
  }
</style>
