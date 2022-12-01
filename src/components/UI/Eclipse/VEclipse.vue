<template>
  <div class="figure">
    <div
      :style="{'background-color': `${color}`, width: `${w}px`, height: `${h}px`}"
      class="figure_item"
    ></div>
  </div>
</template>

<script setup>
  const props = defineProps({
    color: {
      type: String,
      default: 'red',
    },
    w: {
      type: String,
      default: '',
    },

    h: {
      type: String,
      default: '',
    },
  });
</script>

<style lang="scss" scoped>
  .figure {
    &_item {
      border-radius: 50%;
    }
  }
</style>
