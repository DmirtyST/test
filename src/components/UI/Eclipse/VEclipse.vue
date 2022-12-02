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
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: absolute;
    width: 100%;
    height: 100%;
    &_item {
      border-radius: 50%;
      position: relative;
      z-index: 0;
    }
  }
  @include media('max', 'md') {
    .figure {
      padding: 0 0px;
      &_item {
        border-radius: 50%;
      }
    }
  }
</style>
