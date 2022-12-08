<template>
  <div>
    <p :style="{color: color}" :class="['Typography', `Typography_${size}`]">
      <slot></slot>
    </p>
  </div>
</template>

<script setup>
  const props = defineProps({
    size: {
      type: String,
      default: 'sm',
    },
    sizeSpan: {
      type: String,
      default: 'sm',
    },
    color: {
      type: String,
      default: '#F9F9F9',
    },
  });
</script>

<style lang="scss" scoped>
  .Typography {
    &_xl {
      font-family: Avenir;
      @include size(18px, 24px, 0px, 400);
    }
    &_lg {
      font-family: Avenir;
      @include size(14px, 22px, 0px, 400);
    }
    &_code {
      font-family: Fira Code;
      @include size(14px, 19px, 0px, 450);
      white-space: nowrap;
    }
  }

  @include media('max', 'sm') {
    .Typography {
      &_xl {
        @include size(13px, 20px, 0px, 400);
      }

      &_code {
        @include size(13px, 18px, 0px, 450);
      }
    }
  }
</style>
w
