<template>
  <img
    v-if="isVisible === false"
    ref="obs"
    :class="['img', `img_${ps}`]"
    :data-src="sourse"
    alt="img"
  />
  <img
    v-else="isVisible === true"
    ref="obs"
    :class="['img', `img_${ps}`]"
    :src="sourse"
    alt="img"
  />
</template>

<script setup>
  import useObserver from '../../../Mixins/useObserver.js';
  const props = defineProps({
    ps: {
      type: String,
      default: '',
    },
    sourse: {
      type: String,
      default: '',
    },
  });
  const {isVisible, obs, inObse} = useObserver();
  inObse();
</script>

<style lang="scss" scoped>
  .img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    &_cover {
      object-fit: cover;
    }
    &_contain {
      object-fit: contain;
    }
  }
</style>
