<template>
  <span :class="['text-wrapper', `text-wrapper_${color}`]">
    <slot></slot>
  </span>
</template>

<script setup>
  const props = defineProps({
    color: {
      type: String,
      default: 'text-wrapper',
    },
  });
</script>

<style lang="scss" scoped>
  .text-wrapper {
    color: $white;

    &_green {
      color: $green;
    }
  }
</style>
