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
    height: auto;
    display: flex;
    flex-direction: column;
    overflow: auto;
    scroll-snap-type: y mandatory;
    background-color: $black;
  }
  .page {
    flex: 1 1 auto;
  }

  @media (max-height: '768px') {
    .wrapper {
      height: auto;
      display: flex;
      flex-direction: column;
      overflow: auto;
      scroll-snap-type: unset;
      background-color: $black;
    }
  }
  @include media('max', 'sm') {
    .wrapper {
      height: auto;
    }
  }
</style>
