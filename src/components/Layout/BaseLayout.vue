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
    min-height: 100vh;
    overflow: auto;
    scroll-snap-type: y mandatory;
    background-color: $black;
  }
  .page {
    flex-grow: 1;
  }

  @media (min-height: '768px') {
    .wrapper {
      display: flex;
      flex-direction: column;
      overflow: auto;
      scroll-snap-type: unset;
      background-color: $black;
    }
  }
 
</style>
