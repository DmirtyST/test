<template>
  <span :class="['number', `number_${color}`]">
    <slot></slot>
  </span>
</template>

<script setup>
  const props = defineProps({
    color: {
      type: String,
      default: 'gray',
    },
  });
</script>

<style lang="scss" scoped>
  .number {
    font-family: Montserrat;

    &_gray {
      @include size(75px, 65px, 6.7px, 600);
      color: #181716;
      text-shadow: -1px 1px 2px rgba(255, 255, 255, 0.1),
        1px 1px 2px rgba(255, 255, 255, 0.1), 1px -1px 0 rgba(255, 255, 255, 0.1),
        -1px -1px 0 rgba(255, 255, 255, 0.1);
    }
    &_greenSm {
      font-family: Avenir;
      @include size(18px, 24px, 0px, 400);
      color: $green;
    }
    &_green {
      font-family: Avenir;
      @include size(30px, 38px, 0px, 400);
      color: $green;
    }
  }

  @include media('max', 'sm') {
    .number {
      &_green {
        @include size(20px, 24px, 0px, 400);
      }

      &_greenSm {
        font-family: Avenir;
        @include size(13px, 20px, 0px, 400);
        color: $green;
      }
    }
  }
</style>
